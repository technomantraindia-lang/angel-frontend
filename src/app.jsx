import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import logo from './logo.png';
import B2CApp from './b2c/B2CApp';


const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const IconEyeOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
);

const money = (value) => `₹${Number(value || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const csrf = () => document.querySelector('meta[name="csrf-token"]')?.content || '';

const forceDownload = async (e, url, filename) => {
  e.preventDefault();
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objUrl;
    a.download = filename || 'download';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(objUrl);
    document.body.removeChild(a);
  } catch (err) {
    window.open(url, '_blank');
  }
};

const ADMIN_RECOVERY_PHONE = '8200391418';

async function api(url, options = {}) {
  const isFormData = options.body instanceof FormData;
  const response = await fetch(`/portal/api${url}`, {
    credentials: 'same-origin',
    ...options,
    headers: {
      'Accept': 'application/json',
      'X-CSRF-TOKEN': csrf(),
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options.headers || {}),
    },
  });
  let data = {};
  try { data = await response.json(); } catch { data = {}; }
  if (!response.ok) {
    if (response.status === 419 || (data && data.message && data.message.includes('CSRF'))) {
      window.location.reload();
      return new Promise(() => { });
    }
    const firstError = data.errors ? Object.values(data.errors)[0]?.[0] : null;
    throw new Error(firstError || data.message || 'Something went wrong.');
  }
  return data;
}

function Alert({ message, type = 'success' }) {
  return message ? <div className={`alert ${type}`}>{message}</div> : null;
}

function downloadTextFile(content, filename, type = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
}

function NotificationMenu({ notifications, unreadCount, onMarkRead, onMarkAllRead }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [open]);

  return (
    <div className="notification-menu" onClick={(event) => event.stopPropagation()}>
      <button type="button" className="notification-bell" onClick={() => setOpen((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bell-icon">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
      </button>
      {open && (
        <div className="notification-panel">
          <div className="notification-panel-head">
            <strong>Notifications</strong>
            {notifications.length > 0 && (
              <button type="button" className="notification-link-btn" onClick={onMarkAllRead}>Mark all read</button>
            )}
          </div>
          {!notifications.length ? (
            <div className="notification-empty">No notifications yet.</div>
          ) : (
            <div className="notification-list">
              {notifications.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`notification-item ${item.is_read ? 'read' : 'unread'}`}
                  onClick={() => {
                    if (!item.is_read) onMarkRead(item.id);
                    setOpen(false);
                  }}
                >
                  <span className="notification-item-title">{item.title}</span>
                  <span className="notification-item-copy">{item.message}</span>
                  <span className="notification-item-time">{new Date(item.created_at).toLocaleString('en-IN')}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PortalNavMenu({ items, activeKey, onChange, badgeCount = 0 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [activeKey]);

  return (
    <div className={`portal-nav-shell ${open ? 'open' : ''}`}>
      <button type="button" className="portal-menu-toggle" onClick={() => setOpen((prev) => !prev)}>
        <span className="portal-menu-toggle-icon">Menu</span>
        <span>Sections</span>
        {badgeCount > 0 && <span className="portal-menu-count">{badgeCount}</span>}
      </button>
      <div className={`portal-nav ${open ? 'show-mobile' : ''}`}>
        {items.map((item) => (
          <button key={item.key} className={activeKey === item.key ? 'active' : ''} onClick={() => onChange(item.key)}>
            {item.label}
            {item.count > 0 && <span className="portal-tab-count">{item.count}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

function Header({ user, onLogout, onOpenProfile, notifications = [], unreadCount = 0, onMarkNotificationRead, onMarkAllNotificationsRead }) {
  return <header className="header">
    <div className="brand">
      <img src={logo} className="header-logo" alt="Angel Enterprise" />
      <div><small style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--muted)' }}>Dealer Printing Portal</small></div>
    </div>
    {user ? (
      <div className="header-actions">
        {user.role === 'dealer' && <span className="wallet-pill">Wallet: {money(user.wallet_balance)}</span>}
        {(user.role === 'dealer' || user.role === 'admin') && (
          <button className="btn ghost btn-profile" onClick={onOpenProfile}>Profile</button>
        )}
        <NotificationMenu
          notifications={notifications}
          unreadCount={unreadCount}
          onMarkRead={onMarkNotificationRead}
          onMarkAllRead={onMarkAllNotificationsRead}
        />
        <span className="user-pill">{user.name} · {user.role}</span>
        {user.role !== 'dealer' && (
          <a
            href="/b2c-admin"
            className="btn ghost"
            style={{ textDecoration: 'none', fontSize: '14px', padding: '10px 18px', borderRadius: '12px' }}
          >
            Open Customer Module
          </a>
        )}
        <button className="btn ghost" onClick={onLogout}>Logout</button>
      </div>
    ) : (
      <div className="header-actions">
        <a href="/" className="btn ghost" style={{ textDecoration: 'none', fontSize: '14px', padding: '10px 20px', borderRadius: '12px' }}>
          Back to Home &rarr;
        </a>
      </div>
    )}
  </header>;
}

function AuthPage({ onLogin }) {
  const [mode, setMode] = useState('login');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({ name: '', company_name: '', email: '', phone: '', address: '', pincode: '', gst_number: '', password: '', password_confirmation: '' });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault(); setError(''); setNotice('');
    try {
      if (mode === 'register') {
        const data = await api('/register', { method: 'POST', body: JSON.stringify(form) });
        setNotice(data.message); setMode('login');
      } else if (mode === 'forgot') {
        const data = await api('/forgot-password', { method: 'POST', body: JSON.stringify({ email: form.email, phone: form.phone, password: form.password, password_confirmation: form.password_confirmation }) });
        setNotice(data.message); setMode('login');
      } else {
        const data = await api('/login', { method: 'POST', body: JSON.stringify({ email: form.email, password: form.password }) });
        onLogin(data.user);
      }
    } catch (err) { setError(err.message); }
  }
  return <div className="auth-wrap">
    <div className="auth-info">
      <p className="eyebrow">DEALER ORDERING SYSTEM</p>
      <h1>Printing orders made fast and simple.</h1>
      <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#e7c47b', marginTop: '-8px', marginBottom: '24px', letterSpacing: '-0.02em' }}>Advanced Konica Production Printing Setup</h2>
      <p>Approved dealers can select products, upload artwork, add multiple jobs to cart and pay through wallet.</p>
      <div className="feature-grid"><span>Individual product price list</span><span>Multiple jobs in one cart</span><span>Artwork upload support</span><span>Staff-managed printing queue</span></div>
    </div>
    <div className="auth-card">
      <div className="tabs"><button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Login</button><button className={mode === 'register' ? 'active' : ''} onClick={() => setMode('register')}>Dealer Registration</button></div>
      <Alert message={notice} /><Alert message={error} type="error" />
      <form onSubmit={submit} className="form-grid">
        {mode === 'register' && <>
          <label>Dealer Name<input name="name" value={form.name} onChange={update} required /></label>
          <label>Company Name<input name="company_name" value={form.company_name} onChange={update} required /></label>
          <label>Mobile Number<input name="phone" value={form.phone} onChange={update} required /></label>
          <label>Pincode<input name="pincode" value={form.pincode} onChange={update} required pattern="[0-9]{6}" title="Please enter a valid 6-digit pincode" /></label>
          <label>GST Number <em>(optional)</em><input name="gst_number" value={form.gst_number} onChange={update} /></label>
          <label className="full">Address<textarea name="address" value={form.address} onChange={update} required rows="3" /></label>
        </>}
        <label className={mode === 'login' || mode === 'forgot' ? 'full' : ''}>Email<input type="email" name="email" value={form.email} onChange={update} required /></label>
        {mode === 'forgot' && <label className="full">Registered Mobile Number<input type="text" name="phone" value={form.phone} onChange={update} required /></label>}
        <label className={mode === 'login' || mode === 'forgot' ? 'full' : ''}>
          {mode === 'forgot' ? 'New Password' : 'Password'}
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={update}
              required
              style={{ paddingRight: '44px', width: '100%' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted)',
                width: '24px',
                height: '24px'
              }}
            >
              {showPassword ? <IconEyeOff /> : <IconEye />}
            </button>
          </div>
        </label>
        {(mode === 'register' || mode === 'forgot') && (
          <label className={mode === 'forgot' ? 'full' : ''}>
            {mode === 'forgot' ? 'Confirm New Password' : 'Password Confirmation'}
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password_confirmation"
                value={form.password_confirmation}
                onChange={update}
                required
                style={{ paddingRight: '44px', width: '100%' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  width: '24px',
                  height: '24px'
                }}
              >
                {showConfirmPassword ? <IconEyeOff /> : <IconEye />}
              </button>
            </div>
          </label>
        )}
        <button className="btn primary full" type="submit">{mode === 'login' ? 'Login to Portal' : mode === 'forgot' ? 'Reset Password' : 'Submit for Approval'}</button>
      </form>
      {mode === 'login' && <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <p className="helper" style={{ margin: 0 }}>Dealer accounts can login only after admin approval.</p>
        <button type="button" onClick={() => { setMode('forgot'); setError(''); setNotice(''); }} style={{ background: 'none', border: 'none', color: 'var(--blue)', fontSize: '13px', cursor: 'pointer', fontWeight: 'bold' }}>Forgot Password?</button>
      </div>}
      {mode === 'forgot' && <p className="helper" style={{ marginTop: '12px', marginBottom: 0 }}>
        Admin password reset mobile number: {ADMIN_RECOVERY_PHONE}. Dealers should use their own registered mobile number.
      </p>}
      {mode === 'forgot' && <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <button type="button" onClick={() => { setMode('login'); setError(''); setNotice(''); }} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer' }}>← Back to Login</button>
      </div>}
      <div style={{ marginTop: '24px', borderTop: '1.5px solid var(--line)', paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <a href="/" className="btn ghost" style={{ width: '100%', textDecoration: 'none', fontSize: '15px', fontWeight: '800', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px' }}>
          Go to Customer Login &rarr;
        </a>
      </div>
    </div>
  </div>;
}

function createEmptyGsmOption() {
  return { label: '', extra_price: '' };
}

function normalizeGsmOption(option, index = 0) {
  if (typeof option === 'string') {
    const label = option.trim();
    return label ? { id: `gsm-${index}-${label}`, label, extra_price: 0 } : null;
  }

  if (!option || typeof option !== 'object') {
    return null;
  }

  const label = String(option.label || '').trim();
  if (!label) {
    return null;
  }

  const extraPrice = Number(option.extra_price ?? 0);

  return {
    id: option.id || `gsm-${index}-${label}`,
    label,
    extra_price: Number.isFinite(extraPrice) ? extraPrice : 0,
  };
}

function getProductGsmOptions(product) {
  return Array.isArray(product?.gsm_options)
    ? product.gsm_options.map((option, index) => normalizeGsmOption(option, index)).filter(Boolean)
    : [];
}

function getSelectedGsmOption(product, selectedGsm) {
  return getProductGsmOptions(product).find((option) => option.label === selectedGsm) || null;
}

function getSelectedGsmExtraPrice(product, selectedGsm) {
  return Number(getSelectedGsmOption(product, selectedGsm)?.extra_price || 0);
}

function formatGsmOptionLabel(option) {
  const normalized = normalizeGsmOption(option);
  if (!normalized) return '';
  return normalized.extra_price > 0 ? `${normalized.label} (+${money(normalized.extra_price)})` : normalized.label;
}

const getTierPrice = (product, copies, printSide = 'front', selectedGsm = '') => {
  const count = Number(copies) || product.print_copy;
  const productPrice = printSide === 'both' && product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0 ? product.front_back_amount : product.amount;
  const gsmExtraPrice = getSelectedGsmExtraPrice(product, selectedGsm);
  const baseCost = (Number(productPrice) + gsmExtraPrice) * count;
  let discount = 0;
  if (product.pricing_tiers && product.pricing_tiers.length > 0) {
    for (const tier of product.pricing_tiers) {
      if ((tier.print_side || 'front') !== printSide) continue;
      const min = Number(tier.min) || 0;
      const max = tier.max !== null && tier.max !== '' && tier.max !== undefined ? Number(tier.max) : null;
      if (count >= min && (max === null || count <= max)) {
        discount = Number(tier.discount || 0);
        break;
      }
    }
  }
  return Math.round(baseCost * (1 - discount / 100));
};

const PRESET_THEMES = [
  { // Sky Blue (Default / general)
    primary: '#0ea5e9',
    primaryHover: '#0284c7',
    glow: 'rgba(14, 165, 233, 0.12)',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0d9488 100%)',
    bgLight: '#f0f9ff',
    text: '#0369a1',
    borderAccent: '#bae6fd'
  },
  { // Purple / Magenta (Color products)
    primary: '#d946ef',
    primaryHover: '#c026d3',
    glow: 'rgba(217, 70, 239, 0.12)',
    gradient: 'linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)',
    bgLight: '#fdf4ff',
    text: '#86198f',
    borderAccent: '#f5d0fe'
  },
  { // Indigo / Blue
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    glow: 'rgba(99, 102, 241, 0.12)',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    bgLight: '#eef2ff',
    text: '#3730a3',
    borderAccent: '#c7d2fe'
  },
  { // Emerald / Green
    primary: '#10b981',
    primaryHover: '#059669',
    glow: 'rgba(16, 185, 129, 0.12)',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    bgLight: '#ecfdf5',
    text: '#065f46',
    borderAccent: '#a7f3d0'
  },
  { // Amber / Orange
    primary: '#f59e0b',
    primaryHover: '#d97706',
    glow: 'rgba(245, 158, 11, 0.12)',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
    bgLight: '#fffbeb',
    text: '#92400e',
    borderAccent: '#fde68a'
  },
  { // Rose / Red
    primary: '#f43f5e',
    primaryHover: '#e11d48',
    glow: 'rgba(244, 63, 94, 0.12)',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
    bgLight: '#fff1f2',
    text: '#9f1239',
    borderAccent: '#fecdd3'
  },
  { // Teal
    primary: '#14b8a6',
    primaryHover: '#0d9488',
    glow: 'rgba(20, 184, 166, 0.12)',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
    bgLight: '#f0fdfa',
    text: '#115e59',
    borderAccent: '#99f6e4'
  },
  { // Slate / Dark Gray
    primary: '#475569',
    primaryHover: '#334155',
    glow: 'rgba(71, 85, 105, 0.12)',
    gradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
    bgLight: '#f8fafc',
    text: '#1e293b',
    borderAccent: '#e2e8f0'
  }
];

const getCategoryTheme = (name) => {
  const norm = (name || '').toLowerCase().trim();
  if (norm.includes('color')) {
    return PRESET_THEMES[1];
  }
  if (norm.includes('black') || norm.includes('white') || norm.includes('b&w') || norm.includes('mono')) {
    return PRESET_THEMES[7];
  }

  let hash = 0;
  for (let i = 0; i < norm.length; i++) {
    hash = norm.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PRESET_THEMES.length;
  return PRESET_THEMES[index];
};

const printLedger = (title, subtitle, transactions) => {
  const win = window.open('', '_blank');

  const rows = transactions.map(tx => {
    const isCredit = tx.type === 'credit';
    const date = new Date(tx.created_at).toLocaleString('en-IN');
    const typeLabel = tx.type.toUpperCase();
    const typeColor = isCredit ? '#15803d' : '#b91c1c';
    const amountSign = isCredit ? '+' : '-';

    let productsHtml = '—';
    if (tx.order && tx.order.items && tx.order.items.length > 0) {
      productsHtml = tx.order.items.map(item =>
        `<div>${item.product_name} <small style="color: #64748b;">(${item.print_copy * item.packs} copies)</small></div>`
      ).join('');
    }

    return `
      <tr>
        <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #475569;">${date}</td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px;"><span style="color: ${typeColor}; font-weight: bold;">${typeLabel}</span></td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #1e293b;">${tx.description}</td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px;">${productsHtml}</td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; text-align: right; color: ${typeColor}; font-weight: bold;">${amountSign} ₹${Number(tx.amount).toFixed(2)}</td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; text-align: right; font-weight: bold; color: #0f172a;">₹${Number(tx.balance_after).toFixed(2)}</td>
      </tr>
    `;
  }).join('');

  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Ledger - ${title}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; }
        .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { margin: 0; font-size: 24px; color: #0f172a; }
        .header p { margin: 5px 0 0 0; color: #64748b; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { text-align: left; padding: 12px 10px; background: #f8fafc; border-bottom: 2px solid #cbd5e1; color: #475569; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; }
        @media print {
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <p style="font-size: 12px; color: #94a3b8; margin-top: 8px;">Generated on: ${new Date().toLocaleString('en-IN')}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th style="text-align: left;">Date</th>
            <th style="text-align: left;">Type</th>
            <th style="text-align: left;">Description</th>
            <th style="text-align: left;">Products</th>
            <th style="text-align: right;">Amount</th>
            <th style="text-align: right;">Running Balance</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            window.print();
          }, 500);
        });
      </script>
    </body>
    </html>
  `);
  win.document.close();
};

function ProfileModal({ user, onClose, refreshUser }) {
  const isAdmin = user.role === 'admin';
  const [tab, setTab] = useState('profile');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: user.name || '',
    company_name: user.company_name || '',
    phone: user.phone || (isAdmin ? ADMIN_RECOVERY_PHONE : ''),
    address: user.address || '',
    pincode: user.pincode || '',
    gst_number: user.gst_number || '',
  });
  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  function updateProfileField(event) {
    const { name, value } = event.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
    if (notice) setNotice('');
    if (error) setError('');
  }

  function updatePasswordField(event) {
    const { name, value } = event.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
    if (notice) setNotice('');
    if (error) setError('');
  }

  async function saveProfile(event) {
    event.preventDefault();
    setSavingProfile(true);
    setNotice('');
    setError('');

    try {
      const response = await api('/profile/update', {
        method: 'POST',
        body: JSON.stringify({
          ...profileForm,
          phone: isAdmin ? ADMIN_RECOVERY_PHONE : profileForm.phone,
        }),
      });
      setNotice(response.message || 'Profile details updated successfully.');
      await refreshUser();
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingProfile(false);
    }
  }

  async function savePassword(event) {
    event.preventDefault();
    setSavingPassword(true);
    setNotice('');
    setError('');

    try {
      const response = await api('/profile/reset-password', {
        method: 'POST',
        body: JSON.stringify(passwordForm),
      });
      setNotice(response.message || 'Password updated successfully.');
      setPasswordForm({
        current_password: '',
        password: '',
        password_confirmation: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingPassword(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content panel profile-modal-content" onClick={(event) => event.stopPropagation()}>
        <div className="panel-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2>{isAdmin ? 'Admin Profile' : 'Dealer Profile'}</h2>
            <p>{isAdmin ? 'Update admin details and reset the portal password here.' : 'Update dealer details and reset the portal password here.'}</p>
          </div>
          <button type="button" className="remove" onClick={onClose} style={{ position: 'static', fontSize: '28px' }}>x</button>
        </div>

        <div className="profile-modal-tabs">
          <button type="button" className={tab === 'profile' ? 'active' : ''} onClick={() => setTab('profile')}>Profile</button>
          <button type="button" className={tab === 'security' ? 'active' : ''} onClick={() => setTab('security')}>Reset Password</button>
        </div>

        <Alert message={notice} />
        <Alert message={error} type="error" />

        {tab === 'profile' ? (
          <form onSubmit={saveProfile} className="form-grid profile-modal-form">
            <label>Full Name<input name="name" value={profileForm.name} onChange={updateProfileField} required /></label>
            <label>Company Name<input name="company_name" value={profileForm.company_name} onChange={updateProfileField} required /></label>
            <label>
              Email
              <input value={user.email || ''} disabled style={{ background: '#f8fafc', color: 'var(--muted)', cursor: 'not-allowed' }} />
            </label>
            <label>
              Phone Number
              <input
                name="phone"
                value={isAdmin ? ADMIN_RECOVERY_PHONE : profileForm.phone}
                onChange={updateProfileField}
                required
                disabled={isAdmin}
                style={isAdmin ? { background: '#f8fafc', color: 'var(--muted)', cursor: 'not-allowed' } : undefined}
              />
            </label>
            <label className="full">Address<textarea name="address" value={profileForm.address} onChange={updateProfileField} required rows="3" /></label>
            <label>Pincode<input name="pincode" value={profileForm.pincode} onChange={updateProfileField} required pattern="[0-9]{6}" title="Please enter a valid 6-digit pincode" /></label>
            <label>GST Number <em>(optional)</em><input name="gst_number" value={profileForm.gst_number} onChange={updateProfileField} /></label>
            {isAdmin ? (
              <div className="full profile-admin-note">
                Admin forgot-password access is locked to <strong>{ADMIN_RECOVERY_PHONE}</strong>.
              </div>
            ) : null}
            <button className="btn primary full" type="submit" disabled={savingProfile}>
              {savingProfile ? 'Saving...' : 'Save Profile'}
            </button>
          </form>
        ) : (
          <form onSubmit={savePassword} className="form-grid profile-modal-form reset-password-section">
            <label className="full">Current Password<input type="password" name="current_password" value={passwordForm.current_password} onChange={updatePasswordField} required /></label>
            <label className="full">New Password<input type="password" name="password" value={passwordForm.password} onChange={updatePasswordField} required /></label>
            <label className="full">Confirm New Password<input type="password" name="password_confirmation" value={passwordForm.password_confirmation} onChange={updatePasswordField} required /></label>
            <button className="btn primary full" type="submit" disabled={savingPassword}>
              {savingPassword ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function DealerPortal({ user, refreshUser, unreadNotifications = 0 }) {
  const [products, setProducts] = useState([]); const [cart, setCart] = useState([]); const [orders, setOrders] = useState([]);
  const [walletTransactions, setWalletTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(''); const [notice, setNotice] = useState(''); const [note, setNote] = useState(''); const [tab, setTab] = useState('shop');
  const [cartStep, setCartStep] = useState(1);
  const [chosenCopies, setChosenCopies] = useState({});
  const [chosenSides, setChosenSides] = useState({});
  const [chosenGsm, setChosenGsm] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  async function load() {
    try {
      const [p, o, wt, c] = await Promise.all([
        api('/products'),
        api('/my-orders'),
        api('/my-wallet-transactions'),
        api('/categories')
      ]);
      setProducts(p);
      setOrders(o);
      setWalletTransactions(wt);
      setCategories(c);
    } catch (e) {
      setError(e.message);
    }
  }
  useEffect(() => { load(); }, []);

  const groupedProducts = useMemo(() => {
    const groups = {};
    categories.forEach(cat => {
      groups[cat.name] = [];
    });
    products.forEach(p => {
      if (!groups[p.category]) {
        groups[p.category] = [];
      }
      groups[p.category].push(p);
    });
    // Filter out groups with 0 products
    const filtered = {};
    Object.keys(groups).forEach(k => {
      if (groups[k].length > 0) {
        filtered[k] = groups[k];
      }
    });
    return filtered;
  }, [products, categories]);

  const total = cart.reduce((sum, item) => sum + Number(item.amount) * item.packs, 0);

  function addToCart(product, copiesCount, printSide = 'front', selectedGsm = '') {
    const copies = Number(copiesCount) || product.print_copy;
    const unitPrice = getTierPrice(product, copies, printSide, selectedGsm);
    setCart(current => {
      const exists = current.some(i => i.id === product.id && i.print_side === printSide && (i.gsm || '') === (selectedGsm || ''));
      if (exists) {
        return current.map(i => i.id === product.id && i.print_side === printSide && (i.gsm || '') === (selectedGsm || '') ? { ...i, print_copy: copies, amount: unitPrice } : i);
      } else {
        return [...current, { ...product, print_copy: copies, print_side: printSide, gsm: selectedGsm || '', gsm_price: getSelectedGsmExtraPrice(product, selectedGsm), amount: unitPrice, packs: 1, file: null }];
      }
    });
    setNotice(`${product.name} (${copies} copies, ${printSide === 'both' ? 'Front & Back' : 'Front Only'}${selectedGsm ? `, ${selectedGsm}` : ''}) added to cart.`);
  }

  function updateCart(id, printSide, gsm, values) {
    setCart(current => current.map(item => item.id === id && item.print_side === printSide && (item.gsm || '') === (gsm || '') ? { ...item, ...values } : item));
  }

  function removeCart(id, printSide, gsm) {
    setCart(current => {
      const next = current.filter(item => !(item.id === id && item.print_side === printSide && (item.gsm || '') === (gsm || '')));
      if (next.length === 0) setCartStep(1);
      return next;
    });
  }



  async function checkout() {
    setError(''); setNotice('');
    if (!cart.length) { setError('Please add at least one product.'); return; }
    if (cart.some(item => !item.file)) { setError('Please upload artwork file for every selected product.'); return; }

    // Client side wallet check with alert popup
    if (total > Number(user.wallet_balance)) {
      alert(`⚠️ Insufficient Wallet Balance!\n\nYour total order cost is ${money(total)}, but you only have ${money(user.wallet_balance)} available in your wallet.\n\nYou cannot place this order. Please contact the administrator to refill your wallet balance.`);
      return;
    }

    try {
      const fd = new FormData();
      fd.append('items_json', JSON.stringify(cart.map(i => ({ product_id: i.id, packs: i.packs, print_copy: i.print_copy, print_side: i.print_side, gsm: i.gsm || null }))));
      if (note) fd.append('customer_note', note);
      cart.forEach((item, index) => { if (item.file) fd.append(`files[${index}]`, item.file); });
      const result = await api('/checkout', { method: 'POST', body: fd });
      setNotice(`${result.message} Order no: ${result.order.order_number}`); setCart([]); setCartStep(1); setNote('');
      await refreshUser(); await load(); setTab('orders');
    } catch (e) { setError(e.message); }
  }
  const navItems = [
    { key: 'shop', label: 'Order Products' },
    { key: 'orders', label: 'My Orders' },
    { key: 'adjustments', label: 'Wallet Ledger' },
  ];

  return <main className="portal">
    <PortalNavMenu items={navItems} activeKey={tab} onChange={setTab} badgeCount={unreadNotifications} />
    <Alert message={notice} /><Alert message={error} type="error" />
    {tab === 'shop' ? <div className="shop-layout">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
        {Object.keys(groupedProducts).length === 0 ? (
          <section className="catalog panel">
            <div className="panel-head">
              <h2>Products Catalog</h2>
              <p>No products are currently available in the catalog.</p>
            </div>
          </section>
        ) : (
          <>
            {/* Categories Tab Filter */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <button
                onClick={() => setSelectedCategory('All')}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  background: selectedCategory === 'All' ? 'var(--blue)' : 'rgba(255, 255, 255, 0.72)',
                  border: selectedCategory === 'All' ? '1.5px solid var(--blue)' : '1.5px solid rgba(13, 20, 36, 0.08)',
                  color: selectedCategory === 'All' ? '#ffffff' : 'var(--muted)',
                  transition: 'all 0.25s ease',
                  outline: 'none',
                  boxShadow: selectedCategory === 'All' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                All Categories
              </button>
              {Object.keys(groupedProducts).map(catName => {
                const isActive = selectedCategory === catName;
                const theme = getCategoryTheme(catName);
                return (
                  <button
                    key={catName}
                    onClick={() => setSelectedCategory(catName)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '999px',
                      fontFamily: 'inherit',
                      fontSize: '13px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      background: isActive ? theme.primary : 'rgba(255, 255, 255, 0.72)',
                      border: isActive ? `1.5px solid ${theme.primary}` : '1.5px solid rgba(13, 20, 36, 0.08)',
                      color: isActive ? '#ffffff' : 'var(--muted)',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                      boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    {catName}
                  </button>
                );
              })}
            </div>

            {(() => {
              const activeCats = selectedCategory === 'All' ? Object.keys(groupedProducts) : [selectedCategory].filter(Boolean);
              return activeCats.map(catName => {
                const catProducts = groupedProducts[catName];
                if (!catProducts || !catProducts.length) return null;
                const theme = getCategoryTheme(catName);
                return (
                  <section key={catName} className="panel" style={{ display: 'block', marginBottom: '30px', borderTop: `4px solid ${theme.primary}` }}>
                    <div className="panel-head" style={{ borderBottom: 'none', padding: '24px 28px 12px 28px' }}>
                      <h2 style={{ color: theme.text }}>{catName} Products</h2>
                      <p>Browse products and select copy quantities by color.</p>
                    </div>
                    <div style={{ padding: '0 28px 28px' }}>
                      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Product Name</th>
                              <th>Print Side</th>
                              <th>Select Copies</th>
                              <th style={{ textAlign: 'right' }}>Total Price</th>
                              <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {catProducts.map(product => {
                              const currentCopies = chosenCopies[product.id] ?? product.print_copy;
                              const currentSide = chosenSides[product.id] ?? 'front';
                              const totalPrice = getTierPrice(product, currentCopies, currentSide, '');
                              const perCopyPrice = currentCopies > 0 ? (totalPrice / currentCopies) : 0;
                              const hasBoth = product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0;

                              return (
                                <tr key={product.id}>
                                  <td data-label="Product Name">
                                    <strong style={{ color: 'var(--navy)', fontSize: '16px' }}>{product.name}</strong>
                                  </td>
                                  <td data-label="Print Side">
                                    <select
                                      value={currentSide}
                                      onChange={e => setChosenSides(prev => ({ ...prev, [product.id]: e.target.value }))}
                                      style={{ padding: '6px 10px', fontSize: '14px', borderRadius: '6px', border: '1.5px solid var(--line)' }}
                                    >
                                      <option value="front">Front Only</option>
                                      {hasBoth && <option value="both">Front & Back</option>}
                                    </select>
                                  </td>
                                  <td data-label="Select Copies">
                                    <div className="copies-adjuster">
                                      <button
                                        type="button"
                                        className="adjust-btn"
                                        onClick={() => {
                                          const val = Math.max(1, currentCopies - 1);
                                          setChosenCopies(prev => ({ ...prev, [product.id]: val }));
                                          setCart(current => current.map(i => i.id === product.id && i.print_side === currentSide ? { ...i, print_copy: val, amount: getTierPrice(product, val, currentSide, i.gsm) } : i));
                                        }}
                                      >
                                        −
                                      </button>
                                      <input
                                        type="number"
                                        min="1"
                                        value={currentCopies}
                                        onChange={e => {
                                          const val = Math.max(1, Number(e.target.value) || 1);
                                          setChosenCopies(prev => ({ ...prev, [product.id]: val }));
                                          setCart(current => current.map(i => i.id === product.id && i.print_side === currentSide ? { ...i, print_copy: val, amount: getTierPrice(product, val, currentSide, i.gsm) } : i));
                                        }}
                                      />
                                      <button
                                        type="button"
                                        className="adjust-btn"
                                        onClick={() => {
                                          const val = currentCopies + 1;
                                          setChosenCopies(prev => ({ ...prev, [product.id]: val }));
                                          setCart(current => current.map(i => i.id === product.id && i.print_side === currentSide ? { ...i, print_copy: val, amount: getTierPrice(product, val, currentSide, i.gsm) } : i));
                                        }}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </td>
                                  <td data-label="Total Price" style={{ textAlign: 'right' }}>
                                    <strong style={{ fontSize: '18px', color: 'var(--blue)', display: 'block' }}>{money(totalPrice)}</strong>
                                    <small style={{ color: 'var(--muted)', fontSize: '12px' }}>{currentCopies} copies · {money(perCopyPrice)} / copy</small>
                                  </td>
                                  <td data-label="Action" style={{ textAlign: 'right' }}>
                                    <button
                                      className="btn primary"
                                      onClick={() => addToCart(product, currentCopies, currentSide, '')}
                                      style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '8px' }}
                                    >
                                      + Add to Cart
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                );
              });
            })()}
          </>
        )}
      </div>
      <aside className="cart panel">
        {cart.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', padding: '14px 24px', background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
            <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: 'var(--blue)' }} title="Cart Selection"></div>
            <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: cartStep === 2 ? 'var(--blue)' : '#cbd5e1' }} title="Uploads & Checkout"></div>
          </div>
        )}
        {cartStep === 1 ? (
          <>
            <div className="cart-head"><h2>Shopping Cart</h2><span>{cart.length} items</span></div>
            {!cart.length && <div className="empty">Add products from the price list.</div>}
            {cart.map(item => <div className="cart-item" key={`${item.id}-${item.print_side}-${item.gsm || 'standard'}`}>
              <button className="remove" onClick={() => removeCart(item.id, item.print_side, item.gsm)}>×</button>
              <strong>{item.name} <small style={{ fontWeight: 'normal', color: 'var(--blue)' }}>({item.print_side === 'both' ? 'Front & Back' : 'Front Only'})</small></strong>
              <label>Copies<input type="number" min="1" value={item.print_copy} onChange={e => {
                const val = Math.max(1, Number(e.target.value) || 1);
                const originalProduct = products.find(p => p.id === item.id) || item;
                const newPrice = getTierPrice(originalProduct, val, item.print_side, item.gsm);
                updateCart(item.id, item.print_side, item.gsm, { print_copy: val, amount: newPrice });
                setChosenCopies(prev => ({ ...prev, [item.id]: val }));
              }} /></label>
              <b>{money(Number(item.amount))}</b>
            </div>)}
            {cart.length > 0 && <>
              <div className="cart-total" style={{ marginTop: '20px', marginBottom: '15px' }}><span>Subtotal</span><strong>{money(total)}</strong></div>
              <button className="btn primary wide" onClick={() => setCartStep(2)}>Next →</button>
            </>}
          </>
        ) : (
          <>
            <div className="cart-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Upload & Details</h2>
              <button className="btn ghost" style={{ padding: '4px 8px', fontSize: '12px' }} onClick={() => setCartStep(1)}>← Back</button>
            </div>
            {cart.map(item => <div className="cart-item" key={`${item.id}-${item.print_side}-${item.gsm || 'standard'}`} style={{ borderBottom: '1px solid var(--line)', padding: '18px 24px', display: 'block', background: '#fff' }}>
              <strong style={{ display: 'block', marginBottom: '4px' }}>{item.name} <small style={{ fontWeight: 'normal', color: 'var(--blue)' }}>({item.print_side === 'both' ? 'Front & Back' : 'Front Only'})</small></strong>
              <small style={{ display: 'block', marginBottom: '12px' }}>{item.print_copy} copies · {money(Number(item.amount))} per set{item.gsm ? ` · ${item.gsm}` : ''}</small>
              <label htmlFor={`file-upload-${item.id}-${item.print_side}-${item.gsm || 'standard'}`} style={{ display: 'block', padding: '16px 12px', border: '2px dashed #cbd5e1', borderRadius: '8px', background: '#f8fafc', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', fontWeight: 'bold', marginBottom: '6px' }}>📁 Choose Artwork File (.cdr, .jpg, .jpeg, .png, .zip)</span>
                <input
                  id={`file-upload-${item.id}-${item.print_side}-${item.gsm || 'standard'}`}
                  type="file"
                  accept=".cdr,.jpg,.jpeg,.png,.zip"
                  style={{ display: 'none' }}
                  onChange={e => {
                    const file = e.target.files[0];
                    if (file) {
                      const ext = file.name.split('.').pop().toLowerCase();
                      if (!['cdr', 'jpg', 'jpeg', 'png', 'zip'].includes(ext)) {
                        alert('Only .cdr, .jpg, .jpeg, .png, and .zip files are allowed.');
                        e.target.value = null;
                        updateCart(item.id, item.print_side, item.gsm, { file: null });
                        return;
                      }
                    }
                    updateCart(item.id, item.print_side, item.gsm, { file: file || null });
                  }}
                />
                {item.file ? (
                  <div style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 'bold', marginTop: '6px' }}>✓ {item.file.name}</div>
                ) : (
                  <span style={{ fontSize: '11px', color: 'var(--red)', background: 'var(--red-bg)', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', fontWeight: 'bold' }}>No File Chosen</span>
                )}
              </label>
            </div>)}
            <div style={{ padding: '0 24px' }}>
              <label style={{ marginTop: '15px', display: 'block' }}>Order Note<textarea value={note} onChange={e => setNote(e.target.value)} rows="2" placeholder="Instructions for printing team" /></label>
            </div>
            <div className="cart-total" style={{ marginTop: '20px' }}><span>Total</span><strong>{money(total)}</strong></div>
            <div className="balance-note" style={{ margin: '8px 24px 18px' }}>Available wallet: {money(user.wallet_balance)}</div>
            <button className="btn primary wide" onClick={checkout}>Pay by Wallet & Place Order</button>
          </>
        )}
      </aside>
    </div> : tab === 'orders' ? <OrderHistory orders={orders} /> : <WalletLedgerLog transactions={walletTransactions} />}
  </main>;
}
function WalletLedgerLog({ transactions }) {
  return (
    <section className="panel orders">
      <div className="panel-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Wallet Ledger & Adjustments Log</h2>
          <p>Detailed list of all wallet transactions, including deposits, order payments, and service adjustments.</p>
        </div>
        {transactions.length > 0 && (
          <button
            className="btn primary"
            onClick={() => printLedger("Wallet Ledger Log", "Personal Wallet Transactions Ledger", transactions)}
            style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '6px' }}
          >
            📄 Download PDF
          </button>
        )}
      </div>
      {!transactions.length ? (
        <div className="empty">No wallet transactions recorded yet.</div>
      ) : (
        <div style={{ padding: '0 28px 28px' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Products</th>
                <th style={{ textAlign: 'right' }}>Amount</th>
                <th style={{ textAlign: 'right' }}>Running Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => {
                const isCredit = tx.type === 'credit';
                return (
                  <tr key={tx.id}>
                    <td data-label="Date" style={{ color: 'var(--muted)' }}>{new Date(tx.created_at).toLocaleString('en-IN')}</td>
                    <td data-label="Type">
                      <span className={`status ${tx.type}`} style={{
                        background: isCredit ? 'var(--green-bg)' : 'var(--red-bg)',
                        color: isCredit ? 'var(--green)' : 'var(--red)',
                        borderColor: isCredit ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        padding: '4px 10px',
                        borderRadius: '99px',
                        fontSize: '11px',
                        fontWeight: '800',
                      }}>
                        {tx.type.toUpperCase()}
                      </span>
                    </td>
                    <td data-label="Description">
                      <div style={{ fontWeight: '600', color: 'var(--ink)' }}>{tx.description}</div>
                    </td>
                    <td data-label="Products">
                      {tx.order && tx.order.items && tx.order.items.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          {tx.order.items.map(item => (
                            <span key={item.id} style={{ fontSize: '13px', fontWeight: '750', color: 'var(--navy)' }}>
                              {item.product_name} <small style={{ fontWeight: 'bold', color: 'var(--blue)' }}>({item.print_side === 'both' ? 'F&B' : 'Front'})</small> <small style={{ color: 'var(--muted)', fontWeight: 'normal' }}>({item.print_copy * item.packs} copies{item.gsm ? ` · ${item.gsm}` : ''})</small>
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span style={{ color: 'var(--muted)', fontSize: '13px' }}>—</span>
                      )}
                    </td>
                    <td data-label="Amount" style={{ textAlign: 'right' }}>
                      <strong style={{ color: isCredit ? 'var(--green)' : 'var(--red)', fontSize: '15px' }}>
                        {isCredit ? `+ ${money(tx.amount)}` : `- ${money(tx.amount)}`}
                      </strong>
                    </td>
                    <td data-label="Running Balance" style={{ textAlign: 'right', fontWeight: 'bold', color: 'var(--ink)' }}>
                      {money(tx.balance_after)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function StatusBadge({ status }) { return <span className={`status ${status}`}>{status.replaceAll('_', ' ')}</span>; }

function B2BOrderDetailsModal({ order, onClose, showReceiptActions = false, onShareReceipt = null }) {
  if (!order) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content panel b2b-order-modal" onClick={(event) => event.stopPropagation()}>
        <div className="panel-head b2b-order-modal-head">
          <div>
            <h2>{order.order_number}</h2>
            <p>Detailed Dealer order view for admin and staff review.</p>
          </div>
          <div className="b2b-order-modal-meta">
            <StatusBadge status={order.status || 'new'} />
            <StatusBadge status={order.staff_status || 'pending'} />
            <button type="button" className="remove" onClick={onClose} style={{ position: 'static', fontSize: '28px' }}>x</button>
          </div>
        </div>

        <div className="b2b-order-modal-grid">
          <section className="b2b-order-panel">
            <h3>Dealer Details</h3>
            <div className="b2b-order-detail-list">
              <div><strong>Dealer</strong><span>{order.dealer?.company_name || 'N/A'}</span></div>
              <div><strong>Contact</strong><span>{order.dealer?.name || 'N/A'}</span></div>
              <div><strong>Phone</strong><span>{order.dealer?.phone || 'N/A'}</span></div>
              <div><strong>Email</strong><span>{order.dealer?.email || 'N/A'}</span></div>
              <div><strong>Assigned Staff</strong><span>{order.assigned_staff?.name || order.assignedStaff?.name || 'Unassigned'}</span></div>
              <div><strong>Deadline</strong><span>{order.deadline_at ? new Date(order.deadline_at).toLocaleString('en-IN') : 'No deadline set'}</span></div>
              <div><strong>Placed On</strong><span>{new Date(order.created_at).toLocaleString('en-IN')}</span></div>
              <div><strong>Total</strong><span>{money(order.grand_total)}</span></div>
            </div>
            {order.customer_note && (
              <div className="b2b-order-note">
                <strong>Dealer Note</strong>
                <p>{order.customer_note}</p>
              </div>
            )}
          </section>

          <section className="b2b-order-panel">
            <h3>Products & Artwork</h3>
            <div className="b2b-order-items">
              {(order.items || []).map((item) => (
                <article key={item.id} className="b2b-order-item">
                  <div className="b2b-order-item-top">
                    <div>
                      <strong>{item.product_name}</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Category: {item.category}</span>
                    </div>
                    <strong>{money(item.line_total)}</strong>
                  </div>
                  <div className="b2b-order-detail-list compact">
                    <div><strong>Print Side</strong><span>{item.print_side === 'both' ? 'Front & Back' : 'Front Only'}</span></div>
                    <div><strong>Paper GSM</strong><span>{item.gsm || 'Standard'}</span></div>
                    <div><strong>Copies</strong><span>{item.print_copy}</span></div>
                  </div>
                  {item.file_path ? (
                    <a
                      href={`/portal/api/download/${item.id}`}
                      className="file-link b2b-order-file"
                    >
                      Download {item.original_filename || 'Artwork'}
                    </a>
                  ) : (
                    <span className="b2b-order-missing-file">No artwork uploaded</span>
                  )}
                </article>
              ))}
            </div>
            {order.extra_charges?.length > 0 && (
              <div className="b2b-order-note">
                <strong>Extra Charges / Adjustments</strong>
                <div className="b2b-extra-list">
                  {order.extra_charges.map((charge) => (
                    <div key={charge.id} className="b2b-extra-item">
                      <span>{charge.description}</span>
                      <strong>{Number(charge.amount) < 0 ? `+ ${money(Math.abs(charge.amount))}` : `- ${money(charge.amount)}`}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {showReceiptActions && order.status === 'done' && (
              <div className="b2b-order-receipt-actions">
                <a href={`/portal/orders/${order.id}/receipt`} target="_blank" rel="noreferrer" className="btn primary">
                  View Receipt
                </a>
                {!order.receipt_shared && onShareReceipt ? (
                  <button type="button" className="btn ghost" onClick={() => onShareReceipt(order.id)}>
                    Share with Dealer
                  </button>
                ) : null}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function B2COrderDetailsModal({ order, onClose }) {
  if (!order) return null;

  const printSideLabels = {
    front: 'Front',
    front_back: 'Front & Back',
    single: 'Front',
    double: 'Front & Back',
  };

  const finishLabels = {
    none: 'Standard',
    foil: 'Gold Foil',
    textured: 'Textured Paper',
    wax_seal: 'Wax Seal',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content panel b2b-order-modal" onClick={(event) => event.stopPropagation()}>
        <div className="panel-head b2b-order-modal-head">
          <div>
            <h2>{order.order_number}</h2>
            <p>Detailed Customer order view for admin and staff review.</p>
          </div>
          <div className="b2b-order-modal-meta">
            <StatusBadge status={order.status || 'new'} />
            <StatusBadge status={order.staff_status || 'pending'} />
            <button type="button" className="remove" onClick={onClose} style={{ position: 'static', fontSize: '28px' }}>x</button>
          </div>
        </div>

        <div className="b2b-order-modal-grid">
          <section className="b2b-order-panel">
            <h3>Customer Details</h3>
            <div className="b2b-order-detail-list">
              <div><strong>Customer</strong><span>{order.customer?.name || order.contact_name || 'N/A'}</span></div>
              <div><strong>Phone</strong><span>{order.contact_phone || 'N/A'}</span></div>
              <div><strong>Email</strong><span>{order.contact_email || 'N/A'}</span></div>
              <div><strong>Address</strong><span>{order.customer?.address || 'No address provided'}</span></div>
              <div><strong>Assigned Staff</strong><span>{order.assigned_staff?.name || order.assignedStaff?.name || 'Unassigned'}</span></div>
              <div><strong>Deadline</strong><span>{order.deadline_at ? new Date(order.deadline_at).toLocaleString('en-IN') : 'No deadline set'}</span></div>
              <div><strong>Placed On</strong><span>{new Date(order.created_at).toLocaleString('en-IN')}</span></div>
              <div><strong>Total</strong><span>{money(order.grand_total)}</span></div>
            </div>
            {order.customer_note && (
              <div className="b2b-order-note">
                <strong>Customer Note</strong>
                <p>{order.customer_note}</p>
              </div>
            )}
          </section>

          <section className="b2b-order-panel">
            <h3>Products & Artwork</h3>
            <div className="b2b-order-items">
              {(order.items || []).map((item) => (
                <article key={item.id} className="b2b-order-item">
                  <div className="b2b-order-item-top">
                    <div>
                      <strong>{item.product_name}</strong>
                      {item.category_name && <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>Category: {item.category_name}</span>}
                      {!item.b2c_product_id && (
                        <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginTop: '4px' }}>Customize Color Print</span>
                      )}
                    </div>
                    <strong>{money(item.line_total)}</strong>
                  </div>
                  <div className="b2b-order-detail-list compact">
                    <div><strong>Print Side</strong><span>{printSideLabels[item.print_side] || item.print_side}</span></div>
                    {item.gsm && <div><strong>Paper GSM</strong><span>{item.gsm}</span></div>}
                    <div><strong>Quantity</strong><span>{item.quantity}</span></div>
                    {item.design_serial_number && <div><strong>Design Serial No</strong><span>{item.design_serial_number}</span></div>}
                    {item.finish && item.finish !== 'none' && <div><strong>Finish</strong><span>{finishLabels[item.finish] || item.finish}</span></div>}
                  </div>
                  {item.custom_text && (
                    <div className="b2b-order-note" style={{ marginTop: '8px', padding: '8px' }}>
                      <strong style={{ fontSize: '11px' }}>Customer Notes/Text</strong>
                      <p style={{ fontSize: '11px', margin: '4px 0 0 0' }}>{item.custom_text}</p>
                    </div>
                  )}
                  {item.file_path ? (
                    <a
                      href={`/portal/api/b2c/download/${item.id}`}
                      className="file-link b2b-order-file"
                      style={{ marginTop: '10px' }}
                    >
                      Download {item.original_filename || 'Artwork'}
                    </a>
                  ) : (
                    <span className="b2b-order-missing-file" style={{ marginTop: '10px', display: 'inline-block' }}>No artwork uploaded</span>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function OrderHistory({ orders }) {
  return <section className="panel orders"><div className="panel-head"><h2>My Orders</h2><p>Check job status and pickup information.</p></div>
    {!orders.length ? <div className="empty">No orders placed yet.</div> : orders.map(order => <article className="order-card" key={order.id} style={{ display: 'block', padding: '20px' }}>
      <div className="order-top" style={{ borderBottom: '1px solid var(--line)', paddingBottom: '15px', marginBottom: '15px' }}>
        <div>
          <strong>{order.order_number}</strong>
          <small>{new Date(order.created_at).toLocaleString('en-IN')}</small>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {order.receipt_shared && (
            <a
              href={`/portal/orders/${order.id}/receipt`}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ padding: '6px 12px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              📄 View Receipt
            </a>
          )}
          <StatusBadge status={order.status} />
          <b style={{ fontSize: '18px', color: 'var(--navy)' }}>{money(order.grand_total)}</b>
        </div>
      </div>

      <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '16px', marginBottom: '15px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Selected Products & Uploaded Artwork Files</div>
        <div style={{ display: 'grid', gap: '10px' }}>
          {order.items?.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#fff', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div>
                <span style={{ fontWeight: '600', color: 'var(--navy)' }}>{item.product_name} <small style={{ fontWeight: 'normal', color: 'var(--blue)' }}>({item.print_side === 'both' ? 'Front & Back' : 'Front Only'})</small></span>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Category: {item.category}</span>
                <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                  ({item.print_copy} copies{item.gsm ? ` · ${item.gsm}` : ''})
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--blue)' }}>{money(item.line_total)}</span>
                {item.file_path ? (
                  <a
                    className="file-link"
                    href={`/portal/api/download/${item.id}`}
                    style={{
                      background: 'var(--blue2)',
                      color: 'var(--blue)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    📥 Download ({item.original_filename || "artwork"})
                  </a>
                ) : (
                  <span style={{ fontSize: '11px', color: 'var(--red)', background: '#fff0f0', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>No Artwork Uploaded</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {order.extra_charges?.length > 0 && (
        <div style={{ marginTop: '15px', borderTop: '1px dashed var(--line)', paddingTop: '15px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Admin Price Adjustments & Extra Work</div>
          <div style={{ display: 'grid', gap: '8px' }}>
            {order.extra_charges.map(c => {
              const isPriceCut = Number(c.amount) < 0;
              return (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: isPriceCut ? 'var(--green-bg)' : '#f8fafc', padding: '8px 14px', borderRadius: '8px', border: `1px solid ${isPriceCut ? '#a7f3d0' : 'var(--line)'}` }}>
                  <div>
                    <span style={{ fontWeight: '600', color: 'var(--navy)', fontSize: '13px' }}>{c.description}</span>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '10px' }}>
                      ({isPriceCut ? 'Price Cut / Wallet Credit' : 'Extra Service / Wallet Debit'})
                    </span>
                  </div>
                  <span style={{ fontWeight: 'bold', color: isPriceCut ? 'var(--green)' : 'var(--red)', fontSize: '13px' }}>
                    {isPriceCut ? `+ ${money(Math.abs(c.amount))}` : `- ${money(c.amount)}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </article>)}
  </section>;
}

function AdminPanel({ unreadNotifications = 0 }) {
  const [tab, setTab] = useState('dashboard'); const [stats, setStats] = useState({}); const [dealers, setDealers] = useState([]); const [holdDealers, setHoldDealers] = useState([]); const [products, setProducts] = useState([]); const [orders, setOrders] = useState([]); const [staff, setStaff] = useState([]); const [error, setError] = useState(''); const [notice, setNotice] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [productForm, setProductForm] = useState({ category: '', name: '', print_copy: 1, amount: '', front_back_amount: '', gsm_options: [createEmptyGsmOption()], pricing_tiers: [], sort_order: 0, is_active: true });
  const [editingProductId, setEditingProductId] = useState(null);
  const [selectedDealerLedger, setSelectedDealerLedger] = useState(null);
  const [staffForm, setStaffForm] = useState({ name: '', email: '', password: '' });
  const [staffLoading, setStaffLoading] = useState(false);
  const [editingStaffId, setEditingStaffId] = useState(null);
  const [showInlineCategoryForm, setShowInlineCategoryForm] = useState(false);
  const [inlineCategoryName, setInlineCategoryName] = useState('');
  const [inlineCategoryLoading, setInlineCategoryLoading] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const [showDealerPassword, setShowDealerPassword] = useState({});

  const [flashSettings, setFlashSettings] = useState({
    dealer_flash_text: '',
    dealer_flash_image: null,
    dealer_flash_image_raw: '',
    dealer_flash_active: false,
    customer_flash_text: '',
    customer_flash_image: null,
    customer_flash_image_raw: '',
    customer_flash_active: false,
  });
  const [flashLoading, setFlashLoading] = useState(false);
  const [dealerImageFile, setDealerImageFile] = useState(null);
  const [customerImageFile, setCustomerImageFile] = useState(null);

  async function loadFlashSettings() {
    try {
      const data = await api('/admin/flash-messages');
      setFlashSettings(data);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    if (tab === 'flash_messages') {
      loadFlashSettings();
      setDealerImageFile(null);
      setCustomerImageFile(null);
    }
  }, [tab]);

  async function saveFlashSettings(e) {
    e.preventDefault();
    setError(''); setNotice('');
    setFlashLoading(true);
    try {
      const fd = new FormData();
      fd.append('dealer_flash_text', flashSettings.dealer_flash_text || '');
      fd.append('dealer_flash_active', flashSettings.dealer_flash_active ? '1' : '0');
      fd.append('customer_flash_text', flashSettings.customer_flash_text || '');
      fd.append('customer_flash_active', flashSettings.customer_flash_active ? '1' : '0');

      if (dealerImageFile) {
        fd.append('dealer_flash_image_file', dealerImageFile);
      }
      if (customerImageFile) {
        fd.append('customer_flash_image_file', customerImageFile);
      }

      if (!flashSettings.dealer_flash_image && flashSettings.dealer_flash_image_raw) {
        fd.append('clear_dealer_image', '1');
      }
      if (!flashSettings.customer_flash_image && flashSettings.customer_flash_image_raw) {
        fd.append('clear_customer_image', '1');
      }

      const res = await api('/admin/flash-messages', {
        method: 'POST',
        body: fd
      });
      setNotice(res.message || 'Settings updated successfully.');
      loadFlashSettings();
      setDealerImageFile(null);
      setCustomerImageFile(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setFlashLoading(false);
    }
  }

  const [searchDealer, setSearchDealer] = useState('');
  const [searchHoldDealer, setSearchHoldDealer] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [selectedProductCategory, setSelectedProductCategory] = useState('All');
  const [searchOrder, setSearchOrder] = useState('');
  const [searchStaff, setSearchStaff] = useState('');
  const [searchCancelledOrder, setSearchCancelledOrder] = useState('');

  const handleExportDealers = () => {
    const rows = [
      ['Name', 'Email', 'Phone', 'Company Name', 'Approval Status', 'Wallet Balance'],
      ...dealers.map((d) => ([
        d.name || '',
        d.email || '',
        d.phone ? `\t${d.phone}` : '',
        d.company_name || '',
        d.approval_status || '',
        String(d.wallet_balance || 0),
      ])),
    ];
    const csv = rows
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    downloadTextFile(csv, `b2b-dealers-${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv;charset=utf-8');
  };

  const filteredDealers = useMemo(() => {
    return dealers.filter(d =>
      (d.name || '').toLowerCase().includes(searchDealer.toLowerCase()) ||
      (d.email || '').toLowerCase().includes(searchDealer.toLowerCase()) ||
      (d.phone || '').toLowerCase().includes(searchDealer.toLowerCase()) ||
      (d.company_name || '').toLowerCase().includes(searchDealer.toLowerCase())
    );
  }, [dealers, searchDealer]);

  const filteredHoldDealers = useMemo(() => {
    return holdDealers.filter(d =>
      (d.name || '').toLowerCase().includes(searchHoldDealer.toLowerCase()) ||
      (d.email || '').toLowerCase().includes(searchHoldDealer.toLowerCase()) ||
      (d.phone || '').toLowerCase().includes(searchHoldDealer.toLowerCase()) ||
      (d.company_name || '').toLowerCase().includes(searchHoldDealer.toLowerCase())
    );
  }, [holdDealers, searchHoldDealer]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const categoryMatch = selectedProductCategory === 'All' || p.category === selectedProductCategory;
      const searchMatch = (p.name || '').toLowerCase().includes(searchProduct.toLowerCase()) ||
        (p.category || '').toLowerCase().includes(searchProduct.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [products, searchProduct, selectedProductCategory]);

  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      if (o.status === 'cancelled') return false;
      const q = searchOrder.toLowerCase();
      const orderNumberMatch = (o.order_number || '').toLowerCase().includes(q);
      const dealerCompanyMatch = (o.dealer?.company_name || '').toLowerCase().includes(q);
      const dealerNameMatch = (o.dealer?.name || '').toLowerCase().includes(q);
      const dealerPhoneMatch = (o.dealer?.phone || '').toLowerCase().includes(q);
      const itemsMatch = (o.items || []).some(item => (item.product_name || '').toLowerCase().includes(q));
      return orderNumberMatch || dealerCompanyMatch || dealerNameMatch || dealerPhoneMatch || itemsMatch;
    });
  }, [orders, searchOrder]);

  const filteredCancelledOrders = useMemo(() => {
    return orders.filter(o => {
      if (o.status !== 'cancelled') return false;
      const q = searchCancelledOrder.toLowerCase();
      const orderNumberMatch = (o.order_number || '').toLowerCase().includes(q);
      const dealerCompanyMatch = (o.dealer?.company_name || '').toLowerCase().includes(q);
      const dealerNameMatch = (o.dealer?.name || '').toLowerCase().includes(q);
      const dealerPhoneMatch = (o.dealer?.phone || '').toLowerCase().includes(q);
      const itemsMatch = (o.items || []).some(item => (item.product_name || '').toLowerCase().includes(q));
      return orderNumberMatch || dealerCompanyMatch || dealerNameMatch || dealerPhoneMatch || itemsMatch;
    });
  }, [orders, searchCancelledOrder]);

  const filteredStaff = useMemo(() => {
    return staff.filter(s =>
      (s.name || '').toLowerCase().includes(searchStaff.toLowerCase()) ||
      (s.email || '').toLowerCase().includes(searchStaff.toLowerCase())
    );
  }, [staff, searchStaff]);

  async function addStaff(e) {
    e.preventDefault();
    setError(''); setNotice('');
    setStaffLoading(true);
    try {
      if (editingStaffId) {
        await api(`/admin/staff/${editingStaffId}`, { method: 'PUT', body: JSON.stringify(staffForm) });
        setNotice('Staff member updated successfully.');
      } else {
        await api('/admin/staff', { method: 'POST', body: JSON.stringify(staffForm) });
        setNotice('Staff member created successfully.');
      }
      cancelStaffEdit();
      load();
    } catch (e) {
      setError(e.message);
    } finally {
      setStaffLoading(false);
    }
  }

  function startStaffEdit(staffMember) {
    setEditingStaffId(staffMember.id);
    setStaffForm({
      name: staffMember.name,
      email: staffMember.email,
      password: ''
    });
  }

  function cancelStaffEdit() {
    setEditingStaffId(null);
    setStaffForm({ name: '', email: '', password: '' });
  }

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const monthsNames = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []);

  const analyticsData = useMemo(() => {
    if (!stats.analytics) return [];
    const data = [];
    for (let m = 1; m <= 12; m++) {
      const found = stats.analytics.find(item => Number(item.month) === m);
      data.push({
        month: m,
        name: monthsNames[m - 1],
        total_orders: found ? Number(found.total_orders) : 0,
        total_earnings: found ? Number(found.total_earnings) : 0
      });
    }
    return data;
  }, [stats.analytics, monthsNames]);

  const maxEarnings = useMemo(() => {
    if (!analyticsData.length) return 1;
    const max = Math.max(...analyticsData.map(d => d.total_earnings));
    return max > 0 ? max : 1;
  }, [analyticsData]);

  const totalSummary = useMemo(() => {
    return analyticsData.reduce((acc, cur) => {
      acc.total_orders += cur.total_orders;
      acc.total_earnings += cur.total_earnings;
      return acc;
    }, { total_orders: 0, total_earnings: 0 });
  }, [analyticsData]);

  async function load(year = selectedYear) {
    try {
      const [s, d, hd, p, o, st, c] = await Promise.all([
        api(`/admin/dashboard?year=${year}`),
        api('/admin/dealers'),
        api('/admin/hold-dealers'),
        api('/admin/products'),
        api('/admin/orders'),
        api('/admin/staff-users'),
        api('/categories')
      ]);
      setStats(s);
      setDealers(d);
      setHoldDealers(hd);
      setProducts(p);
      setOrders(o);
      setStaff(st);
      setCategories(c);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    load(selectedYear);
  }, [selectedYear]);

  useEffect(() => {
    if (categories.length > 0 && !productForm.category) {
      setProductForm(prev => ({ ...prev, category: categories[0].name }));
    }
  }, [categories, productForm.category]);

  async function addCategory(e) {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    setError(''); setNotice('');
    setCategoryLoading(true);
    try {
      await api('/admin/categories', {
        method: 'POST',
        body: JSON.stringify({ name: newCategoryName.trim() })
      });
      setNotice('Category added successfully.');
      setNewCategoryName('');
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setCategoryLoading(false);
    }
  }

  async function handleDeleteCategory(category) {
    if (!confirm(`⚠️ Are you sure you want to permanently delete the category "${category.name}"?\n\nThis will fail if any products are still assigned to this category.`)) return;
    setError(''); setNotice('');
    try {
      const res = await api(`/admin/categories/${category.id}`, { method: 'DELETE' });
      setNotice(res.message || 'Category deleted successfully.');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleEditCategory(category) {
    const newName = window.prompt("Edit Category Name:", category.name);
    if (newName === null) return;
    const trimmed = newName.trim();
    if (!trimmed || trimmed === category.name) return;

    setError(''); setNotice('');
    try {
      await api(`/admin/categories/${category.id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: trimmed })
      });
      setNotice('Category renamed successfully.');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDeleteStaff(staffMember) {
    if (!confirm(`⚠️ Are you sure you want to permanently delete the staff member "${staffMember.name}"?\n\nThey will lose access to the portal instantly.`)) return;
    setError(''); setNotice('');
    try {
      const res = await api(`/admin/staff/${staffMember.id}`, { method: 'DELETE' });
      setNotice(res.message || 'Staff member deleted successfully.');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleCreateInlineCategory() {
    if (!inlineCategoryName.trim()) return;
    setError(''); setNotice('');
    setInlineCategoryLoading(true);
    try {
      const res = await api('/admin/categories', {
        method: 'POST',
        body: JSON.stringify({ name: inlineCategoryName.trim() })
      });
      setNotice(`Category "${res.name}" added successfully.`);

      const updatedCategories = await api('/categories');
      setCategories(updatedCategories);

      setProductForm(prev => ({ ...prev, category: res.name }));
      setShowInlineCategoryForm(false);
      setInlineCategoryName('');
    } catch (err) {
      setError(err.message);
    } finally {
      setInlineCategoryLoading(false);
    }
  }
  async function approval(id, status) {
    setError(''); setNotice('');
    try {
      await api(`/admin/dealers/${id}/approval`, { method: 'PUT', body: JSON.stringify({ approval_status: status }) });
      setNotice('Dealer status updated.');
      load();
    } catch (e) {
      setError(e.message);
    }
  }
  async function wallet(dealer, type) {
    const amount = prompt(`${type === 'credit' ? 'Add' : 'Deduct'} wallet amount:`);
    if (!amount) return;
    const description = prompt('Reason / note:', 'Wallet adjustment') || 'Wallet adjustment';
    setError(''); setNotice('');
    try {
      await api(`/admin/dealers/${dealer.id}/wallet`, { method: 'POST', body: JSON.stringify({ type, amount, description }) });
      setNotice('Wallet updated.');
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  async function addProduct(e) {
    e.preventDefault();
    setError(''); setNotice('');
    try {
      if (editingProductId) {
        await api(`/admin/products/${editingProductId}`, { method: 'PUT', body: JSON.stringify(productForm) });
        setNotice('Product updated.');
      } else {
        await api('/admin/products', { method: 'POST', body: JSON.stringify(productForm) });
        setNotice('Product added.');
      }
      cancelEdit();
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  async function deleteProduct(id) {
    if (!confirm('⚠️ Are you sure you want to permanently delete this product?\n\nIt will be completely removed from the catalog.')) return;
    setError(''); setNotice('');
    try {
      await api(`/admin/products/${id}`, { method: 'DELETE' });
      setNotice('Product deleted successfully.');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  function cancelEdit() {
    setEditingProductId(null);
    setProductForm({ category: categories[0]?.name || '', name: '', print_copy: 1, amount: '', front_back_amount: '', pricing_tiers: [], sort_order: 0, is_active: true });
    setShowInlineCategoryForm(false);
    setInlineCategoryName('');
  }

  function startEdit(product) {
    setEditingProductId(product.id);
    setProductForm({
      category: product.category,
      name: product.name,
      print_copy: product.print_copy,
      amount: product.amount,
      front_back_amount: product.front_back_amount !== null && product.front_back_amount !== undefined ? product.front_back_amount : '',
      pricing_tiers: product.pricing_tiers || [],
      sort_order: product.sort_order || 0,
      is_active: product.is_active
    });
  }

  const addTier = (printSide = 'front') => {
    setProductForm(prev => ({
      ...prev,
      pricing_tiers: [...(prev.pricing_tiers || []), { print_side: printSide, min: 1, max: '', discount: '' }]
    }));
  };

  const updateTier = (index, field, value) => {
    setProductForm(prev => {
      const tiers = [...(prev.pricing_tiers || [])];
      tiers[index] = { ...tiers[index], [field]: value };
      return { ...prev, pricing_tiers: tiers };
    });
  };

  const removeTier = (index) => {
    setProductForm(prev => ({
      ...prev,
      pricing_tiers: (prev.pricing_tiers || []).filter((_, i) => i !== index)
    }));
  };



  async function quickEdit(product) {
    startEdit(product);
    setTab('products');
    setNotice(`Editing product: ${product.name}. Scroll up to see the edit form.`);
  }
  async function addCharge(order) {
    const description = prompt('Extra work description e.g. Courier / Cutting / Discount');
    if (!description) return;
    const amount = prompt('Extra work charge / price adjustment (enter positive number to add price, or negative number to cut/discount price):');
    if (!amount) return;
    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount === 0) {
      alert('Please enter a valid non-zero number.');
      return;
    }
    const confirmMsg = numAmount > 0
      ? `Are you sure you want to ADD an extra charge of ${money(numAmount)} to this order?\nThis will deduct the amount from the dealer's wallet.`
      : `Are you sure you want to CUT the price by ${money(Math.abs(numAmount))}?\nThis will credit/refund this amount to the dealer's wallet.`;
    if (!confirm(confirmMsg)) return;
    setError(''); setNotice('');
    try {
      const res = await api(`/admin/orders/${order.id}/extra-charge`, {
        method: 'POST',
        body: JSON.stringify({
          description,
          amount: numAmount,
          deduct_from_wallet: true
        })
      });
      setNotice(numAmount > 0 ? 'Extra charge added and deducted from wallet.' : 'Price cut applied and refunded to wallet.');
      load();
    } catch (e) {
      setError(e.message);
    }
  }
  async function assignStaff(orderId, staffId, deadline) { setError(''); setNotice(''); try { await api(`/admin/orders/${orderId}/assign`, { method: 'PUT', body: JSON.stringify({ assigned_staff_id: staffId || null, deadline_at: deadline || null }) }); setNotice('Work assignment updated.'); load(); } catch (e) { setError(e.message); } }
  async function updateOrderStatus(orderId, status) { setError(''); setNotice(''); try { await api(`/admin/orders/${orderId}/status`, { method: 'PUT', body: JSON.stringify({ status }) }); setNotice('Order status updated.'); load(); } catch (e) { setError(e.message); } }
  async function shareReceipt(orderId) { setError(''); setNotice(''); try { await api(`/admin/orders/${orderId}/share-receipt`, { method: 'POST' }); setNotice('Receipt shared with dealer.'); load(); } catch (e) { setError(e.message); } }
  async function deleteOrder(orderId) {
    if (!window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) return;
    setError(''); setNotice('');
    try {
      await api(`/admin/orders/${orderId}`, { method: 'DELETE' });
      setNotice('Order deleted successfully.');
      load();
    } catch (e) {
      setError(e.message);
    }
  }
  const adminNavItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'dealers', label: 'Dealers', count: Number(stats.pending_dealers || 0) },
    { key: 'rejected_dealers', label: 'Reject Dealer' },
    { key: 'products', label: 'Products' },
    { key: 'orders', label: 'Orders', count: Number(stats.new_orders || 0) },
    { key: 'cancelled_orders', label: 'Cancelled Orders' },
    { key: 'staff', label: 'Manage Staff' },
    { key: 'flash_messages', label: 'Flash Messages' },
  ];
  return <main className="portal admin">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '32px', gap: '16px' }}>
      <PortalNavMenu items={adminNavItems} activeKey={tab} onChange={setTab} badgeCount={unreadNotifications} />
      <a href="/b2c-admin" className="btn primary" style={{ textDecoration: 'none', fontSize: '15px', fontWeight: '800', borderRadius: '99px', padding: '10px 24px', background: 'linear-gradient(135deg, #0d9488 0%, #0f172a 100%)', border: 'none' }}>
        Go to Customer Admin Module &rarr;
      </a>
    </div>
    <Alert message={notice} /><Alert message={error} type="error" />

    {tab === 'dashboard' && (
      <>
        <section className="stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            ['Pending Dealer Approvals', stats.pending_dealers, 'var(--gold)', '#fffbea'],
            ['Approved Dealers', stats.dealers, 'var(--green)', '#e5f7ed'],
            ['New Jobs', stats.new_orders, 'var(--blue)', '#e4f1ff'],
            ['Printing in Progress', stats.in_progress, '#06b6d4', '#ecfeff'],
            ['Total Value', money(stats.total_sales), 'var(--navy)', '#f3f4f6']
          ].map(([label, value, color, bg]) => (
            <div className="stat" key={label} style={{ borderLeft: `6px solid ${color}`, background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <small style={{ color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '8px' }}>{label}</small>
              <strong style={{ color: 'var(--navy)', fontSize: '28px', fontWeight: '700' }}>{value ?? 0}</strong>
            </div>
          ))}
        </section>

        <section className="analytics-section">
          <div className="analytics-header">
            <h2 className="analytics-title">Monthly Sales Analytics</h2>
            <div className="year-select-wrapper">
              <span className="year-select-label">Select Year:</span>
              <select
                className="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {(stats.available_years || [new Date().getFullYear()]).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="chart-card">
            <div className="chart-canvas">
              <div className="chart-grid">
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
              </div>
              {analyticsData.map((d) => {
                const percent = (d.total_earnings / maxEarnings) * 100;
                return (
                  <div key={d.month} className="chart-bar-wrapper">
                    <div
                      className="chart-bar"
                      style={{ height: `${Math.max(percent, 2)}%` }}
                    >
                      <div className="chart-bar-tooltip">
                        <div className="chart-tooltip-title">{monthsNames[d.month - 1]} {selectedYear}</div>
                        <div className="chart-tooltip-row">
                          <span>Orders:</span>
                          <span className="chart-tooltip-val">{d.total_orders}</span>
                        </div>
                        <div className="chart-tooltip-row">
                          <span>Earnings:</span>
                          <span className="chart-tooltip-val">{money(d.total_earnings)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="chart-labels">
              {analyticsData.map((d) => (
                <div key={d.month} className="chart-label">{d.name}</div>
              ))}
            </div>
          </div>

          {/* Monthly Table Card */}
          <div className="panel summary-table-card">
            <div className="panel-head" style={{ borderBottom: 'none', padding: '24px 28px 12px 28px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>{selectedYear} Performance Summary</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="analytics-table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Total Orders</th>
                    <th>Total Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.map((d) => (
                    <tr key={d.month}>
                      <td style={{ fontWeight: '750', color: 'var(--navy)' }}>{d.name}</td>
                      <td>{d.total_orders}</td>
                      <td style={{ fontWeight: '600' }}>{money(d.total_earnings)}</td>
                    </tr>
                  ))}
                  <tr className="total-row-footer">
                    <td>Total ({selectedYear})</td>
                    <td>{totalSummary.total_orders}</td>
                    <td>{money(totalSummary.total_earnings)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    )}

    {tab === 'dealers' && <section className="panel" style={{ padding: '20px' }}>
      <div className="panel-head" style={{ borderBottom: 'none', padding: '0 0 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2>Dealer Approval & Wallet Management</h2>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ position: 'relative', minWidth: '300px' }}>
            <input
              type="text"
              placeholder="Search dealers..."
              value={searchDealer}
              onChange={(e) => setSearchDealer(e.target.value)}
              style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '15px' }}
            />
          </div>
          <button
            type="button"
            className="btn ghost"
            onClick={handleExportDealers}
            style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}
          >
            Export CSV
          </button>
        </div>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Dealer Name / Email</th><th>Company Name</th><th>Password</th><th>Approval Status</th><th>Wallet Balance</th><th style={{ textAlign: 'right' }}>Actions</th></tr>
        </thead>
        <tbody>
          {filteredDealers.map(d => <tr key={d.id}>
            <td>
              <div style={{ fontWeight: '600', color: 'var(--navy)' }}>{d.name}</div>
              <small style={{ color: 'var(--muted)', fontSize: '12px' }}>{d.email} · {d.phone}</small>
            </td>
            <td><strong style={{ color: 'var(--navy)' }}>{d.company_name}</strong></td>
            <td>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '14px' }}>
                  {showDealerPassword[d.id] ? (d.plain_password || 'N/A') : '••••••••'}
                </span>
                <button
                  type="button"
                  onClick={() => setShowDealerPassword(prev => ({ ...prev, [d.id]: !prev[d.id] }))}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#64748b' }}
                  title={showDealerPassword[d.id] ? "Hide password" : "Show password"}
                >
                  {showDealerPassword[d.id] ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
            </td>
            <td><StatusBadge status={d.approval_status} /></td>
            <td><span style={{ fontWeight: 'bold', color: d.wallet_balance > 0 ? 'var(--green)' : 'var(--muted)' }}>{money(d.wallet_balance)}</span></td>
            <td className="actions" style={{ justifyContent: 'flex-end' }}>
              {d.approval_status !== 'approved' && <button style={{ background: '#e5f7ed', color: '#087147', borderColor: '#b7e3cd' }} onClick={() => approval(d.id, 'approved')}>Approve</button>}
              {d.approval_status !== 'hold' && <button style={{ background: '#fffbeb', color: '#b26c00', borderColor: '#fde68a' }} onClick={() => approval(d.id, 'hold')}>Hold</button>}
              <button style={{ background: '#e4f1ff', color: '#1267b2', borderColor: '#cfe7ff' }} onClick={() => wallet(d, 'credit')}>+ Credit</button>
              <button style={{ background: '#fffbeb', color: '#b26c00', borderColor: '#fde68a' }} onClick={() => wallet(d, 'debit')}>- Charge</button>
              <button style={{ background: '#f1f5f9', color: 'var(--navy)', borderColor: 'var(--surface-border)' }} onClick={() => setSelectedDealerLedger(d)}>Ledger</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </section>}

    {tab === 'rejected_dealers' && <section className="panel" style={{ padding: '20px' }}>
      <div className="panel-head" style={{ borderBottom: 'none', padding: '0 0 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2>Reject Dealer Review</h2>
          <p style={{ marginTop: '5px' }}>Dealers in this list are currently on hold or rejected. You can either approve them to restore access, or perform a final rejection on dealers that are on hold.</p>
        </div>
        <div style={{ position: 'relative', minWidth: '300px' }}>
          <input
            type="text"
            placeholder="Search hold/rejected dealers..."
            value={searchHoldDealer}
            onChange={(e) => setSearchHoldDealer(e.target.value)}
            style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '15px' }}
          />
        </div>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Dealer Name / Email</th><th>Company Name</th><th>Password</th><th>Approval Status</th><th>Wallet Balance</th><th style={{ textAlign: 'right' }}>Actions</th></tr>
        </thead>
        <tbody>
          {!filteredHoldDealers.length ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', color: 'var(--muted)', padding: '24px' }}>
                No dealers on hold or rejected to review.
              </td>
            </tr>
          ) : (
            filteredHoldDealers.map(d => <tr key={d.id}>
              <td>
                <div style={{ fontWeight: '600', color: 'var(--navy)' }}>{d.name}</div>
                <small style={{ color: 'var(--muted)', fontSize: '12px' }}>{d.email} · {d.phone}</small>
              </td>
              <td><strong style={{ color: 'var(--navy)' }}>{d.company_name}</strong></td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '14px' }}>
                    {showDealerPassword[d.id] ? (d.plain_password || 'N/A') : '••••••••'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowDealerPassword(prev => ({ ...prev, [d.id]: !prev[d.id] }))}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#64748b' }}
                    title={showDealerPassword[d.id] ? "Hide password" : "Show password"}
                  >
                    {showDealerPassword[d.id] ? <IconEyeOff /> : <IconEye />}
                  </button>
                </div>
              </td>
              <td><StatusBadge status={d.approval_status} /></td>
              <td><span style={{ fontWeight: 'bold', color: d.wallet_balance > 0 ? 'var(--green)' : 'var(--muted)' }}>{money(d.wallet_balance)}</span></td>
              <td className="actions" style={{ justifyContent: 'flex-end' }}>
                <button style={{ background: '#e5f7ed', color: '#087147', borderColor: '#b7e3cd' }} onClick={() => approval(d.id, 'approved')}>Approve</button>
                {d.approval_status === 'hold' && (
                  <button style={{ background: '#ffe5e5', color: '#b63131', borderColor: '#f2c4c4' }} onClick={() => {
                    if (confirm(`⚠️ Are you sure you want to FINALLY REJECT ${d.company_name}?\n\nThey will be locked out and completely barred from logging in.`)) {
                      approval(d.id, 'rejected');
                    }
                  }}>Reject</button>
                )}
                <button style={{ background: '#f1f5f9', color: 'var(--navy)', borderColor: 'var(--surface-border)' }} onClick={() => setSelectedDealerLedger(d)}>Ledger</button>
              </td>
            </tr>)
          )}
        </tbody>
      </table>
    </section>}

    {tab === 'products' && <div className="admin-products" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '110px' }}>
        <form className="panel product-form" onSubmit={addProduct} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--line)', position: 'static' }}>
          <h2>{editingProductId ? 'Edit Product' : 'Add Product'}</h2>
          <label>Category
            <select
              value={productForm.category}
              onChange={e => {
                if (e.target.value === '__NEW__') {
                  setShowInlineCategoryForm(true);
                  setProductForm({ ...productForm, category: '__NEW__' });
                } else {
                  setShowInlineCategoryForm(false);
                  setProductForm({ ...productForm, category: e.target.value });
                }
              }}
              required
              style={{ width: '100%', padding: '10px 14px', fontSize: '15px', border: '1.5px solid var(--line)', borderRadius: '8px', background: '#ffffff', color: 'var(--navy)' }}
            >
              {categories.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
              <option value="__NEW__" style={{ fontWeight: 'bold', color: 'var(--blue)' }}>+ Add New Category...</option>
            </select>
          </label>

          {showInlineCategoryForm && (
            <div style={{ margin: '4px 0 12px 0', padding: '12px', background: '#f8fafc', border: '1px solid var(--line)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--navy)' }}>New Category Details</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  value={inlineCategoryName}
                  onChange={e => setInlineCategoryName(e.target.value)}
                  placeholder="Enter new category name..."
                  style={{ flex: 1, padding: '8px 12px', fontSize: '14px', borderRadius: '6px', border: '1.5px solid var(--line)', background: '#fff' }}
                />
                <button
                  type="button"
                  className="btn primary"
                  disabled={inlineCategoryLoading || !inlineCategoryName.trim()}
                  onClick={handleCreateInlineCategory}
                  style={{ padding: '8px 14px', fontSize: '13px' }}
                >
                  {inlineCategoryLoading ? '...' : 'Add'}
                </button>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => {
                    setShowInlineCategoryForm(false);
                    setProductForm({ ...productForm, category: categories[0]?.name || '' });
                  }}
                  style={{ padding: '8px 12px', fontSize: '13px' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <label>Product Name<input value={productForm.name} onChange={e => setProductForm({ ...productForm, name: e.target.value })} required /></label>
          <label>Base Print Copies<input type="number" value={productForm.print_copy} onChange={e => setProductForm({ ...productForm, print_copy: Number(e.target.value) })} required /></label>
          <label>Front Only Base Amount (₹)<input type="number" step="0.01" value={productForm.amount} onChange={e => setProductForm({ ...productForm, amount: e.target.value })} required /></label>
          <label>Front & Back Base Amount (₹) <span style={{ fontWeight: 'normal', fontSize: '12px', color: 'var(--muted)' }}>(Optional, leave blank if not supported)</span><input type="number" step="0.01" value={productForm.front_back_amount || ''} onChange={e => setProductForm({ ...productForm, front_back_amount: e.target.value })} /></label>
          <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '10px' }} className="full">
            <input
              type="checkbox"
              checked={productForm.is_active}
              onChange={e => setProductForm({ ...productForm, is_active: e.target.checked })}
              style={{ width: 'auto', cursor: 'pointer' }}
            />
            <span>Product is Active & visible to dealers</span>
          </label>

          {/* Tier Pricing Section */}
          <div style={{ marginTop: '10px', borderTop: '1px solid var(--line)', paddingTop: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)' }}>Pricing Tiers (Optional)</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" className="btn ghost" style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '6px' }} onClick={() => addTier('front')}>+ Add Front Tier</button>
                <button type="button" className="btn ghost" style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '6px' }} onClick={() => addTier('both')}>+ Add Front&Back Tier</button>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '-4px', marginBottom: '12px' }}>
              Define custom discount percentages for print copy ranges.
            </p>
            {(productForm.pricing_tiers || []).map((tier, index) => {
              const isBoth = tier.print_side === 'both';
              const baseAmountForTier = isBoth ? productForm.front_back_amount : productForm.amount;
              return (
                <div key={index} style={{ marginBottom: '12px', padding: '10px', background: isBoth ? '#f0f9ff' : '#f8fafc', borderRadius: '8px', border: `1px solid ${isBoth ? '#bae6fd' : 'var(--line)'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: isBoth ? 'var(--blue)' : 'var(--navy)' }}>{isBoth ? 'Front & Back Tier' : 'Front Only Tier'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr auto', gap: '6px', alignItems: 'center' }}>
                    <input
                      type="number"
                      placeholder="Min"
                      value={tier.min || ''}
                      onChange={e => updateTier(index, 'min', e.target.value === '' ? '' : Number(e.target.value))}
                      style={{ padding: '6px 8px', fontSize: '12px', borderRadius: '6px' }}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={tier.max || ''}
                      onChange={e => updateTier(index, 'max', e.target.value === '' ? '' : Number(e.target.value))}
                      style={{ padding: '6px 8px', fontSize: '12px', borderRadius: '6px' }}
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Discount %"
                      value={tier.discount || ''}
                      onChange={e => updateTier(index, 'discount', e.target.value === '' ? '' : Number(e.target.value))}
                      style={{ padding: '6px 8px', fontSize: '12px', borderRadius: '6px' }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeTier(index)}
                      style={{ padding: '6px 8px', background: 'var(--red-bg)', color: 'var(--red)', border: '1px solid #fca5a5', borderRadius: '6px', fontSize: '12px' }}
                    >
                      ×
                    </button>
                  </div>
                  {Number(baseAmountForTier) > 0 && (
                    <div style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 'bold', marginTop: '4px', paddingLeft: '4px' }}>
                      💡 {money(Math.round(Number(baseAmountForTier) * (1 - (Number(tier.discount) || 0) / 100)))} per copy
                      {Number(tier.min) > 0 && ` (Total: ${money(Math.round(Number(baseAmountForTier) * Number(tier.min) * (1 - (Number(tier.discount) || 0) / 100)))} for ${tier.min} copies`}
                      {Number(tier.max) > 0 && ` to ${money(Math.round(Number(baseAmountForTier) * Number(tier.max) * (1 - (Number(tier.discount) || 0) / 100)))} for ${tier.max} copies`}
                      {Number(tier.min) > 0 && ')'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
            <button className="btn primary" style={{ flex: 1, padding: '10px' }} disabled={productForm.category === '__NEW__'}>{editingProductId ? 'Update' : 'Add Product'}</button>
            {editingProductId && (
              <button type="button" className="btn ghost" onClick={cancelEdit} style={{ flex: 1, padding: '10px' }}>Cancel</button>
            )}
          </div>
        </form>

        <form className="panel product-form" onSubmit={addCategory} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--line)', position: 'static' }}>
          <h2>Add Category</h2>
          <label>Category Name
            <input
              value={newCategoryName}
              onChange={e => setNewCategoryName(e.target.value)}
              placeholder="e.g. Visiting Cards"
              required
            />
          </label>
          <button className="btn primary full" type="submit" disabled={categoryLoading} style={{ marginTop: '10px' }}>
            {categoryLoading ? 'Adding Category...' : 'Add Category'}
          </button>

          <div style={{ marginTop: '20px', borderTop: '1.5px solid var(--line)', paddingTop: '15px' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)', display: 'block', marginBottom: '8px' }}>Existing Categories</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '200px', overflowY: 'auto', paddingRight: '4px' }}>
              {categories.map(c => (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>{c.name}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => handleEditCategory(c)}
                      style={{
                        background: '#e4f1ff',
                        color: '#1267b2',
                        border: '1px solid #cfe7ff',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(c)}
                      style={{
                        background: 'var(--red-bg)',
                        color: 'var(--red)',
                        border: '1px solid #fca5a5',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      <section className="panel grow" style={{ background: '#fff', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Product Chart & Price list</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <select
              value={selectedProductCategory}
              onChange={(e) => setSelectedProductCategory(e.target.value)}
              style={{ padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '14px', background: '#fff', outline: 'none' }}
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            <div style={{ position: 'relative', minWidth: '280px' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '14px' }}
              />
            </div>
          </div>
        </div>
        <table className="admin-table">
          <thead>
            <tr><th>Category</th><th>Product Name</th><th>Print Copies & Tiers</th><th>Base Amount (₹)</th><th style={{ textAlign: 'right' }}>Actions</th></tr>
          </thead>
          <tbody>
            {filteredProducts.map(p => <tr key={p.id}>
              <td style={{ color: 'var(--muted)', fontWeight: '600' }}>{p.category}</td>
              <td>
                <strong style={{ color: 'var(--navy)' }}>{p.name}</strong>
              </td>
              <td>
                {p.pricing_tiers && p.pricing_tiers.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--blue)' }}>Tiers defined:</span>
                    {p.pricing_tiers.map((t, idx) => (
                      <span key={idx} style={{ fontSize: '11px', color: 'var(--ink)' }}>
                        📄 {t.min}{t.max ? ` to ${t.max}` : '+'} copies = <strong>{t.discount}% discount</strong>
                      </span>
                    ))}
                  </div>
                ) : (
                  <span>{p.print_copy} copies</span>
                )}
              </td>
              <td style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <button style={{ background: '#f0f4f8', color: 'var(--navy)' }} onClick={() => quickEdit(p)}>Edit / Tiers</button>
                  {p.is_active ? (
                    <button style={{ background: '#fee2e2', color: '#ef4444', borderColor: '#fca5a5' }} onClick={() => deleteProduct(p.id)}>Delete</button>
                  ) : (
                    <span style={{ fontSize: '11px', color: 'var(--red)', background: 'var(--red-bg)', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold' }}>Deleted/Inactive</span>
                  )}
                </div>
              </td>
            </tr>)}
          </tbody>
        </table>
      </section>
    </div>}

    {tab === 'orders' && <div style={{ display: 'grid', gap: '24px' }}>
      <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy)', margin: 0 }}>All Orders & Artwork Files</h2>
          <p style={{ margin: '8px 0 0 0', color: 'var(--muted)', fontSize: '16px' }}>Track jobs, download dealer artwork, assign staff, and add extra work charges.</p>
        </div>
        <div style={{ position: 'relative', minWidth: '350px' }}>
          <input
            type="text"
            placeholder="Search orders..."
            value={searchOrder}
            onChange={(e) => setSearchOrder(e.target.value)}
            style={{ width: '100%', padding: '12px 18px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '15px' }}
          />
        </div>
      </div>
      <div style={{ display: 'grid', gap: '24px' }}>
        {filteredOrders.map(o => (
          <article key={o.id} className="panel" style={{ background: '#fff', padding: '24px', display: 'block' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', borderBottom: '1px solid var(--line)', paddingBottom: '15px', marginBottom: '15px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '18px', color: 'var(--navy)' }}>{o.order_number}</strong>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 'bold' }}>Overall:</span>
                  <StatusBadge status={o.status} />
                  <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 'bold', marginLeft: '5px' }}>Printing:</span>
                  <StatusBadge status={o.staff_status || 'pending'} />
                </div>
                <small style={{ display: 'block', color: 'var(--muted)', fontSize: '13px', marginTop: '6px' }}>
                  Dealer: <strong style={{ color: 'var(--navy)' }}>{o.dealer?.company_name || 'Demo Dealer'}</strong> ({o.dealer?.name || 'N/A'}) · Phone: {o.dealer?.phone || 'N/A'}
                </small>
                <small style={{ display: 'block', color: 'var(--muted)', fontSize: '13px', marginTop: '4px' }}>
                  Ordered: <strong>{new Date(o.created_at).toLocaleString('en-IN')}</strong>
                </small>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--navy)' }}>{money(o.grand_total)}</div>
                <button className="btn ghost" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => setSelectedOrderDetails(o)}>View Details</button>
                <button className="btn ghost" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => addCharge(o)}>+ Add Extra Work</button>
                <button className="btn ghost" style={{ padding: '6px 12px', fontSize: '12px', color: 'var(--red)', borderColor: '#fca5a5', background: 'var(--red-bg)' }} onClick={() => {
                  if (window.confirm("Are you sure you want to cancel this order? Money will be refunded to the dealer's wallet.")) {
                    updateOrderStatus(o.id, 'cancelled');
                  }
                }}>Cancel Order</button>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '16px', marginBottom: '15px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Selected Products & Uploaded Artwork Files</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {o.items?.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#fff', border: '1px solid var(--line)', borderRadius: '8px' }}>
                    <div>
                      <span style={{ fontWeight: '600', color: 'var(--navy)' }}>{item.product_name} <small style={{ fontWeight: 'normal', color: 'var(--blue)' }}>({item.print_side === 'both' ? 'Front & Back' : 'Front Only'})</small></span>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Category: {item.category}</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                        ({item.print_copy} copies{item.gsm ? ` · ${item.gsm}` : ''})
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ fontWeight: 'bold', color: 'var(--blue)' }}>{money(item.line_total)}</span>
                      {item.file_path ? (
                        <a
                          className="file-link"
                          href={`/portal/api/download/${item.id}`}
                          style={{
                            background: 'var(--blue2)',
                            color: 'var(--blue)',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          📥 Download ({item.original_filename || "CDR/Artwork"})
                        </a>
                      ) : (
                        <span style={{ fontSize: '11px', color: 'var(--red)', background: '#fff0f0', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>No Artwork Uploaded</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {o.extra_charges?.length > 0 && (
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', marginBottom: '15px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Price Adjustments & Extra Work History</div>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {o.extra_charges.map(c => {
                    const isPriceCut = Number(c.amount) < 0;
                    return (
                      <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: isPriceCut ? 'var(--green-bg)' : '#f8fafc', border: `1px solid ${isPriceCut ? '#a7f3d0' : 'var(--line)'}`, borderRadius: '8px' }}>
                        <div>
                          <strong style={{ color: 'var(--navy)', fontSize: '13px' }}>{c.description}</strong>
                          <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '10px' }}>
                            ({isPriceCut ? 'Price Cut / Wallet Credit' : 'Extra Service / Wallet Debit'})
                          </span>
                        </div>
                        <span style={{ fontWeight: 'bold', color: isPriceCut ? 'var(--green)' : 'var(--red)', fontSize: '13px' }}>
                          {isPriceCut ? `+ ${money(Math.abs(c.amount))}` : `- ${money(c.amount)}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', background: '#f1f5f9', borderRadius: '8px', padding: '12px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)', margin: 0 }}>
                  Assign Staff:
                  <select
                    value={o.assigned_staff_id || ''}
                    onChange={e => assignStaff(o.id, e.target.value, o.deadline_at)}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff' }}
                  >
                    <option value="">Unassigned</option>
                    {staff.map(s => <option key={s.id} value={s.id}>{s.name} ({s.email})</option>)}
                  </select>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)', margin: 0 }}>
                  Deadline:
                  <input
                    type="datetime-local"
                    value={o.deadline_at ? o.deadline_at.replace(' ', 'T').substring(0, 16) : ''}
                    onChange={e => assignStaff(o.id, o.assigned_staff_id, e.target.value)}
                    style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff' }}
                  />
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)', margin: 0 }}>
                  Order Status:
                  <select
                    value={o.status || 'new'}
                    onChange={e => updateOrderStatus(o.id, e.target.value)}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', fontWeight: 'bold' }}
                    disabled={o.status === 'cancelled'}
                  >
                    <option value="new">New</option>
                    <option value="working">Working</option>
                    <option value="done">Done</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </label>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {o.status === 'done' && (
                  <>
                    <a
                      href={`/portal/orders/${o.id}/receipt`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{ padding: '8px 14px', background: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      📄 View Receipt
                    </a>
                    {o.receipt_shared ? (
                      <span style={{ padding: '8px 14px', background: '#dcfce7', color: '#15803d', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>✓ Shared with Dealer</span>
                    ) : (
                      <button
                        onClick={() => shareReceipt(o.id)}
                        className="btn"
                        style={{ padding: '8px 14px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        🔗 Share with Dealer
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>}

    {tab === 'cancelled_orders' && <div style={{ display: 'grid', gap: '24px' }}>
      <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--navy)', margin: 0 }}>Cancelled Orders</h2>
          <p style={{ margin: '8px 0 0 0', color: 'var(--muted)', fontSize: '16px' }}>View and permanently delete cancelled B2B orders.</p>
        </div>
        <div style={{ position: 'relative', minWidth: '350px' }}>
          <input
            type="text"
            placeholder="Search cancelled orders..."
            value={searchCancelledOrder}
            onChange={(e) => setSearchCancelledOrder(e.target.value)}
            style={{ width: '100%', padding: '12px 18px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '15px' }}
          />
        </div>
      </div>
      <div style={{ display: 'grid', gap: '24px' }}>
        {filteredCancelledOrders.length === 0 ? (
          <div className="panel" style={{ padding: '24px', background: '#fff', textAlign: 'center', color: 'var(--muted)' }}>
            No cancelled orders found.
          </div>
        ) : filteredCancelledOrders.map(o => (
          <article key={o.id} className="panel" style={{ background: '#fff', padding: '24px', display: 'block' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', borderBottom: '1px solid var(--line)', paddingBottom: '15px', marginBottom: '15px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '18px', color: 'var(--navy)' }}>{o.order_number}</strong>
                  <StatusBadge status={o.status} />
                </div>
                <small style={{ display: 'block', color: 'var(--muted)', fontSize: '13px', marginTop: '6px' }}>
                  Dealer: <strong style={{ color: 'var(--navy)' }}>{o.dealer?.company_name || 'Demo Dealer'}</strong> ({o.dealer?.name || 'N/A'}) · Phone: {o.dealer?.phone || 'N/A'}
                </small>
                <small style={{ display: 'block', color: 'var(--muted)', fontSize: '13px', marginTop: '4px' }}>
                  Ordered: <strong>{new Date(o.created_at).toLocaleString('en-IN')}</strong>
                </small>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--navy)' }}>{money(o.grand_total)}</div>
                <button className="btn ghost" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => setSelectedOrderDetails(o)}>View Details</button>
                <button className="btn ghost" style={{ padding: '6px 12px', fontSize: '12px', color: 'var(--red)', borderColor: '#fca5a5', background: 'var(--red-bg)' }} onClick={() => deleteOrder(o.id)}>Remove Order</button>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Products</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {o.items?.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#fff', border: '1px solid var(--line)', borderRadius: '8px' }}>
                    <div>
                      <span style={{ fontWeight: '600', color: 'var(--navy)' }}>{item.product_name} <small style={{ fontWeight: 'normal', color: 'var(--blue)' }}>({item.print_side === 'both' ? 'Front & Back' : 'Front Only'})</small></span>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Category: {item.category}</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                        ({item.print_copy} copies{item.gsm ? ` · ${item.gsm}` : ''})
                      </span>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--blue)' }}>{money(item.line_total)}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>}

    <B2BOrderDetailsModal
      order={selectedOrderDetails}
      onClose={() => setSelectedOrderDetails(null)}
      showReceiptActions
      onShareReceipt={shareReceipt}
    />

    {tab === 'staff' && <div className="admin-products" style={{ gridTemplateColumns: '360px 1fr' }}>
      <form className="panel product-form" onSubmit={addStaff} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--line)' }}>
        <h2>{editingStaffId ? 'Edit Printing Staff' : 'Create Printing Staff'}</h2>
        <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '20px' }}>
          {editingStaffId
            ? 'Update name, email, or reset password for this staff member.'
            : 'Register credentials for printing queue staff members. They can login using their Email & Password.'}
        </p>
        <label>Full Name
          <input
            value={staffForm.name}
            onChange={e => setStaffForm({ ...staffForm, name: e.target.value })}
            placeholder="e.g. John Doe"
            required
          />
        </label>
        <label>Email ID (acts as Login ID)
          <input
            type="email"
            value={staffForm.email}
            onChange={e => setStaffForm({ ...staffForm, email: e.target.value })}
            placeholder="e.g. staff@example.com"
            required
          />
        </label>
        <label>Password {editingStaffId && <em style={{ fontWeight: 'normal', fontSize: '12px', color: 'var(--muted)' }}>(Leave blank to keep unchanged)</em>}
          <input
            type="text"
            value={staffForm.password}
            onChange={e => setStaffForm({ ...staffForm, password: e.target.value })}
            placeholder={editingStaffId ? "Leave empty to keep current" : "Min 8 characters"}
            required={!editingStaffId}
          />
        </label>
        <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
          <button className="btn primary" style={{ flex: 1, padding: '10px' }} disabled={staffLoading}>
            {editingStaffId ? (staffLoading ? 'Updating...' : 'Update Staff') : (staffLoading ? 'Creating...' : 'Create Staff')}
          </button>
          {editingStaffId && (
            <button type="button" className="btn ghost" onClick={cancelStaffEdit} style={{ flex: 1, padding: '10px' }}>Cancel</button>
          )}
        </div>
      </form>
      <section className="panel grow" style={{ background: '#fff', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'block' }}>
            <h2 style={{ margin: 0 }}>Existing Printing Staff</h2>
            <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '4px 0 0 0' }}>Active printing staff accounts that can access the queue system.</p>
          </div>
          <div style={{ position: 'relative', minWidth: '250px' }}>
            <input
              type="text"
              placeholder="Search staff..."
              value={searchStaff}
              onChange={(e) => setSearchStaff(e.target.value)}
              style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '14px' }}
            />
          </div>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Email / Login ID</th>
              <th>Password</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!filteredStaff.length ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', color: 'var(--muted)', padding: '24px' }}>
                  No printing staff accounts registered yet.
                </td>
              </tr>
            ) : (
              filteredStaff.map(s => (
                <tr key={s.id}>
                  <td><strong style={{ color: 'var(--navy)' }}>{s.name}</strong></td>
                  <td style={{ color: 'var(--muted)' }}>{s.email}</td>
                  <td>
                    <code style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', color: 'var(--blue)' }}>
                      {s.plain_password || 'N/A'}
                    </code>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => startStaffEdit(s)}
                        style={{
                          background: '#f0f4f8',
                          color: 'var(--navy)',
                          border: '1.5px solid var(--line)',
                          borderRadius: '6px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteStaff(s)}
                        style={{
                          background: 'var(--red-bg)',
                          color: 'var(--red)',
                          border: '1px solid #fca5a5',
                          borderRadius: '6px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>}

    {tab === 'flash_messages' && (
      <div className="admin-flash-messages" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid var(--line)' }}>
        <div style={{ gridColumn: '1 / -1', borderBottom: '1px solid var(--line)', paddingBottom: '16px', marginBottom: '12px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', color: 'var(--navy)' }}>Custom Flash Messages</h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '4px 0 0' }}>Configure custom pop-up announcements (images and text) shown to Dealers and Customers after login.</p>
        </div>

        {/* Dealer B2B Settings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', border: '1px solid var(--line)', borderRadius: '12px', background: '#f8fafc' }}>
          <h3 style={{ margin: 0, color: 'var(--navy)', borderBottom: '1.5px solid var(--line)', paddingBottom: '8px' }}>Dealer Portal (B2B) Announcement</h3>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
            <input
              type="checkbox"
              checked={flashSettings.dealer_flash_active}
              onChange={e => setFlashSettings({ ...flashSettings, dealer_flash_active: e.target.checked })}
              style={{ width: '18px', height: '18px' }}
            />
            Show announcement to Dealers
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: '700' }}>
            Announcement Text <span style={{ fontWeight: 'normal', color: 'var(--muted)', fontSize: '12px' }}>(Enter each point on a new line. They will be rendered as bullet points in the popup)</span>
            <textarea
              value={flashSettings.dealer_flash_text || ''}
              onChange={e => setFlashSettings({ ...flashSettings, dealer_flash_text: e.target.value })}
              rows={6}
              placeholder={`• Check all spelling and grammar properly.\n• Confirm mobile number, address, email, and QR code details.\n• Share high-resolution images and logos only.`}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: '700' }}>
            Banner Image (Optional)
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                if (e.target.files && e.target.files[0]) {
                  setDealerImageFile(e.target.files[0]);
                }
              }}
              style={{ fontSize: '14px' }}
            />
          </label>

          {/* Image Preview / Clear B2B Image */}
          {(dealerImageFile || flashSettings.dealer_flash_image) && (
            <div style={{ position: 'relative', width: '100%', height: '150px', borderRadius: '8px', border: '1px solid var(--line)', overflow: 'hidden', background: '#fff' }}>
              <img
                src={dealerImageFile ? URL.createObjectURL(dealerImageFile) : flashSettings.dealer_flash_image}
                alt="Dealer Banner Preview"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <button
                type="button"
                onClick={() => {
                  setDealerImageFile(null);
                  setFlashSettings({ ...flashSettings, dealer_flash_image: null });
                }}
                style={{ position: 'absolute', top: '8px', right: '8px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Customer B2C Settings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', border: '1px solid var(--line)', borderRadius: '12px', background: '#f8fafc' }}>
          <h3 style={{ margin: 0, color: 'var(--navy)', borderBottom: '1.5px solid var(--line)', paddingBottom: '8px' }}>Customer Portal (B2C) Announcement</h3>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
            <input
              type="checkbox"
              checked={flashSettings.customer_flash_active}
              onChange={e => setFlashSettings({ ...flashSettings, customer_flash_active: e.target.checked })}
              style={{ width: '18px', height: '18px' }}
            />
            Show announcement to Customers
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: '700' }}>
            Announcement Text <span style={{ fontWeight: 'normal', color: 'var(--muted)', fontSize: '12px' }}>(Enter each point on a new line. They will be rendered as bullet points in the popup)</span>
            <textarea
              value={flashSettings.customer_flash_text || ''}
              onChange={e => setFlashSettings({ ...flashSettings, customer_flash_text: e.target.value })}
              rows={6}
              placeholder={`• Check all spelling and grammar properly.\n• Confirm mobile number, address, email, and QR code details.\n• Share high-resolution images and logos only.`}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: '700' }}>
            Banner Image (Optional)
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                if (e.target.files && e.target.files[0]) {
                  setCustomerImageFile(e.target.files[0]);
                }
              }}
              style={{ fontSize: '14px' }}
            />
          </label>

          {/* Image Preview / Clear B2C Image */}
          {(customerImageFile || flashSettings.customer_flash_image) && (
            <div style={{ position: 'relative', width: '100%', height: '150px', borderRadius: '8px', border: '1px solid var(--line)', overflow: 'hidden', background: '#fff' }}>
              <img
                src={customerImageFile ? URL.createObjectURL(customerImageFile) : flashSettings.customer_flash_image}
                alt="Customer Banner Preview"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <button
                type="button"
                onClick={() => {
                  setCustomerImageFile(null);
                  setFlashSettings({ ...flashSettings, customer_flash_image: null });
                }}
                style={{ position: 'absolute', top: '8px', right: '8px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
              >
                ×
              </button>
            </div>
          )}
        </div>

        <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
          <button
            onClick={saveFlashSettings}
            className="btn primary"
            disabled={flashLoading}
            style={{ padding: '12px 32px', fontSize: '15px', fontWeight: 'bold', borderRadius: '8px' }}
          >
            {flashLoading ? 'Saving Settings...' : 'Save Announcement Settings'}
          </button>
        </div>
      </div>
    )}

    {selectedDealerLedger && (
      <div className="modal-overlay" onClick={() => setSelectedDealerLedger(null)}>
        <div className="modal-content panel" onClick={e => e.stopPropagation()} style={{ maxWidth: '850px', width: '90%', maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="panel-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2>{selectedDealerLedger.company_name} - Wallet History</h2>
              <p>Owner: {selectedDealerLedger.name} · Current Balance: {money(selectedDealerLedger.wallet_balance)}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {selectedDealerLedger.wallet_transactions && selectedDealerLedger.wallet_transactions.length > 0 && (
                <button
                  className="btn primary"
                  onClick={() => printLedger(`${selectedDealerLedger.company_name} - Wallet Ledger`, `Owner: ${selectedDealerLedger.name} · Current Balance: ${money(selectedDealerLedger.wallet_balance)}`, selectedDealerLedger.wallet_transactions)}
                  style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '6px' }}
                >
                  📄 Download PDF
                </button>
              )}
              <button className="btn ghost" onClick={() => setSelectedDealerLedger(null)} style={{ padding: '6px 12px', fontSize: '24px', border: 'none', background: 'transparent' }}>×</button>
            </div>
          </div>
          <div style={{ padding: '24px' }}>
            {!selectedDealerLedger.wallet_transactions || !selectedDealerLedger.wallet_transactions.length ? (
              <div className="empty">No wallet transactions recorded for this dealer.</div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Products</th>
                    <th style={{ textAlign: 'right' }}>Amount</th>
                    <th style={{ textAlign: 'right' }}>Running Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDealerLedger.wallet_transactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(tx => {
                    const isCredit = tx.type === 'credit';
                    return (
                      <tr key={tx.id}>
                        <td style={{ color: 'var(--muted)' }}>{new Date(tx.created_at).toLocaleString('en-IN')}</td>
                        <td>
                          <span className={`status ${tx.type}`} style={{
                            background: isCredit ? 'var(--green-bg)' : 'var(--red-bg)',
                            color: isCredit ? 'var(--green)' : 'var(--red)',
                            borderColor: isCredit ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            padding: '4px 10px',
                            borderRadius: '99px',
                            fontSize: '11px',
                            fontWeight: '800',
                          }}>
                            {tx.type.toUpperCase()}
                          </span>
                        </td>
                        <td><span style={{ fontWeight: '600', color: 'var(--ink)' }}>{tx.description}</span></td>
                        <td>
                          {tx.order && tx.order.items && tx.order.items.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              {tx.order.items.map(item => (
                                <span key={item.id} style={{ fontSize: '13px', fontWeight: '750', color: 'var(--navy)' }}>
                                  {item.product_name} <small style={{ color: 'var(--muted)', fontWeight: 'normal' }}>({item.print_copy * item.packs} copies)</small>
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span style={{ color: 'var(--muted)', fontSize: '13px' }}>—</span>
                          )}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <strong style={{ color: isCredit ? 'var(--green)' : 'var(--red)', fontSize: '15px' }}>
                            {isCredit ? `+ ${money(tx.amount)}` : `- ${money(tx.amount)}`}
                          </strong>
                        </td>
                        <td style={{ textAlign: 'right', fontWeight: '700', color: 'var(--ink)' }}>{money(tx.balance_after)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    )}
  </main>;
}

function StaffModulePanel({ unreadNotifications = 0 }) {
  const [jobs, setJobs] = useState([]);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [activeModule, setActiveModule] = useState('b2b');
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const [searchStaffJob, setSearchStaffJob] = useState('');
  const staffNavItems = [
    { key: 'b2b', label: 'Dealer Jobs' },
    { key: 'b2c', label: 'Customer Jobs' },
  ];

  async function load(module = activeModule) {
    try {
      const endpoint = module === 'b2c' ? '/staff/b2c/queue' : '/staff/queue';
      setJobs(await api(endpoint));
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    setSearchStaffJob('');
    load(activeModule);
  }, [activeModule]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const q = searchStaffJob.toLowerCase();
      const orderNumberMatch = (job.order_number || '').toLowerCase().includes(q);
      const clientNameMatch = activeModule === 'b2c'
        ? (job.customer?.name || job.contact_name || '').toLowerCase().includes(q)
        : (job.dealer?.company_name || job.dealer?.name || '').toLowerCase().includes(q);
      const phoneMatch = activeModule === 'b2c'
        ? (job.contact_phone || '').toLowerCase().includes(q)
        : (job.dealer?.phone || '').toLowerCase().includes(q);
      const itemsMatch = (job.items || []).some(item => (item.product_name || '').toLowerCase().includes(q));
      return orderNumberMatch || clientNameMatch || phoneMatch || itemsMatch;
    });
  }, [jobs, searchStaffJob, activeModule]);

  async function status(orderId, statusVal) {
    try {
      const endpoint = activeModule === 'b2c'
        ? `/staff/b2c/orders/${orderId}/status`
        : `/staff/orders/${orderId}/status`;
      await api(endpoint, { method: 'PUT', body: JSON.stringify({ status: statusVal }) });
      setNotice('Job status updated.');
      load(activeModule);
    } catch (e) {
      setError(e.message);
    }
  }

  return <main className="portal">
    <Alert message={notice} />
    <Alert message={error} type="error" />
    <section className="panel">
      <div className="panel-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <h2>{activeModule === 'b2c' ? 'Customer Printing Job Queue' : 'Dealer Printing Job Queue'}</h2>
          <p>Switch between Dealer and Customer jobs from here.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchStaffJob}
              onChange={(e) => setSearchStaffJob(e.target.value)}
              style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '14px' }}
            />
          </div>
          <PortalNavMenu items={staffNavItems} activeKey={activeModule} onChange={setActiveModule} badgeCount={unreadNotifications} />
        </div>
      </div>

      {!filteredJobs.length ? (
        <div style={{ padding: '24px', color: 'var(--muted)' }}>
          No matching {activeModule === 'b2c' ? 'customer' : 'dealer'} jobs found.
        </div>
      ) : filteredJobs.map((job, index) => (
        <article className="job" key={`${activeModule}-${job.id}`} style={{ display: 'grid', gridTemplateColumns: '58px 1fr auto auto', gap: '20px', alignItems: 'center', padding: '20px', margin: '20px', border: '1px solid var(--line)', borderRadius: '12px', background: '#fff' }}>
          <div className="seq">#{index + 1}</div>
          <div className="job-detail" style={{ display: 'block' }}>
            <strong style={{ fontSize: '18px', color: 'var(--navy)' }}>{job.order_number}</strong>
            <span style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--ink)', marginTop: '4px' }}>
              {activeModule === 'b2c'
                ? `${job.customer?.name || job.contact_name || 'Customer'} · ${job.contact_phone || 'No phone'}`
                : `${job.dealer?.company_name || 'Dealer'} · ${job.dealer?.phone || 'No phone'}`}
            </span>
            <small style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
              Deadline: {job.deadline_at ? new Date(job.deadline_at).toLocaleString('en-IN') : 'Not provided'}
            </small>

            <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '12px', marginTop: '12px' }}>
              <div style={{ display: 'grid', gap: '8px' }}>
                {job.items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 12px', background: '#fff', border: '1px solid var(--line)', borderRadius: '6px', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--navy)', display: 'block' }}>
                        {activeModule === 'b2c'
                          ? `${item.product_name} (${item.category_name || 'N/A'}) — ${item.quantity} copies`
                          : `${item.product_name} (${item.category || 'N/A'}) — ${item.print_copy} copies`}
                      </span>
                      {activeModule === 'b2c' && !item.b2c_product_id && (
                        <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginTop: '2px' }}>Customize Color Print</span>
                      )}
                      {activeModule === 'b2c' && item.design_serial_number ? (
                        <small style={{ display: 'block', marginTop: '4px', color: 'var(--muted)', fontSize: '11px', fontWeight: '700' }}>
                          Design Serial No: {item.design_serial_number}
                        </small>
                      ) : null}
                    </div>
                    {item.file_path ? (
                      <a
                        className="file-link"
                        href={activeModule === 'b2c' ? `/portal/api/b2c/download/${item.id}` : `/portal/api/download/${item.id}`}
                        style={{
                          background: 'var(--blue2)',
                          color: 'var(--blue)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Download ({item.original_filename || 'Artwork'})
                      </a>
                    ) : (
                      <span style={{ fontSize: '11px', color: 'var(--red)', background: '#fff0f0', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>No Artwork</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <StatusBadge status={job.staff_status || 'pending'} />
          <div className="job-actions" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
            <button onClick={() => setSelectedOrderDetails(job)}>View Details</button>
            <button onClick={() => status(job.id, 'started')}>Start</button>
            <button onClick={() => status(job.id, 'ready')}>Ready</button>
            <button onClick={() => status(job.id, 'picked_up')}>Picked Up</button>
          </div>
        </article>
      ))}
    </section>

    {activeModule === 'b2b' ? (
      <B2BOrderDetailsModal order={selectedOrderDetails} onClose={() => setSelectedOrderDetails(null)} />
    ) : (
      <B2COrderDetailsModal order={selectedOrderDetails} onClose={() => setSelectedOrderDetails(null)} />
    )}
  </main>;
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [transitionLoading, setTransitionLoading] = useState(false);
  const [transitionText, setTransitionText] = useState('Loading...');
  const [flashMessage, setFlashMessage] = useState(null);
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    if (user && user.role === 'dealer') {
      const dismissed = sessionStorage.getItem('b2b_flash_dismissed');
      if (!dismissed) {
        api('/flash-message')
          .then(data => {
            if (data && data.active) {
              setFlashMessage(data);
              setShowFlash(true);
            }
          })
          .catch(err => console.error(err));
      }
    }
  }, [user]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (anchor.target === '_blank') return;

      const isSwitching = href && (
        href === '/portal' ||
        href.startsWith('/portal/') ||
        href === '/b2c-admin' ||
        href.startsWith('/b2c-admin/') ||
        href === '/'
      );

      if (isSwitching) {
        e.preventDefault();
        setTransitionText(href === '/' ? 'Returning to Home...' : 'Switching Modules...');
        setTransitionLoading(true);
        setTimeout(() => {
          window.location.href = href;
        }, 1000);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  async function getUser() {
    try {
      const data = await api('/me');
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { getUser(); }, []);

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadNotifications(0);
      return;
    }

    loadNotifications();
  }, [user?.id, user?.role]);

  async function loadNotifications() {
    try {
      const data = await api('/notifications');
      setNotifications(data.notifications || []);
      setUnreadNotifications(data.unread_count || 0);
    } catch {
      setNotifications([]);
      setUnreadNotifications(0);
    }
  }

  async function markNotificationRead(notificationId) {
    await api(`/notifications/${notificationId}/read`, { method: 'POST', body: JSON.stringify({}) });
    await loadNotifications();
  }

  async function markAllNotificationsRead() {
    await api('/notifications/read-all', { method: 'POST', body: JSON.stringify({}) });
    await loadNotifications();
  }

  async function logout() {
    setTransitionText('Logging out...');
    setTransitionLoading(true);
    sessionStorage.removeItem('b2b_flash_dismissed');
    sessionStorage.removeItem('b2c_flash_dismissed');
    const startTime = Date.now();
    try {
      await api('/logout', { method: 'POST', body: JSON.stringify({}) });
    } catch (e) {
      console.error(e);
    }
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, 1000 - elapsed);
    setTimeout(() => {
      window.location.reload();
    }, remaining);
  }

  if (loading || transitionLoading) {
    return (
      <div className="loader-page-transition">
        <div className="b2c-loader-card">
          <img src={logo} alt="Angel logo" className="b2c-loader-logo" />
          <div className="b2c-loader-text">{loading ? 'Loading Portal...' : transitionText}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header
        user={user}
        onLogout={logout}
        onOpenProfile={() => setShowProfile(true)}
        notifications={notifications}
        unreadCount={unreadNotifications}
        onMarkNotificationRead={markNotificationRead}
        onMarkAllNotificationsRead={markAllNotificationsRead}
      />
      {!user ? (
        <AuthPage onLogin={() => window.location.reload()} />
      ) : user.role === 'dealer' ? (
        <DealerPortal user={user} refreshUser={getUser} unreadNotifications={unreadNotifications} />
      ) : user.role === 'admin' ? (
        <AdminPanel unreadNotifications={unreadNotifications} />
      ) : (
        <StaffModulePanel unreadNotifications={unreadNotifications} />
      )}

      {showProfile && user && (user.role === 'dealer' || user.role === 'admin') && (
        <ProfileModal user={user} onClose={() => setShowProfile(false)} refreshUser={getUser} />
      )}

      {showFlash && flashMessage && (
        <div className="b2b-flash-overlay">
          <div className="b2b-flash-card">
            <button
              type="button"
              className="b2b-flash-close"
              onClick={() => {
                sessionStorage.setItem('b2b_flash_dismissed', '1');
                setShowFlash(false);
              }}
              title="Close Notice"
            >
              ×
            </button>

            <div className={`b2b-flash-grid ${flashMessage.image ? 'has-image' : ''}`}>
              {flashMessage.image && (
                <div className="b2b-flash-image-wrapper">
                  <img
                    src={flashMessage.image}
                    alt="Announcement Banner"
                    className="b2b-flash-image"
                  />
                </div>
              )}

              <div className="b2b-flash-content">
                <h2 className="b2b-flash-title">Notice</h2>

                {flashMessage.text && (
                  <ul className="b2b-flash-list">
                    {flashMessage.text.split('\n').map(l => l.trim()).filter(l => l.length > 0).map((line, idx) => {
                      const cleanLine = line.replace(/^[•\-\*\✦\s\d+\.\)\-\s]+/, '').trim();
                      return (
                        <li key={idx} className="b2b-flash-item">
                          {cleanLine}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const pathname = window.location.pathname;
const isPortal = pathname.startsWith('/portal');
const isB2C = ['/b2c', '/b2c-admin', '/my-orders', '/profile', '/printing-policy', '/about-us', '/contact-us', '/products', '/product']
  .some((path) => pathname === path || pathname.startsWith(`${path}/`));

if (isPortal) {
  createRoot(document.getElementById('app')).render(<App />);
} else if (isB2C) {
  createRoot(document.getElementById('app')).render(<B2CApp />);
} else {
  createRoot(document.getElementById('app')).render(<B2CApp />);
}
