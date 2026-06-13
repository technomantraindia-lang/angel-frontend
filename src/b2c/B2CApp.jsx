import React, { useEffect, useMemo, useState } from 'react';
import './b2c.css';
import logo from '../logo.png';
import carouselTwo from '../carousle 2.png';
import carouselThree from '../carousle 3.png';
import carouselFour from '../carousle 4.png';
import machineImage from '../machine.png';
const heroBanner = '/b2c-hero-banner.png';

const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-6-11a6 6 0 0 1 12 0c0 6.65-6 11-6 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const IconEyeOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
);

const IconSpark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"></path><path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z"></path><path d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16z"></path></svg>
);

const money = (value) => `Rs. ${Number(value || 0).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
const acceptedArtworkTypes = '.cdr,.zip,.png,.jpg,.jpeg';
const defaultPolicy = {
  title: 'Printing Policy',
  content: '',
};

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
function B2CNotificationMenu({ notifications = [], unreadCount = 0, onMarkRead, onMarkAllRead }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [open]);

  return (
    <div className="b2c-notification-menu" onClick={(event) => event.stopPropagation()}>
      <button type="button" className="b2c-notification-bell" onClick={() => setOpen((prev) => !prev)}>
        <span>Bell</span>
        {unreadCount > 0 ? <span className="b2c-notification-count">{unreadCount}</span> : null}
      </button>
      {open ? (
        <div className="b2c-notification-panel">
          <div className="b2c-notification-panel-head">
            <strong>Notifications</strong>
            {notifications.length ? (
              <button type="button" className="b2c-notification-link" onClick={onMarkAllRead}>Mark all read</button>
            ) : null}
          </div>
          {!notifications.length ? (
            <div className="b2c-notification-empty">No notifications yet.</div>
          ) : (
            <div className="b2c-notification-list">
              {notifications.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`b2c-notification-item ${item.is_read ? 'read' : 'unread'}`}
                  onClick={() => {
                    if (!item.is_read) onMarkRead(item.id);
                    setOpen(false);
                  }}
                >
                  <span className="b2c-notification-title">{item.title}</span>
                  <span className="b2c-notification-copy">{item.message}</span>
                  <span className="b2c-notification-time">{new Date(item.created_at).toLocaleString('en-IN')}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

function B2CHeaderDrawer({ open, onClose, label, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className={`b2c-mobile-menu-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <div className={`b2c-mobile-menu-panel ${open ? 'open' : ''}`} onClick={(event) => event.stopPropagation()}>
        <div className="b2c-mobile-menu-head">
          <BrandBlock compact label={label} />
          <button type="button" className="b2c-mobile-menu-close" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>
        <div className="b2c-mobile-menu-links">
          {children}
        </div>
      </div>
    </div>
  );
}

const formatDateTimeLocal = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60000);
  return localDate.toISOString().slice(0, 16);
};

const fallbackProducts = [
  { name: 'Velvet Touch Kankotri', category: 'Kankotri', amount: 120, tagline: 'Soft-touch laminated invitation with gold foil detailing.' },
  { name: 'Monogram Wedding Envelope', category: 'Envelope', amount: 35, tagline: 'Custom envelope with liner, initials, and seal-ready flap.' },
  { name: 'Premium Visiting Card', category: 'Visiting Card', amount: 18, tagline: 'Multi-finish business cards with rich texture and sharp print.' },
  { name: 'Festival Gift Sleeve', category: 'Gift Printing', amount: 45, tagline: 'Creative packaging sleeve designed for festive gifting moments.' },
];

const processSteps = [
  { step: '01', title: 'Select Your Style', description: 'Pick the mood, format, and premium finish that matches your event or brand.' },
  { step: '02', title: 'Refine With Creativity', description: 'Share your idea, wording, and references so we can shape a distinctive print direction.' },
  { step: '03', title: 'Approve and Produce', description: 'Once everything feels perfect, your final prints move into production and finishing.' },
];

const heroSlides = [
  {
    image: heroBanner,
    alt: 'Premium printing banner showing luxury cards and envelopes',
    eyebrow: 'Signature Printing',
    title: 'Luxury invitations and print sets with elegant finishing.',
    description: 'From wedding kankotris to premium sleeves and visiting cards, every order is shaped for rich texture, clean detailing, and refined presentation.',
  },
  {
    image: carouselTwo,
    alt: 'Decorative luxury invitation design with premium detailing',
    eyebrow: 'Crafted Details',
    title: 'Foiling, textures, and layered print details that feel memorable.',
    description: 'We build statement pieces for celebrations and brand moments with careful layout, rich paper feel, and consistent Konica print output.',
  },
  {
    image: carouselThree,
    alt: 'Premium print collection arranged for stationery and invitation display',
    eyebrow: 'Konica Quality',
    title: 'Sharp colors, polished finish, and dependable production care.',
    description: 'Our B2C workflow is made for customers who want premium print quality, thoughtful support, and a beautifully finished final product.',
  },
  {
    image: carouselFour,
    alt: 'Angel Enterprise premium print showcase banner',
    eyebrow: 'Production Studio',
    title: 'Elegant print presentation backed by strong machine performance.',
    description: 'From customer approval to final output, we keep every premium print order clean, refined, and production-ready.',
  },
];

const aboutHighlights = [
  {
    title: 'Konica Print Workflow',
    description: 'Konica-based printing for sharp color and dependable output.',
  },
  {
    title: 'Wedding & Event Stationery',
    description: 'Kankotris, envelopes, sleeves, and invitation sets for special occasions.',
  },
  {
    title: 'Business Print Essentials',
    description: 'Visiting cards and branded print pieces with a polished finish.',
  },
];

const aboutPrinciples = [
  'Premium papers, rich textures, and thoughtful finishing options.',
  'Collaborative support for wording, artwork, and custom production notes.',
  'Reliable print execution for both celebration orders and business needs.',
];

const aboutStats = [
  { value: '2013', label: 'established and serving premium print clients' },
  { value: 'Konica', label: 'production setup for crisp premium output' },
  { value: '3-Step', label: 'creative review to approval workflow' },
  { value: 'Custom', label: 'GSM, side option, and print detail flexibility' },
];

const aboutShowcaseCards = [
  {
    title: 'Wedding Invitations',
    eyebrow: 'Celebration',
    image: '/velvet_kankotri.png',
    description: 'Premium kankotri sets, inserts, and coordinated invitation pieces designed for refined event presentation.',
  },
  {
    title: 'Business Cards',
    eyebrow: 'Branding',
    image: '/visiting_card.png',
    description: 'Visiting cards and brand stationery with sharp typography, balanced layouts, and a more polished first impression.',
  },
  {
    title: 'Packaging & Envelopes',
    eyebrow: 'Finishing',
    image: '/luxury_envelope.png',
    description: 'Luxury envelopes, sleeves, and finishing-led pieces prepared with clean approval flow before production starts.',
  },
  {
    title: 'Konica Machine Production',
    eyebrow: 'Machinery',
    image: machineImage,
    description: 'We use Konica machine production for stable color, sharper detail, and dependable premium print output.',
  },
];

const aboutVisualGallery = [
  {
    title: 'Konica Machine Setup',
    caption: 'The production machine behind our clean output, reliable color, and premium finishing workflow.',
    image: machineImage,
  },
  {
    title: 'Business Card Collections',
    caption: 'Professional visiting cards for premium brand presentation.',
    image: '/visiting_card.png',
  },
  {
    title: 'Luxury Envelope Work',
    caption: 'Elegant envelope and sleeve combinations for gifting and events.',
    image: '/luxury_envelope.png',
  },
];

const defaultPolicyParagraphs = [
  'Please review this printing policy before placing your order.',
  'All print jobs move into production only after artwork, quantity, and order details are confirmed.',
  'Color, texture, and finish may vary slightly between screen preview and final printed material.',
  'Customers should upload clear artwork files and verify names, phone numbers, address details, spellings, and other custom text before submitting an order.',
  'Once production starts, major content or design changes may require extra time or extra charges.',
  'For help with your order, please contact our team before final approval.',
];

function buildProductCards(products) {
  if (products.length) {
    return products.map((product, index) => ({
      ...product,
      tagline: product.short_description || product.description || [
        'Premium detailing with carefully balanced texture and color.',
        'Designed to feel refined, memorable, and celebration-ready.',
        'Crafted for high-impact first impressions and elegant presentation.',
        'Built with premium finish direction for your special occasion.',
      ][index % 4],
    }));
  }

  return fallbackProducts.map((p, index) => ({
    id: `fallback-${index}`,
    name: p.name,
    category: p.category,
    amount: p.amount,
    front_back_amount: p.amount + 12,
    print_side_mode: 'both',
    quantity_step: 50,
    gsm_options: [
      { label: '250 GSM', extra_price: 3 },
      { label: '300 GSM', extra_price: 7 },
      { label: '350 GSM', extra_price: 10 },
    ],
    tagline: p.tagline,
    image_urls: [],
  }));
}

function BrandBlock({ compact = false, label }) {
  return (
    <div className={`b2c-brand ${compact ? 'compact' : ''}`}>
      <div className="b2c-brand-logo-wrap">
        <img src={logo} alt="Angel logo" className="b2c-brand-logo" />
      </div>
      <div className="b2c-brand-copy">
        <span className="b2c-brand-name">Angel Enterprise</span>
        <span className="b2c-brand-label">{label}</span>
      </div>
    </div>
  );
}

const finishLabels = {
  none: 'Standard',
  foil: 'Gold Foil',
  textured: 'Textured Paper',
  wax_seal: 'Wax Seal',
};

const printSideLabels = {
  front: 'Front',
  front_back: 'Front & Back',
  single: 'Front',
  double: 'Front & Back',
};

function getPrintSideOptions(product) {
  switch (product?.print_side_mode) {
    case 'front_back_only':
      return [{ value: 'front_back', label: 'Front & Back' }];
    case 'both':
      return [
        { value: 'front', label: 'Front' },
        { value: 'front_back', label: 'Front & Back' },
      ];
    default:
      return [{ value: 'front', label: 'Front' }];
  }
}

function getInitialPrintSide(product) {
  return getPrintSideOptions(product)[0]?.value || 'front';
}

function getQuantityStep(product) {
  return Math.max(1, Number(product?.quantity_step || 1));
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

function formatGsmOptionLabel(option) {
  const normalized = normalizeGsmOption(option);
  if (!normalized) return '';
  return normalized.extra_price > 0
    ? `${normalized.label} (+${money(normalized.extra_price)})`
    : normalized.label;
}

function normalizeQuantity(quantity, minimumQuantity, quantityStep) {
  const parsed = Number(quantity);

  if (!Number.isFinite(parsed) || parsed <= minimumQuantity) {
    return minimumQuantity;
  }

  const stepOffset = Math.round((parsed - minimumQuantity) / quantityStep);
  return minimumQuantity + Math.max(0, stepOffset) * quantityStep;
}

function getProductGsmOptions(product) {
  return Array.isArray(product?.gsm_options)
    ? product.gsm_options
      .map((option, index) => normalizeGsmOption(option, index))
      .filter(Boolean)
    : [];
}

function getSelectedGsmOption(product, selectedGsm) {
  return getProductGsmOptions(product).find((option) => option.label === selectedGsm) || null;
}

function getSelectedGsmExtraPrice(product, selectedGsm) {
  return Number(getSelectedGsmOption(product, selectedGsm)?.extra_price || 0);
}

function emptyB2CProductForm(categories = []) {
  return {
    b2c_category_id: categories[0]?.id ? String(categories[0].id) : '',
    name: '',
    short_description: '',
    description: '',
    print_copy: 100,
    quantity_step: 50,
    amount: '',
    front_back_amount: '',
    print_side_mode: 'front_only',
    gsm_options: [createEmptyGsmOption()],
    sort_order: 0,
    remove_sample_pdf: false,
  };
}

function B2CAdminPanel({
  user,
  onLogout,
  api,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const isStaffModule = user.role === 'staff';
  const [tab, setTab] = useState('dashboard');
  const [stats, setStats] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [staffUsers, setStaffUsers] = useState([]);
  const [policyForm, setPolicyForm] = useState(defaultPolicy);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [productForm, setProductForm] = useState(() => emptyB2CProductForm());
  const [editingProductId, setEditingProductId] = useState(null);
  const [existingImages, setExistingImages] = useState([]);
  const [removedImageIds, setRemovedImageIds] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [samplePdfFile, setSamplePdfFile] = useState(null);
  const [productSubmitting, setProductSubmitting] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const newImagePreviews = useMemo(
    () => newImages.map((file, index) => ({
      id: `${file.name}-${file.size}-${index}`,
      name: file.name,
      url: URL.createObjectURL(file),
    })),
    [newImages]
  );

  useEffect(() => () => {
    newImagePreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
  }, [newImagePreviews]);

  const visibleExistingImages = useMemo(
    () => existingImages.filter((image) => !removedImageIds.includes(image.id)),
    [existingImages, removedImageIds]
  );

  const totalSelectedImages = visibleExistingImages.length + newImages.length;
  const editingProduct = useMemo(
    () => products.find((product) => product.id === editingProductId) || null,
    [products, editingProductId]
  );

  useEffect(() => {
    if (!selectedOrderDetails?.id) return;

    const latestOrder = orders.find((order) => order.id === selectedOrderDetails.id);
    if (latestOrder) {
      setSelectedOrderDetails(latestOrder);
    }
  }, [orders, selectedOrderDetails]);

  const resetProductForm = (nextCategories = categories) => {
    setEditingProductId(null);
    setProductForm(emptyB2CProductForm(nextCategories));
    setExistingImages([]);
    setRemovedImageIds([]);
    setNewImages([]);
    setSamplePdfFile(null);
  };

  const loadAdminData = async () => {
    try {
      const [dashboardData, productData, categoryData, orderData, customerData, staffData, policyData] = await Promise.all([
        api('/portal/api/admin/b2c/dashboard'),
        api('/portal/api/admin/b2c/products'),
        api('/portal/api/admin/b2c/categories'),
        api('/portal/api/admin/b2c/orders'),
        api('/portal/api/admin/b2c/customers'),
        api('/portal/api/admin/staff-users'),
        api('/portal/api/admin/b2c/policy'),
      ]);

      setStats(dashboardData || {});
      setProducts(Array.isArray(productData) ? productData : []);
      setCategories(Array.isArray(categoryData) ? categoryData : []);
      setOrders(Array.isArray(orderData) ? orderData : []);
      setCustomers(Array.isArray(customerData) ? customerData : []);
      setStaffUsers(Array.isArray(staffData) ? staffData : []);
      setPolicyForm({
        title: policyData?.title || defaultPolicy.title,
        content: policyData?.content || '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadStaffQueue = async () => {
    try {
      const orderData = await api('/portal/api/staff/b2c/queue');
      setOrders(Array.isArray(orderData) ? orderData : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isStaffModule) {
      setTab('orders');
      loadStaffQueue();
      return;
    }

    loadAdminData();
  }, [isStaffModule]);

  useEffect(() => {
    if (categories.length && !productForm.b2c_category_id && !editingProductId) {
      setProductForm((prev) => ({ ...prev, b2c_category_id: String(categories[0].id) }));
    }
  }, [categories, productForm.b2c_category_id, editingProductId]);

  const startEditProduct = (product) => {
    setEditingProductId(product.id);
    setProductForm({
      b2c_category_id: String(product.b2c_category_id),
      name: product.name || '',
      short_description: product.short_description || '',
      description: product.description || '',
      print_copy: product.print_copy || 100,
      quantity_step: product.quantity_step || 1,
      amount: product.amount || '',
      front_back_amount: product.front_back_amount || '',
      print_side_mode: product.print_side_mode || 'front_only',
      gsm_options: getProductGsmOptions(product).length
        ? getProductGsmOptions(product).map((option) => ({
          label: option.label,
          extra_price: String(option.extra_price ?? 0),
        }))
        : [createEmptyGsmOption()],
      sort_order: product.sort_order || 0,
      remove_sample_pdf: false,
    });
    setExistingImages(Array.isArray(product.images) ? product.images : []);
    setRemovedImageIds([]);
    setNewImages([]);
    setSamplePdfFile(null);
    setTab('products');
    setNotice(`Editing ${product.name}.`);
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();
    if (!categoryName.trim()) return;

    setError('');
    setNotice('');
    setCategoryLoading(true);

    try {
      await api('/portal/api/admin/b2c/categories', {
        method: 'POST',
        body: JSON.stringify({ name: categoryName.trim() }),
      });
      setCategoryName('');
      setNotice('B2C category added successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    } finally {
      setCategoryLoading(false);
    }
  };

  const handleDeleteCategory = async (category) => {
    if (!window.confirm(`Delete category "${category.name}"?`)) return;

    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c/categories/${category.id}`, { method: 'DELETE' });
      setNotice(response.message || 'B2C category deleted successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleProductField = (field, value) => {
    setProductForm((prev) => {
      if (field === 'print_side_mode') {
        return {
          ...prev,
          print_side_mode: value,
          front_back_amount: value === 'front_only' ? '' : prev.front_back_amount,
        };
      }

      return { ...prev, [field]: value };
    });
  };

  const handleGsmOptionChange = (index, field, value) => {
    setProductForm((prev) => ({
      ...prev,
      gsm_options: (prev.gsm_options || []).map((option, optionIndex) => (
        optionIndex === index
          ? { ...option, [field]: value }
          : option
      )),
    }));
  };

  const handleAddGsmOption = () => {
    setProductForm((prev) => ({
      ...prev,
      gsm_options: [...(prev.gsm_options || []), createEmptyGsmOption()],
    }));
  };

  const handleRemoveGsmOption = (indexToRemove) => {
    setProductForm((prev) => {
      const nextOptions = (prev.gsm_options || []).filter((_, index) => index !== indexToRemove);
      return {
        ...prev,
        gsm_options: nextOptions.length ? nextOptions : [createEmptyGsmOption()],
      };
    });
  };

  const handleNewImages = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (!selectedFiles.length) return;

    const remainingSlots = Math.max(0, 5 - visibleExistingImages.length - newImages.length);
    setNewImages((prev) => [...prev, ...selectedFiles.slice(0, remainingSlots)]);
    event.target.value = '';
  };

  const handleRemoveNewImage = (indexToRemove) => {
    setNewImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSamplePdfChange = (event) => {
    const nextFile = event.target.files?.[0] || null;
    setSamplePdfFile(nextFile);
    if (nextFile) {
      setProductForm((prev) => ({ ...prev, remove_sample_pdf: false }));
    }
    event.target.value = '';
  };

  const submitProduct = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');

    if (!categories.length) {
      setError('Please create a B2C category before adding products.');
      return;
    }

    if (totalSelectedImages < 1) {
      setError('Please keep at least one product image.');
      return;
    }

    setProductSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('b2c_category_id', productForm.b2c_category_id);
      formData.append('name', productForm.name);
      formData.append('short_description', productForm.short_description);
      formData.append('description', productForm.description);
      formData.append('print_copy', String(productForm.print_copy || 1));
      formData.append('quantity_step', String(productForm.quantity_step || 1));
      formData.append('amount', String(productForm.amount || 0));
      if ((productForm.print_side_mode || 'front_only') !== 'front_only' && String(productForm.front_back_amount || '').trim() !== '') {
        formData.append('front_back_amount', String(productForm.front_back_amount));
      }
      formData.append('print_side_mode', productForm.print_side_mode || 'front_only');
      formData.append(
        'gsm_options_json',
        JSON.stringify(
          (productForm.gsm_options || [])
            .map((option) => ({
              label: String(option.label || '').trim(),
              extra_price: Number(option.extra_price || 0),
            }))
            .filter((option) => option.label)
        )
      );
      formData.append('sort_order', '0');
      formData.append('is_active', '1');
      formData.append('remove_sample_pdf', productForm.remove_sample_pdf ? '1' : '0');

      removedImageIds.forEach((id) => formData.append('removed_image_ids[]', String(id)));
      newImages.forEach((file) => formData.append('images[]', file));

      if (samplePdfFile) {
        formData.append('sample_pdf', samplePdfFile);
      }

      if (editingProductId) {
        await api(`/portal/api/admin/b2c/products/${editingProductId}`, { method: 'POST', body: formData });
        setNotice('B2C product updated successfully.');
      } else {
        await api('/portal/api/admin/b2c/products', { method: 'POST', body: formData });
        setNotice('B2C product added successfully.');
      }

      resetProductForm();
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    } finally {
      setProductSubmitting(false);
    }
  };

  const handleDeleteProduct = async (product) => {
    if (!window.confirm(`Delete product "${product.name}"?`)) return;

    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c/products/${product.id}`, { method: 'DELETE' });
      setNotice(response.message || 'B2C product deleted successfully.');
      if (editingProductId === product.id) {
        resetProductForm();
      }
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteCustomer = async (customer) => {
    if (!window.confirm(`Delete customer "${customer.name}"?`)) return;

    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c/customers/${customer.id}`, { method: 'DELETE' });
      setNotice(response.message || 'B2C customer deleted successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOrderStatus = async (orderId, status) => {
    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c/orders/${orderId}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
      });
      setNotice(response.message || 'Order status updated successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAssignStaff = async (orderId, assignedStaffId, deadlineAt) => {
    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c/orders/${orderId}/assign`, {
        method: 'PUT',
        body: JSON.stringify({
          assigned_staff_id: assignedStaffId || null,
          deadline_at: deadlineAt || null,
        }),
      });
      setNotice(response.message || 'B2C work assignment updated successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStaffOrderStatus = async (orderId, status) => {
    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/staff/b2c/orders/${orderId}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
      });
      setNotice(response.message || 'B2C job status updated successfully.');
      await loadStaffQueue();
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePolicySubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');

    try {
      const response = await api('/portal/api/admin/b2c/policy', {
        method: 'PUT',
        body: JSON.stringify(policyForm),
      });
      setNotice(response.message || 'B2C printing policy updated successfully.');
      setPolicyForm({
        title: response.policy?.title || policyForm.title,
        content: response.policy?.content || policyForm.content,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleExportCustomers = () => {
    const rows = [
      ['Name', 'Email', 'Phone', 'Orders', 'Joined'],
      ...customers.map((customer) => ([
        customer.name || '',
        customer.email || '',
        customer.phone || '',
        String(customer.orders_count || 0),
        customer.created_at ? new Date(customer.created_at).toLocaleDateString('en-IN') : '',
      ])),
    ];
    const csv = rows
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    downloadTextFile(csv, `b2c-customers-${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv;charset=utf-8');
  };

  if (loading) {
    return (
      <div className="b2c-page b2c-page-muted b2c-loader-page">
        <div className="b2c-loader-card">
          <img src={logo} alt="Angel logo" className="b2c-loader-logo" />
          <div className="b2c-loader-text">Loading B2C Module...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="b2c-page b2c-page-muted">
      <header className="b2c-shell-topbar">
        <BrandBlock compact label={isStaffModule ? 'B2C Staff Module' : 'B2C Admin Module'} />
        <div className="b2c-shell-actions">
          <a href="/portal" className="b2c-link-strong">Back to B2B Module</a>
          <B2CNotificationMenu
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkRead={onMarkNotificationRead}
            onMarkAllRead={onMarkAllNotificationsRead}
          />
          <span className="b2c-user-badge">Welcome, {user.name}</span>
          <button className="b2c-btn-secondary" onClick={onLogout}>Sign Out</button>
        </div>
      </header>

      <main className="b2c-store-main b2c-admin-shell">
        <div className="b2c-admin-toolbar">
          <div className="b2c-admin-nav">
            {(isStaffModule
              ? [['orders', 'B2C Orders']]
              : [
                  ['dashboard', 'Dashboard'],
                  ['products', 'Products'],
                  ['orders', 'Orders'],
                  ['customers', 'Customers'],
                  ['policy', 'Printing Policy'],
                ]
            ).map(([value, label]) => (
              <button
                key={value}
                className={`b2c-admin-tab ${tab === value ? 'active' : ''}`}
                onClick={() => setTab(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {notice && <div className="b2c-alert success">{notice}</div>}
        {error && <div className="b2c-alert error">{error}</div>}

        {tab === 'dashboard' && (
          <>
            <section className="b2c-admin-stats">
              {[
                ['Categories', stats.categories],
                ['Products', stats.products],
                ['Active Products', stats.active_products],
                ['Customers', stats.customers],
                ['New Orders', stats.new_orders],
                ['Processing', stats.processing_orders],
                ['Completed', stats.completed_orders],
                ['Order Value', money(stats.total_order_value)],
              ].map(([label, value]) => (
                <article key={label} className="b2c-admin-stat-card">
                  <span>{label}</span>
                  <strong>{value ?? 0}</strong>
                </article>
              ))}
            </section>

            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head">
                <div>
                  <span className="b2c-pill subtle">Recent Orders</span>
                  <h2>Latest B2C activity</h2>
                </div>
              </div>

              {(stats.recent_orders || []).length === 0 ? (
                <div className="b2c-admin-empty">No B2C orders yet.</div>
              ) : (
                <div className="b2c-admin-table-wrap">
                  <table className="b2c-admin-table">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(stats.recent_orders || []).map((order) => (
                        <tr key={order.id}>
                          <td>{order.order_number}</td>
                          <td>{order.customer?.name || order.contact_name}</td>
                          <td><span className={`b2c-status-pill ${order.status}`}>{order.status}</span></td>
                          <td>{money(order.grand_total)}</td>
                          <td>{new Date(order.created_at).toLocaleDateString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}

        {tab === 'products' && (
          <>
            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head">
                <div>
                  <span className="b2c-pill subtle">Categories</span>
                  <h2>Manage B2C categories</h2>
                </div>
              </div>

              <form className="b2c-admin-inline-form" onSubmit={handleAddCategory}>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(event) => setCategoryName(event.target.value)}
                  placeholder="Add new category"
                />
                <button className="b2c-btn-primary" type="submit" disabled={categoryLoading}>
                  {categoryLoading ? 'Adding...' : 'Add Category'}
                </button>
              </form>

              {categories.length > 0 && (
                <div className="b2c-admin-chip-list">
                  {categories.map((category) => (
                    <div key={category.id} className="b2c-admin-chip">
                      <span>{category.name}</span>
                      <button type="button" onClick={() => handleDeleteCategory(category)}>Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head">
                <div>
                  <span className="b2c-pill subtle">{editingProductId ? 'Edit Product' : 'Add Product'}</span>
                  <h2>{editingProductId ? 'Update B2C product' : 'Create B2C product'}</h2>
                </div>
                {editingProductId && (
                  <button className="b2c-btn-secondary" type="button" onClick={() => resetProductForm()}>
                    Cancel Edit
                  </button>
                )}
              </div>

              <form className="b2c-admin-product-form" onSubmit={submitProduct}>
                <div className="b2c-admin-form-grid">
                  <label>
                    Category
                    <select
                      value={productForm.b2c_category_id}
                      onChange={(event) => handleProductField('b2c_category_id', event.target.value)}
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Product Name
                    <input
                      type="text"
                      value={productForm.name}
                      onChange={(event) => handleProductField('name', event.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Minimum Product Number
                    <input
                      type="number"
                      min="1"
                      value={productForm.print_copy}
                      onChange={(event) => handleProductField('print_copy', event.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Quantity Increase Step
                    <input
                      type="number"
                      min="1"
                      value={productForm.quantity_step}
                      onChange={(event) => handleProductField('quantity_step', event.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Front Price
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={productForm.amount}
                      onChange={(event) => handleProductField('amount', event.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Print Side Availability
                    <select
                      value={productForm.print_side_mode}
                      onChange={(event) => handleProductField('print_side_mode', event.target.value)}
                      required
                    >
                      <option value="front_only">Front Only</option>
                      <option value="front_back_only">Front & Back Only</option>
                      <option value="both">Both Options</option>
                    </select>
                  </label>

                  <label>
                    Front & Back Price
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={productForm.front_back_amount}
                      onChange={(event) => handleProductField('front_back_amount', event.target.value)}
                      disabled={productForm.print_side_mode === 'front_only'}
                      placeholder={productForm.print_side_mode === 'front_only' ? 'Enable print side first' : 'Enter front & back price'}
                    />
                  </label>

                  <div className="b2c-admin-form-wide">
                    <label className="b2c-admin-gsm-label">GSM Options & Extra Price</label>
                    <div className="b2c-admin-gsm-list">
                      {(productForm.gsm_options || []).map((option, index) => (
                        <div key={`gsm-option-${index}`} className="b2c-admin-gsm-row">
                          <input
                            type="text"
                            value={option.label}
                            onChange={(event) => handleGsmOptionChange(index, 'label', event.target.value)}
                            placeholder="Example: 250 GSM"
                          />
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={option.extra_price}
                            onChange={(event) => handleGsmOptionChange(index, 'extra_price', event.target.value)}
                            placeholder="Extra price"
                          />
                          <button type="button" className="b2c-admin-gsm-remove" onClick={() => handleRemoveGsmOption(index)}>
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="b2c-admin-gsm-actions">
                      <button type="button" className="b2c-btn-secondary" onClick={handleAddGsmOption}>
                        Add GSM
                      </button>
                    </div>
                    <span className="b2c-admin-field-help">
                      Example: 250 GSM extra Rs. 3, 300 GSM extra Rs. 7. This amount is added to each copy.
                    </span>
                  </div>

                  <label className="b2c-admin-form-wide">
                    Short Description
                    <input
                      type="text"
                      value={productForm.short_description}
                      onChange={(event) => handleProductField('short_description', event.target.value)}
                      placeholder="Visible in product cards"
                    />
                  </label>

                  <label className="b2c-admin-form-wide">
                    Description
                    <textarea
                      value={productForm.description}
                      onChange={(event) => handleProductField('description', event.target.value)}
                      placeholder="Full product details for the customer modal"
                    />
                  </label>

                  <label className="b2c-admin-form-wide">
                    Product Photos (up to 5)
                    <input type="file" accept="image/png,image/jpeg,image/webp" multiple onChange={handleNewImages} />
                    <span className="b2c-admin-field-help">
                      {totalSelectedImages}/5 images selected. Products are shown to customers automatically after saving.
                    </span>
                  </label>

                  <label className="b2c-admin-form-wide">
                    Sample PDF
                    <input type="file" accept="application/pdf" onChange={handleSamplePdfChange} />
                    <span className="b2c-admin-field-help">
                      Customers can open this PDF as a product sample.
                    </span>
                  </label>
                </div>

                {visibleExistingImages.length > 0 && (
                  <div className="b2c-admin-upload-block">
                    <strong>Current Images</strong>
                    <div className="b2c-admin-image-grid">
                      {visibleExistingImages.map((image) => (
                        <div key={image.id} className="b2c-admin-image-card">
                          <img src={image.file_url} alt="Product" />
                          <button type="button" onClick={() => setRemovedImageIds((prev) => [...prev, image.id])}>
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {newImages.length > 0 && (
                  <div className="b2c-admin-upload-block">
                    <strong>New Images Ready</strong>
                    <div className="b2c-admin-preview-list">
                      {newImagePreviews.map((preview, index) => (
                        <div key={preview.id} className="b2c-admin-preview-card">
                          <div className="b2c-admin-preview-thumb">
                            <img src={preview.url} alt={preview.name} />
                          </div>
                          <div className="b2c-admin-preview-copy">
                            <strong>{preview.name}</strong>
                            <span>New image selected</span>
                          </div>
                          <button type="button" className="b2c-admin-preview-remove" onClick={() => handleRemoveNewImage(index)}>
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(samplePdfFile || editingProduct?.sample_pdf_url) ? (
                  <div className="b2c-admin-upload-block">
                    <strong>Sample PDF Preview</strong>
                    <div className="b2c-admin-preview-list">
                      {editingProduct?.sample_pdf_url && !productForm.remove_sample_pdf && !samplePdfFile && (
                        <div className="b2c-admin-preview-card pdf">
                          <div className="b2c-admin-preview-thumb pdf">PDF</div>
                          <div className="b2c-admin-preview-copy">
                            <strong>Current sample PDF</strong>
                            <span>Customers can open this file right now</span>
                          </div>
                          <div className="b2c-admin-preview-actions">
                            <a
                              href={editingProduct.sample_pdf_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                            <button type="button" className="b2c-admin-preview-remove" onClick={() => handleProductField('remove_sample_pdf', true)}>
                              ✕
                            </button>
                          </div>
                        </div>
                      )}

                      {editingProduct?.sample_pdf_url && productForm.remove_sample_pdf && !samplePdfFile && (
                        <div className="b2c-admin-preview-card pdf pending">
                          <div className="b2c-admin-preview-thumb pdf">PDF</div>
                          <div className="b2c-admin-preview-copy">
                            <strong>Current PDF will be removed</strong>
                            <span>Save the product to remove this sample PDF</span>
                          </div>
                          <button type="button" className="b2c-admin-preview-undo" onClick={() => handleProductField('remove_sample_pdf', false)}>
                            Undo
                          </button>
                        </div>
                      )}

                      {samplePdfFile && (
                        <div className="b2c-admin-preview-card pdf">
                          <div className="b2c-admin-preview-thumb pdf">PDF</div>
                          <div className="b2c-admin-preview-copy">
                            <strong>{samplePdfFile.name}</strong>
                            <span>New sample PDF selected</span>
                          </div>
                          <button type="button" className="b2c-admin-preview-remove" onClick={() => setSamplePdfFile(null)}>
                            ✕
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}

                <div className="b2c-modal-actions">
                  <button className="b2c-btn-primary" type="submit" disabled={productSubmitting}>
                    {productSubmitting ? 'Saving...' : editingProductId ? 'Update Product' : 'Create Product'}
                  </button>
                </div>
              </form>
            </section>

            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head">
                <div>
                  <span className="b2c-pill subtle">Catalog</span>
                  <h2>B2C products</h2>
                </div>
              </div>

              {products.length === 0 ? (
                <div className="b2c-admin-empty">No B2C products added yet.</div>
              ) : (
                <div className="b2c-admin-table-wrap">
                  <table className="b2c-admin-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Pricing</th>
                        <th>Qty Rule</th>
                        <th>Photos</th>
                        <th>PDF</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <strong>{product.name}</strong>
                            <div className="b2c-admin-table-sub">{product.short_description || 'No short description'}</div>
                          </td>
                          <td>{product.category}</td>
                          <td>
                            <div className="b2c-admin-table-sub">Front: {money(product.amount)}</div>
                            {(product.print_side_mode === 'front_back_only' || product.print_side_mode === 'both') && (
                              <div className="b2c-admin-table-sub">Front & Back: {money(product.front_back_amount)}</div>
                            )}
                            <div className="b2c-admin-table-sub">Mode: {(product.print_side_mode || 'front_only').replaceAll('_', ' ')}</div>
                          </td>
                          <td>
                            <div className="b2c-admin-table-sub">Min: {product.print_copy}</div>
                            <div className="b2c-admin-table-sub">Step: {product.quantity_step || 1}</div>
                            <div className="b2c-admin-table-sub">
                              GSM: {getProductGsmOptions(product).length
                                ? getProductGsmOptions(product).map((option) => formatGsmOptionLabel(option)).join(', ')
                                : 'Not required'}
                            </div>
                          </td>
                          <td>{product.images?.length || 0}/5</td>
                          <td>{product.sample_pdf_url ? 'Available' : 'No PDF'}</td>
                          <td><span className={`b2c-status-pill ${product.is_active ? 'active' : 'inactive'}`}>{product.is_active ? 'Active' : 'Hidden'}</span></td>
                          <td className="b2c-admin-table-actions">
                            <button type="button" onClick={() => startEditProduct(product)}>Edit</button>
                            <button type="button" onClick={() => handleDeleteProduct(product)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}

        {tab === 'orders' && (
          <section className="b2c-admin-card">
            <div className="b2c-admin-card-head">
              <div>
                <span className="b2c-pill subtle">Orders</span>
                <h2>{isStaffModule ? 'B2C assigned order queue' : 'B2C customer orders'}</h2>
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="b2c-admin-empty">{isStaffModule ? 'No B2C jobs available right now.' : 'No customer orders yet.'}</div>
            ) : (
              <div className="b2c-admin-table-wrap">
                <table className="b2c-admin-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Artwork</th>
                      <th>Assignment</th>
                      <th>Deadline</th>
                      <th>Staff Progress</th>
                      <th>Total</th>
                      <th>Order Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <strong>{order.order_number}</strong>
                          <div className="b2c-admin-table-sub">{order.contact_phone}</div>
                          <button type="button" className="b2c-admin-view-btn" onClick={() => setSelectedOrderDetails(order)}>
                            View Details
                          </button>
                        </td>
                        <td>
                          <strong>{order.customer?.name || order.contact_name}</strong>
                          <div className="b2c-admin-table-sub">{order.contact_email}</div>
                          <div className="b2c-admin-table-sub">{order.contact_phone}</div>
                          <div className="b2c-admin-table-sub">{order.customer?.address || 'No address provided'}</div>
                          {order.customer_note ? (
                            <div className="b2c-admin-table-sub">Message: {order.customer_note}</div>
                          ) : null}
                        </td>
                        <td>
                          <div className="b2c-admin-list">
                            {(order.items || []).map((item) => (
                              <div key={item.id}>
                                <span>
                                  {item.product_name} x {item.quantity}
                                </span>
                                <div className="b2c-admin-table-sub">
                                  {printSideLabels[item.print_side] || item.print_side}
                                  {item.gsm ? ` | ${item.gsm}${Number(item.gsm_price || 0) > 0 ? ` (+${money(item.gsm_price)})` : ''}` : ''}
                                  {item.finish ? ` | ${finishLabels[item.finish] || item.finish}` : ''}
                                </div>
                                {item.design_serial_number && (
                                  <div className="b2c-admin-table-sub">Design Serial No: {item.design_serial_number}</div>
                                )}
                                {item.custom_text && (
                                  <div className="b2c-admin-table-sub">Customer text: {item.custom_text}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <div className="b2c-admin-list">
                            {(order.items || []).some((item) => item.file_path) ? (
                              (order.items || []).map((item) => (
                                <div key={`${order.id}-${item.id}-file`}>
                                  {item.file_path ? (
                                    <a
                                      href={`/storage/${item.file_path}`}
                                      download={item.original_filename || item.product_name}
                                      className="b2c-card-link-btn b2c-card-link-btn-inline"
                                    >
                                      {item.original_filename || `${item.product_name} file`}
                                    </a>
                                  ) : (
                                    <span className="b2c-admin-table-sub">{item.product_name}: No file</span>
                                  )}
                                </div>
                              ))
                            ) : (
                              <div className="b2c-admin-table-sub">No sample files uploaded</div>
                            )}
                          </div>
                        </td>
                        <td>
                          {isStaffModule ? (
                            <>
                              <strong>{order.assigned_staff?.name || 'Unassigned'}</strong>
                              <div className="b2c-admin-table-sub">{order.assigned_staff?.email || 'Admin has not assigned staff yet.'}</div>
                            </>
                          ) : (
                            <select
                              value={order.assigned_staff_id || ''}
                              onChange={(event) => handleAssignStaff(order.id, event.target.value, order.deadline_at)}
                            >
                              <option value="">Unassigned</option>
                              {staffUsers.map((staffMember) => (
                                <option key={staffMember.id} value={staffMember.id}>
                                  {staffMember.name}
                                </option>
                              ))}
                            </select>
                          )}
                        </td>
                        <td>
                          {isStaffModule ? (
                            <div className="b2c-admin-table-sub">
                              {order.deadline_at ? new Date(order.deadline_at).toLocaleString('en-IN') : 'No deadline'}
                            </div>
                          ) : (
                            <input
                              type="datetime-local"
                              value={formatDateTimeLocal(order.deadline_at)}
                              onChange={(event) => handleAssignStaff(order.id, order.assigned_staff_id, event.target.value)}
                            />
                          )}
                        </td>
                        <td>
                          <span className={`b2c-status-pill ${order.staff_status || 'pending'}`}>{order.staff_status || 'pending'}</span>
                          {isStaffModule ? (
                            <div className="b2c-admin-inline-actions">
                              <button type="button" onClick={() => handleStaffOrderStatus(order.id, 'started')}>Start</button>
                              <button type="button" onClick={() => handleStaffOrderStatus(order.id, 'ready')}>Ready</button>
                              <button type="button" onClick={() => handleStaffOrderStatus(order.id, 'picked_up')}>Picked Up</button>
                            </div>
                          ) : null}
                        </td>
                        <td>{money(order.grand_total)}</td>
                        <td>
                          {isStaffModule ? (
                            <span className={`b2c-status-pill ${order.status}`}>{order.status}</span>
                          ) : (
                            <select value={order.status} onChange={(event) => handleOrderStatus(order.id, event.target.value)}>
                              {['new', 'reviewed', 'quoted', 'confirmed', 'processing', 'completed', 'cancelled'].map((status) => (
                                <option key={status} value={status}>{status}</option>
                              ))}
                            </select>
                          )}
                        </td>
                        <td>{new Date(order.created_at).toLocaleDateString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {tab === 'customers' && (
          <section className="b2c-admin-card">
            <div className="b2c-admin-card-head">
              <div>
                <span className="b2c-pill subtle">Customers</span>
                <h2>B2C registered customers</h2>
              </div>
              <button type="button" className="b2c-btn-secondary b2c-btn-inline" onClick={handleExportCustomers}>
                Export CSV
              </button>
            </div>

            {customers.length === 0 ? (
              <div className="b2c-admin-empty">No B2C customers yet.</div>
            ) : (
              <div className="b2c-admin-table-wrap">
                <table className="b2c-admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Orders</th>
                      <th>Joined</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.orders_count || 0}</td>
                        <td>{new Date(customer.created_at).toLocaleDateString('en-IN')}</td>
                        <td className="b2c-admin-table-actions">
                          <button type="button" onClick={() => handleDeleteCustomer(customer)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {tab === 'policy' && !isStaffModule && (
          <section className="b2c-admin-card">
            <div className="b2c-admin-card-head">
              <div>
                <h3>Printing Policy</h3>
                <p>Write the customer-facing printing or privacy policy shown in the B2C portal.</p>
              </div>
            </div>

            <form className="b2c-policy-form" onSubmit={handlePolicySubmit}>
              <label>
                Policy Title
                <input
                  type="text"
                  value={policyForm.title}
                  onChange={(event) => setPolicyForm((prev) => ({ ...prev, title: event.target.value }))}
                  placeholder="Enter policy title"
                  required
                />
              </label>

              <label>
                Policy Content
                <textarea
                  value={policyForm.content}
                  onChange={(event) => setPolicyForm((prev) => ({ ...prev, content: event.target.value }))}
                  placeholder="Write the printing policy for customers here..."
                  rows={14}
                  required
                />
              </label>

              <button type="submit" className="b2c-btn-primary b2c-btn-inline">
                Save Printing Policy <IconArrowRight />
              </button>
            </form>
          </section>
        )}
      </main>

      {selectedOrderDetails && (
        <div className="b2c-modal-overlay" onClick={() => setSelectedOrderDetails(null)}>
          <div className="b2c-modal-card b2c-order-details-modal" onClick={(event) => event.stopPropagation()}>
            <button className="b2c-modal-close" onClick={() => setSelectedOrderDetails(null)}>×</button>

            <div className="b2c-order-details-head">
              <div>
                <span className="b2c-pill subtle">Order Details</span>
                <h2 className="b2c-order-code">{selectedOrderDetails.order_number}</h2>
                <p>Big view for admin and staff to review all customer order details clearly.</p>
              </div>
              <div className="b2c-order-details-meta">
                <span className={`b2c-status-pill ${selectedOrderDetails.status}`}>{selectedOrderDetails.status}</span>
                <span className={`b2c-status-pill ${selectedOrderDetails.staff_status || 'pending'}`}>{selectedOrderDetails.staff_status || 'pending'}</span>
              </div>
            </div>

            <div className="b2c-order-details-grid">
              <article className="b2c-order-details-panel">
                <h3>Customer Information</h3>
                <div className="b2c-order-details-list">
                  <div><strong>Name:</strong> <span>{selectedOrderDetails.customer?.name || selectedOrderDetails.contact_name}</span></div>
                  <div><strong>Email:</strong> <span>{selectedOrderDetails.contact_email || 'Not provided'}</span></div>
                  <div><strong>Phone:</strong> <span>{selectedOrderDetails.contact_phone || 'Not provided'}</span></div>
                  <div><strong>Address:</strong> <span>{selectedOrderDetails.customer?.address || 'No address provided'}</span></div>
                  <div><strong>Date:</strong> <span>{new Date(selectedOrderDetails.created_at).toLocaleString('en-IN')}</span></div>
                  <div><strong>Total:</strong> <span>{money(selectedOrderDetails.grand_total)}</span></div>
                  <div><strong>Assigned Staff:</strong> <span>{selectedOrderDetails.assigned_staff?.name || 'Unassigned'}</span></div>
                  <div><strong>Deadline:</strong> <span>{selectedOrderDetails.deadline_at ? new Date(selectedOrderDetails.deadline_at).toLocaleString('en-IN') : 'No deadline set'}</span></div>
                </div>
                {selectedOrderDetails.customer_note && (
                  <div className="b2c-order-note-box">
                    <strong>Customer Note</strong>
                    <p>{selectedOrderDetails.customer_note}</p>
                  </div>
                )}
              </article>

              <article className="b2c-order-details-panel">
                <h3>Ordered Products</h3>
                <div className="b2c-order-detail-items">
                  {(selectedOrderDetails.items || []).map((item) => (
                    <div key={item.id} className="b2c-order-detail-item-card">
                      <div className="b2c-order-detail-item-top">
                        <div>
                          <strong>{item.product_name}</strong>
                          <span>{item.category_name}</span>
                        </div>
                        <strong>{money(item.line_total)}</strong>
                      </div>
                      <div className="b2c-order-details-list compact">
                        <div><strong>Quantity:</strong> <span>{item.quantity}</span></div>
                        <div><strong>Print Side:</strong> <span>{printSideLabels[item.print_side] || item.print_side}</span></div>
                        <div><strong>Paper GSM:</strong> <span>{item.gsm || 'Not selected'}{item.gsm && Number(item.gsm_price || 0) > 0 ? ` (+${money(item.gsm_price)} per copy)` : ''}</span></div>
                        <div><strong>Design Serial No:</strong> <span>{item.design_serial_number || 'Not provided'}</span></div>
                        <div><strong>Finish:</strong> <span>{finishLabels[item.finish] || item.finish || 'Standard'}</span></div>
                        <div><strong>Unit Price:</strong> <span>{money(item.unit_price)}</span></div>
                      </div>
                      {item.custom_text && (
                        <div className="b2c-order-note-box small">
                          <strong>Customer Text / Notes</strong>
                          <p>{item.custom_text}</p>
                        </div>
                      )}
                      {item.file_path ? (
                        <a
                          href={`/storage/${item.file_path}`}
                          download={item.original_filename || item.product_name}
                          className="b2c-card-link-btn b2c-card-link-btn-inline"
                        >
                          {item.original_filename || 'Download artwork file'}
                        </a>
                      ) : (
                        <div className="b2c-admin-table-sub">No artwork file uploaded</div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="b2c-hero-carousel" aria-label="Featured premium printing showcase">
      <div className="b2c-hero-carousel-stage">
        {heroSlides.map((slide, index) => (
          <article
            key={slide.title}
            className={`b2c-hero-slide ${index === activeSlide ? 'active' : ''}`}
            aria-hidden={index !== activeSlide}
          >
            <img src={slide.image} alt={slide.alt} className="b2c-hero-slide-image" />
          </article>
        ))}
      </div>
    </section>
  );
}

function GuestHeader({ onLoginClick, currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="b2c-store-header">
        <BrandBlock compact label="B2C Customer Portal" />
        <button
          type="button"
          className="b2c-mobile-menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div className="b2c-shell-actions">
          <a href="/" className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
          <a href="/about-us" className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
          <a href="/printing-policy" className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
          <a href="/portal" className="b2c-orders-btn b2c-orders-btn-wide">Login as B2B</a>
          <button type="button" className="b2c-btn-primary b2c-header-login-btn" onClick={onLoginClick}>
            Login as B2C
          </button>
        </div>
      </header>

      <B2CHeaderDrawer open={menuOpen} onClose={() => setMenuOpen(false)} label="B2C Customer Portal">
        <a href="/" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
        <a href="/about-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
        <a href="/printing-policy" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
        <a href="/portal" onClick={() => setMenuOpen(false)} className="b2c-orders-btn b2c-orders-btn-wide">Login as B2B</a>
        <button type="button" className="b2c-btn-primary b2c-header-login-btn" onClick={() => { setMenuOpen(false); onLoginClick(); }}>
          Login as B2C
        </button>
      </B2CHeaderDrawer>
    </>
  );
}

function CustomerHeader({
  user,
  onLogout,
  currentPage = 'home',
  cartCount = 0,
  onOpenCart = null,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="b2c-store-header">
        <BrandBlock compact label="B2C Storefront" />
        <button
          type="button"
          className="b2c-mobile-menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div className="b2c-shell-actions">
          <a href="/" className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
          <a href="/about-us" className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
          <a href="/printing-policy" className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
          <a href="/my-orders" className={`b2c-orders-btn ${currentPage === 'orders' ? 'active' : ''}`}>My Orders</a>
          <a href="/profile" className={`b2c-orders-btn ${currentPage === 'profile' ? 'active' : ''}`}>Profile</a>
          {onOpenCart ? (
            <button className="b2c-cart-toggle-btn" onClick={onOpenCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>Cart</span>
              {cartCount > 0 && <span className="b2c-cart-count">{cartCount}</span>}
            </button>
          ) : null}
          <B2CNotificationMenu
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkRead={onMarkNotificationRead}
            onMarkAllRead={onMarkAllNotificationsRead}
          />
          <span className="b2c-user-badge">Hi, {user.name}</span>
          <button className="b2c-btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </header>

      <B2CHeaderDrawer open={menuOpen} onClose={() => setMenuOpen(false)} label="B2C Storefront">
        <a href="/" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
        <a href="/about-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
        <a href="/printing-policy" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
        <a href="/my-orders" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'orders' ? 'active' : ''}`}>My Orders</a>
        <a href="/profile" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'profile' ? 'active' : ''}`}>Profile</a>
        {onOpenCart ? (
          <button className="b2c-cart-toggle-btn" onClick={() => { setMenuOpen(false); onOpenCart(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Cart</span>
            {cartCount > 0 && <span className="b2c-cart-count">{cartCount}</span>}
          </button>
        ) : null}
        <B2CNotificationMenu
          notifications={notifications}
          unreadCount={unreadCount}
          onMarkRead={onMarkNotificationRead}
          onMarkAllRead={onMarkAllNotificationsRead}
        />
        <span className="b2c-user-badge">Hi, {user.name}</span>
        <button className="b2c-btn-secondary" onClick={() => { setMenuOpen(false); onLogout(); }}>Logout</button>
      </B2CHeaderDrawer>
    </>
  );
}

function AboutPreviewSection({ ctaHref = '/about-us', ctaLabel = 'Explore About Us' }) {
  return (
    <section className="b2c-about-preview-section">
      <div className="b2c-about-preview-panel">
        <div className="b2c-about-preview-copy">
          <span className="b2c-pill subtle">About Angel Enterprise</span>
          <h2>Creative print service built for premium celebrations and polished business pieces.</h2>
          <p>
            We focus on invitation printing, custom envelopes, festive packaging, and branded stationery with a production flow that values finish, clarity, and timely delivery.
          </p>
          <div className="b2c-about-preview-points">
            {aboutPrinciples.map((item) => (
              <div key={item} className="b2c-about-preview-point">
                <span className="b2c-about-preview-mark"><IconSpark /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <a href={ctaHref} className="b2c-btn-secondary b2c-btn-inline">
            {ctaLabel}
          </a>
        </div>

        <div className="b2c-about-preview-grid">
          {aboutHighlights.map((item, index) => (
            <article key={item.title} className="b2c-about-preview-card">
              <span className="b2c-about-preview-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreFooter({ user }) {
  return (
    <footer className="b2c-footer">
      <div className="b2c-footer-grid">
        <div className="b2c-footer-brand">
          <BrandBlock compact label="Premium Printing Studio" />
          <p>
            Angel Enterprise creates premium kankotris, envelopes, sleeves, visiting cards, and custom print sets with elegant detailing and Konica-based production care.
          </p>
        </div>

        <div className="b2c-footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/portal">Login as B2B</a>
          <a href="/">Login as B2C</a>
        </div>

        <div className="b2c-footer-column">
          <h4>Specialties</h4>
          <span>Wedding Kankotri Printing</span>
          <span>Luxury Envelope Sets</span>
          <span>Visiting Cards & Brand Collateral</span>
          <span>Festive Packaging Sleeves</span>
        </div>

        <div className="b2c-footer-column">
          <h4>Contact</h4>
          <a href="tel:8200391418">Office: 8200391418</a>
          <a href="tel:9724503723">Customer Care WhatsApp: 9724503723</a>
          <span>F/4, First Floor, Shyamal Complex, New CG Road</span>
          <span>Near Kotak Mahindra Bank, Chandkheda, Ahmedabad, Gujarat 382424</span>
        </div>

      </div>

      <div className="b2c-footer-bottom">
        <span>Angel Enterprise B2C Customer Portal</span>
        <span>Premium printing with creative care and polished finishing.</span>
      </div>
    </footer>
  );
}

function AdminAccessRequired() {
  return (
    <div className="b2c-page b2c-page-muted">
      <header className="b2c-shell-topbar">
        <BrandBlock compact label="B2C Admin" />
        <a href="/portal" className="b2c-link-strong">Back to B2B Admin</a>
      </header>

      <main className="b2c-center-stage">
        <section className="b2c-coming-card">
          <span className="b2c-pill">Protected Access</span>
          <h1 className="b2c-coming-title">Admin Login Required</h1>
          <p className="b2c-coming-text">
            This page is for B2B administrators and staff who switch into the B2C module from the main portal.
          </p>
          <div className="b2c-coming-actions">
            <a href="/portal" className="b2c-btn-primary b2c-btn-inline">Open B2B Admin Portal <IconArrowRight /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

function getProductImage(category) {
  if (category && typeof category === 'object') {
    if (category.primary_image_url) return category.primary_image_url;
    if (Array.isArray(category.image_urls) && category.image_urls.length) return category.image_urls[0];
    category = [category.category, category.name].filter(Boolean).join(' ');
  }

  const cat = (category || '').toLowerCase();
  if (cat.includes('kankotri') || cat.includes('wedding') || cat.includes('invite')) {
    return '/velvet_kankotri.png';
  }
  if (cat.includes('envelope')) {
    return '/luxury_envelope.png';
  }
  if (cat.includes('card') || cat.includes('visiting') || cat.includes('business')) {
    return '/visiting_card.png';
  }
  return '/gift_sleeve.png';
}

function CustomerHome({
  user,
  onLogout,
  products,
  categories,
  api,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const productCards = useMemo(() => buildProductCards(products), [products]);

  // Search & Filter state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(`b2c_cart_${user.id}`);
      return saved
        ? JSON.parse(saved).map((item) => ({ ...item, file: null }))
        : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modal customization state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(100);
  const [selectedPrintSide, setSelectedPrintSide] = useState('front');
  const [selectedGsm, setSelectedGsm] = useState('');
  const [designSerialNumber, setDesignSerialNumber] = useState('');
  const [customText, setCustomText] = useState('');
  const [artworkFile, setArtworkFile] = useState(null);
  const [inquiryLoading, setInquiryLoading] = useState(false);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem(
      `b2c_cart_${user.id}`,
      JSON.stringify(cart.map(({ file, ...item }) => item))
    );
  }, [cart, user.id]);

  // Unique categories list
  const uniqueCategories = useMemo(() => {
    const list = new Set();
    productCards.forEach((p) => {
      if (p.category) list.add(p.category);
    });
    return ['All', ...Array.from(list)];
  }, [productCards]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return productCards.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tagline && product.tagline.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [productCards, selectedCategory, searchQuery]);
  const selectedGsmSurcharge = useMemo(
    () => getSelectedGsmExtraPrice(selectedProduct, selectedGsm),
    [selectedProduct, selectedGsm]
  );

  // Calculate price details for a given product configuration
  const calculation = useMemo(() => {
    if (!selectedProduct) return { baseCost: 0, gsmExtraPrice: 0, costPerCopy: 0, subtotal: 0, discountPercent: 0, discountAmount: 0, total: 0 };

    const baseCost = selectedPrintSide === 'front_back'
      ? Number(selectedProduct.front_back_amount || selectedProduct.amount || 0)
      : Number(selectedProduct.amount || 0);

    const gsmExtraPrice = selectedGsmSurcharge;
    const costPerCopy = baseCost + gsmExtraPrice;
    const subtotal = costPerCopy * quantity;

    // Discount tier lookup
    let discountPercent = 0;
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;

    return {
      baseCost,
      gsmExtraPrice,
      costPerCopy,
      subtotal,
      discountPercent,
      discountAmount,
      total
    };
  }, [selectedProduct, quantity, selectedPrintSide, selectedGsmSurcharge]);

  const minimumQuantity = selectedProduct?.print_copy || 1;
  const quantityStep = getQuantityStep(selectedProduct);
  const selectedProductGsmOptions = useMemo(() => getProductGsmOptions(selectedProduct), [selectedProduct]);
  const selectedProductImages = useMemo(() => {
    if (!selectedProduct) return [];
    if (Array.isArray(selectedProduct.image_urls) && selectedProduct.image_urls.length) {
      return selectedProduct.image_urls;
    }
    return [getProductImage(selectedProduct)];
  }, [selectedProduct]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenCustomizer = (product) => {
    setSelectedProduct(product);
    setQuantity(product.print_copy || 1);
    setSelectedPrintSide(getInitialPrintSide(product));
    setSelectedGsm(getProductGsmOptions(product)[0]?.label || '');
    setDesignSerialNumber('');
    setCustomText('');
    setArtworkFile(null);
    setActiveImageIndex(0);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const finalQuantity = normalizeQuantity(quantity, minimumQuantity, quantityStep);
    const baseUnitPrice = selectedPrintSide === 'front_back'
      ? Number(selectedProduct.front_back_amount || selectedProduct.amount || 0)
      : Number(selectedProduct.amount || 0);
    const gsmExtraPrice = getSelectedGsmExtraPrice(selectedProduct, selectedGsm);
    const finalUnitPrice = baseUnitPrice + gsmExtraPrice;
    const cartItem = {
      cartId: `${selectedProduct.id}-${Date.now()}`,
      product: selectedProduct,
      quantity: finalQuantity,
      total: finalUnitPrice * finalQuantity,
      details: {
        costPerCopy: finalUnitPrice,
        discountPercent: calculation.discountPercent,
        customText,
        printSide: selectedPrintSide,
        gsm: selectedGsm,
        gsmPrice: gsmExtraPrice,
        designSerialNumber: designSerialNumber.trim(),
      },
      file: artworkFile,
    };
    setCart([...cart, cartItem]);
    setSelectedProduct(null);
    setArtworkFile(null);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const handleCartFileChange = (cartId, file) => {
    setCart((current) =>
      current.map((item) => (
        item.cartId === cartId
          ? { ...item, file: file || null }
          : item
      ))
    );
  };

  const handleSendCartInquiry = async () => {
    if (!user.phone || !user.email || !user.address) {
      alert('Please complete your profile with phone, email, and address before placing an order.');
      window.location.href = '/profile';
      return;
    }

    setInquiryLoading(true);
    try {
      const formData = new FormData();
      formData.append('items_json', JSON.stringify(
        cart.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
          print_side: item.details.printSide,
          gsm: item.details.gsm || null,
          design_serial_number: item.details.designSerialNumber || null,
          custom_text: item.details.customText || null,
        }))
      ));

      cart.forEach((item, index) => {
        if (item.file) {
          formData.append(`files[${index}]`, item.file);
        }
      });

      const response = await api('/api/b2c/orders', {
        method: 'POST',
        body: formData,
      });
      setCart([]);
      setIsCartOpen(false);
      alert(`Order ${response.order?.order_number || ''} submitted successfully.`);
    } catch (error) {
      alert(error.message);
    } finally {
      setInquiryLoading(false);
    }
  };

  // Testimonials
  const testimonials = [
    { name: 'Aarav Mehta', role: 'Wedding Groom', text: 'The Royal Kankotri with wax seal styling was the highlight of our wedding invitations. Our guests were blown away by the premium texture!' },
    { name: 'Priya Sharma', role: 'Event Designer', text: 'Angel Enterprise delivers unmatched foil printing. The texture on the paper feels extremely premium. They are my go-to print shop!' },
    { name: 'Vikram Patel', role: 'Boutique Owner', text: 'Stunning luxury business cards! The gold foil embossing looks very clean and professional. Highly recommended for high-end brands.' },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Contact form
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setContactSubmitted(false);
      alert('Your consultation request has been sent successfully!');
    }, 1200);
  };

  return (
    <div className="b2c-store-shell">
      <CustomerHeader
        user={user}
        onLogout={onLogout}
        currentPage="home"
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkNotificationRead={onMarkNotificationRead}
        onMarkAllNotificationsRead={onMarkAllNotificationsRead}
      />

      <HeroCarousel />

      <main className="b2c-store-main">

        <section className="b2c-intro-section">
          <div className="b2c-intro-container">
            <span className="b2c-pill">Premium Print Atelier</span>
            <h1 className="b2c-intro-title">Premium printing with creative care and dependable Konica production.</h1>
            <p className="b2c-intro-text">
              We create premium wedding kankotris, customized envelopes, invitation sets, brand inserts, and festive print products with a strong focus on quality and elegant finishing.
              For sharp colors, clean detailing, and reliable output, we use Konica printing machine technology in our production process.
              Our goal is to give every customer beautiful printing, smooth service, and a polished final result for every special occasion.
            </p>
          </div>
        </section>

        <AboutPreviewSection ctaHref="/about-us" ctaLabel="Read More About Us" />

        <section id="catalog" className="b2c-section b2c-catalog-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Signature Collections</span>
            <h2>Configure & Order Prints</h2>
            <p>Select a category or search for custom stationery, then click "Customize" to get a live pricing quote.</p>
          </div>

          {/* Search & Filter Row */}
          <div className="b2c-filter-bar">
            <div className="b2c-categories-tabs">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  className={`b2c-filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="b2c-search-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="b2c-search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input
                type="text"
                placeholder="Search products..."
                className="b2c-search-input-field"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Catalog Grid */}
          {filteredProducts.length === 0 ? (
            <div className="b2c-empty-catalog">
              <p>No products found matching your search query or category filter.</p>
            </div>
          ) : (
            <div className="b2c-premium-product-grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="b2c-premium-product-card">
                  <div className="b2c-card-img-wrap">
                    <img src={getProductImage(product)} alt={product.name} className="b2c-card-img" />
                    <div className="b2c-card-badge-wrap">
                      <span className="b2c-card-tag">{product.category}</span>
                    </div>
                  </div>
                  <div className="b2c-card-details">
                    <h3>{product.name}</h3>
                    <p className="b2c-card-tagline">{product.tagline}</p>

                    <div className="b2c-card-stars">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      <span className="b2c-card-rating-text">(5.0)</span>
                    </div>

                    <div className="b2c-card-pricing-row">
                      <div className="b2c-card-price">
                        <span className="b2c-price-lbl">Starting from</span>
                        <strong className="b2c-price-val">{money(product.amount)}</strong>
                      </div>
                      <div className="b2c-card-actions">
                        {product.sample_pdf_url && (
                          <a href={product.sample_pdf_url} target="_blank" rel="noreferrer" className="b2c-card-link-btn">
                            Open Sample PDF
                          </a>
                        )}
                        <button
                          className="b2c-card-btn"
                          onClick={() => handleOpenCustomizer(product)}
                        >
                          Customize <IconArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Testimonials Review Slider */}
        <section id="testimonials" className="b2c-section b2c-testimonial-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Client Stories</span>
            <h2>Highly Appreciated Excellence</h2>
            <p>Hear what our premium clients say about their custom wedding stationery and branding prints.</p>
          </div>

          <div className="b2c-testimonial-slider">
            <div className="b2c-testimonial-card-wrap">
              <div className="b2c-testimonial-quotes">“</div>
              <p className="b2c-testimonial-text">{testimonials[activeTestimonial].text}</p>
              <div className="b2c-testimonial-author">
                <strong>{testimonials[activeTestimonial].name}</strong>
                <span>{testimonials[activeTestimonial].role}</span>
              </div>
            </div>
            <div className="b2c-testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`b2c-testimonial-dot ${activeTestimonial === idx ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* How it works Timeline Section */}
        <section id="process" className="b2c-section b2c-timeline-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">How It Works</span>
            <h2>A refined customer print journey</h2>
            <p>Our collaborative print workflow ensures creative confidence and high fidelity finish results.</p>
          </div>
          <div className="b2c-timeline-grid">
            {processSteps.map((step) => (
              <article key={step.step} className="b2c-timeline-card">
                <div className="b2c-timeline-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <StoreFooter user={user} />

      {/* Live Customizer Modal popup */}
      {selectedProduct && (
        <div className="b2c-modal-overlay">
          <div className="b2c-modal-card">
            <button className="b2c-modal-close" onClick={() => setSelectedProduct(null)}>×</button>

            <div className="b2c-modal-split">
              {/* Left Side: Product preview */}
              <div className="b2c-modal-preview-panel">
                <div className="b2c-modal-preview-stage">
                  <img
                    src={selectedProductImages[activeImageIndex]}
                    alt={`${selectedProduct.name} preview ${activeImageIndex + 1}`}
                    className="b2c-modal-preview-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                {selectedProductImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="b2c-carousel-nav prev"
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedProductImages.length - 1 : prev - 1))}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="b2c-carousel-nav next"
                      onClick={() => setActiveImageIndex((prev) => (prev === selectedProductImages.length - 1 ? 0 : prev + 1))}
                    >
                      ›
                    </button>
                  </>
                )}
                <div className="b2c-modal-preview-info">
                  <span className="b2c-modal-preview-cat">{selectedProduct.category}</span>
                  <h2>{selectedProduct.name}</h2>
                  <p>{selectedProduct.description || selectedProduct.tagline}</p>
                  {selectedProduct.sample_pdf_url && (
                    <a href={selectedProduct.sample_pdf_url} target="_blank" rel="noreferrer" className="b2c-card-link-btn b2c-modal-download-btn">
                      Open Sample PDF
                    </a>
                  )}
                  {selectedProductImages.length > 1 && (
                    <div className="b2c-modal-thumbs">
                      {selectedProductImages.map((image, index) => (
                        <button
                          key={`${image}-${index}`}
                          type="button"
                          className={`b2c-modal-thumb ${index === activeImageIndex ? 'active' : ''}`}
                          onClick={() => setActiveImageIndex(index)}
                        >
                          <img src={image} alt={`${selectedProduct.name} thumbnail ${index + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Product details */}
              <div className="b2c-modal-form-panel">
                  <div className="b2c-modal-customizer-form">
                    <h3>Product Details & Order</h3>

                    <div className="b2c-modal-field">
                      <label>Order Quantity (Copies)</label>
                      <div className="b2c-qty-input-wrap">
                        <button type="button" onClick={() => setQuantity(Math.max(minimumQuantity, quantity - quantityStep))}>-</button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(minimumQuantity, parseInt(e.target.value, 10) || minimumQuantity))}
                          onBlur={(e) => setQuantity(normalizeQuantity(e.target.value, minimumQuantity, quantityStep))}
                          min={minimumQuantity}
                          step={quantityStep}
                        />
                        <button type="button" onClick={() => setQuantity(quantity + quantityStep)}>+</button>
                      </div>
                      <span className="b2c-field-hint">Minimum order starts from {minimumQuantity} copies and increases by {quantityStep}.</span>
                    </div>

                    <div className="b2c-modal-field">
                      <label>Print Side</label>
                      <select
                        className="b2c-input-styled"
                        value={selectedPrintSide}
                        onChange={(e) => setSelectedPrintSide(e.target.value)}
                      >
                        {getPrintSideOptions(selectedProduct).map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>

                    {selectedProductGsmOptions.length > 0 && (
                      <div className="b2c-modal-field">
                        <label>Paper GSM</label>
                        <select
                          className="b2c-input-styled"
                          value={selectedGsm}
                          onChange={(e) => setSelectedGsm(e.target.value)}
                        >
                          {selectedProductGsmOptions.map((gsmOption) => (
                            <option key={gsmOption.id} value={gsmOption.label}>{formatGsmOptionLabel(gsmOption)}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {selectedProduct.sample_pdf_url && (
                      <div className="b2c-modal-field">
                        <label>Design Serial Number (Optional)</label>
                        <input
                          type="text"
                          className="b2c-input-styled"
                          value={designSerialNumber}
                          onChange={(e) => setDesignSerialNumber(e.target.value)}
                          placeholder="Enter design serial no. from the sample PDF"
                        />
                        <span className="b2c-field-hint">Use this only if you selected a design from the sample PDF.</span>
                      </div>
                    )}

                    <div className="b2c-modal-field">
                      <label>Special Calligraphy or Text Instructions</label>
                      <textarea
                        placeholder="Enter names, wording, calligraphy style, or special typography requests..."
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="b2c-modal-textarea"
                      ></textarea>
                    </div>

                    <div className="b2c-modal-field">
                      <label>Upload Artwork File (Optional)</label>
                      <div className="b2c-modal-upload-box">
                        <input
                          type="file"
                          accept={acceptedArtworkTypes}
                          onChange={(e) => setArtworkFile(e.target.files?.[0] || null)}
                          className="b2c-modal-file-input"
                        />
                        <span className="b2c-field-hint">Allowed formats: CDR, ZIP, JPG, PNG</span>
                        <span className="b2c-modal-upload-name">
                          {artworkFile ? `Selected: ${artworkFile.name}` : 'No artwork file selected'}
                        </span>
                      </div>
                    </div>

                    {/* Real-time Pricing Summary */}
                    <div className="b2c-price-summary-box">
                      <div className="b2c-summary-row">
                        <span>{printSideLabels[selectedPrintSide] || 'Front'} ({quantity} x {money(calculation.baseCost)}):</span>
                        <span>{money(calculation.baseCost * quantity)}</span>
                      </div>
                      {selectedGsm && (
                        <div className="b2c-summary-row">
                          <span>Selected GSM:</span>
                          <span>{formatGsmOptionLabel(getSelectedGsmOption(selectedProduct, selectedGsm) || selectedGsm)}</span>
                        </div>
                      )}
                      {calculation.gsmExtraPrice > 0 && (
                        <div className="b2c-summary-row">
                          <span>GSM Extra ({quantity} x {money(calculation.gsmExtraPrice)}):</span>
                          <span>{money(calculation.gsmExtraPrice * quantity)}</span>
                        </div>
                      )}
                      <hr />
                      <div className="b2c-summary-row total">
                        <strong>Estimated Price:</strong>
                        <strong>{money(calculation.total)}</strong>
                      </div>
                    </div>

                    <div className="b2c-modal-actions">
                      <button
                        type="button"
                        className="b2c-btn-primary"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="b2c-btn-secondary"
                        onClick={() => setSelectedProduct(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="b2c-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="b2c-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="b2c-drawer-header">
              <h3>Your Configurations ({cart.length})</h3>
              <button className="b2c-drawer-close" onClick={() => setIsCartOpen(false)}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="b2c-drawer-empty">
                <p>Your cart is empty. Personalize products to add them here!</p>
              </div>
            ) : (
              <>
                <div className="b2c-drawer-items">
                  {cart.map((item) => (
                    <div key={item.cartId} className="b2c-drawer-item">
                      <div className="b2c-drawer-item-img-wrap">
                        <img src={getProductImage(item.product)} alt={item.product.name} />
                      </div>
                      <div className="b2c-drawer-item-details">
                        <h4>{item.product.name}</h4>
                        <p className="b2c-drawer-item-spec">
                          Qty: {item.quantity}
                        </p>
                        <p className="b2c-drawer-item-spec">
                          Side: {printSideLabels[item.details.printSide] || item.details.printSide}
                          {item.details.gsm ? ` | GSM: ${item.details.gsm}${Number(item.details.gsmPrice || 0) > 0 ? ` (+${money(item.details.gsmPrice)})` : ''}` : ''}
                        </p>
                        <label className="b2c-artwork-upload">
                          <span>Sample file (optional)</span>
                          <input
                            type="file"
                            accept={acceptedArtworkTypes}
                            onChange={(event) => handleCartFileChange(item.cartId, event.target.files?.[0] || null)}
                          />
                        </label>
                        <div className="b2c-drawer-item-subcopy">
                          {item.file ? `Attached: ${item.file.name}` : 'Supports CDR, ZIP, PNG, JPG'}
                        </div>
                        <div className="b2c-drawer-item-price-row">
                          <strong>{money(item.total)}</strong>
                          <button className="b2c-drawer-item-remove" onClick={() => handleRemoveFromCart(item.cartId)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="b2c-drawer-footer">
                  <div className="b2c-drawer-total-row">
                    <span>Total Configurations:</span>
                    <strong>{money(cart.reduce((sum, item) => sum + item.total, 0))}</strong>
                  </div>
                  <p className="b2c-drawer-disclaimer">These items will be saved directly into the B2C order queue for admin and staff follow-up.</p>
                  <button
                    className="b2c-btn-primary"
                    onClick={handleSendCartInquiry}
                    disabled={inquiryLoading}
                  >
                    {inquiryLoading ? 'Placing Order...' : 'Place Order'} <IconArrowRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CustomerOrdersPage({
  user,
  onLogout,
  api,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    api('/api/b2c/my-orders')
      .then((orderData) => {
        if (isMounted) {
          setOrders(Array.isArray(orderData) ? orderData : []);
        }
      })
      .catch(() => {
        if (isMounted) {
          setOrders([]);
        }
      })
      .finally(() => {
        if (isMounted) {
          setOrdersLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [api]);

  return (
    <div className="b2c-store-shell">
      <CustomerHeader
        user={user}
        onLogout={onLogout}
        currentPage="orders"
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkNotificationRead={onMarkNotificationRead}
        onMarkAllNotificationsRead={onMarkAllNotificationsRead}
      />

      <main className="b2c-store-main">
        <section className="b2c-orders-page-hero">
          <div className="b2c-orders-page-copy">
            <span className="b2c-pill">My Orders</span>
            <h1>Track every custom print request in one place</h1>
            <p>Review placed orders, item quantities, status, and total value from your personal B2C order page.</p>
          </div>
        </section>

        <section className="b2c-section b2c-orders-page-section">
          {ordersLoading ? (
            <div className="b2c-empty-catalog">
              <p>Loading your orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="b2c-orders-empty-state">
              <h2>No orders placed yet</h2>
              <p>Your personalized print orders will appear here after you place them from the home page.</p>
              <a href="/" className="b2c-btn-primary b2c-btn-inline">Start Shopping <IconArrowRight /></a>
            </div>
          ) : (
            <div className="b2c-orders-page-grid">
              {orders.map((order) => (
                <article key={order.id} className="b2c-order-page-card">
                  <div className="b2c-order-card-top">
                    <div>
                      <strong>{order.order_number}</strong>
                      <span>{new Date(order.created_at).toLocaleDateString('en-IN')}</span>
                    </div>
                    <span className={`b2c-status-pill ${order.status}`}>{order.status}</span>
                  </div>

                  <div className="b2c-order-page-meta">
                    <div>
                      <span>Items</span>
                      <strong>{(order.items || []).length}</strong>
                    </div>
                    <div>
                      <span>Grand Total</span>
                      <strong>{money(order.grand_total)}</strong>
                    </div>
                  </div>

                  <div className="b2c-order-page-items">
                    {(order.items || []).map((item) => (
                      <div key={item.id} className="b2c-order-page-item">
                        <div>
                          <h4>{item.product_name}</h4>
                          <p>Quantity: {item.quantity}</p>
                          <p>Print Side: {printSideLabels[item.print_side] || item.print_side}</p>
                          {item.gsm && <p>Paper GSM: {item.gsm}{Number(item.gsm_price || 0) > 0 ? ` (+${money(item.gsm_price)} per copy)` : ''}</p>}
                          {item.design_serial_number && <p>Design Serial No: {item.design_serial_number}</p>}
                          {item.custom_text && <p>Notes: {item.custom_text}</p>}
                          {item.file_path && (
                            <a
                              href={`/storage/${item.file_path}`}
                              download={item.original_filename || item.product_name}
                              className="b2c-card-link-btn b2c-card-link-btn-inline"
                            >
                              {item.original_filename || 'Download uploaded file'}
                            </a>
                          )}
                        </div>
                        <strong>{money(item.line_total)}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="b2c-order-card-bottom">
                    <span>Order Total</span>
                    <strong>{money(order.grand_total)}</strong>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <StoreFooter user={user} />
    </div>
  );
}

function CustomerProfilePage({
  user,
  onLogout,
  api,
  onProfileUpdated,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const [profileForm, setProfileForm] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [passwordSubmitting, setPasswordSubmitting] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const isProfileComplete = Boolean(profileForm.phone && profileForm.email && profileForm.address);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
    if (notice) setNotice('');
    if (error) setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setNotice('');
    setError('');

    try {
      const response = await api('/api/b2c/profile/update', {
        method: 'POST',
        body: JSON.stringify(profileForm),
      });
      setNotice(response.message || 'Profile updated successfully.');
      onProfileUpdated(response.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
    if (notice) setNotice('');
    if (error) setError('');
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    setPasswordSubmitting(true);
    setNotice('');
    setError('');

    try {
      const response = await api('/api/b2c/profile/reset-password', {
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
      setPasswordSubmitting(false);
    }
  };

  return (
    <div className="b2c-store-shell">
      <CustomerHeader
        user={user}
        onLogout={onLogout}
        currentPage="profile"
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkNotificationRead={onMarkNotificationRead}
        onMarkAllNotificationsRead={onMarkAllNotificationsRead}
      />

      <main className="b2c-store-main">
        <section className="b2c-orders-page-hero">
          <div className="b2c-orders-page-copy">
            <span className="b2c-pill">Profile</span>
            <h1>Keep your customer details ready for smooth ordering</h1>
            <p>Phone number, email ID, and address should be complete before placing a B2C order.</p>
          </div>
        </section>

        <section className="b2c-profile-layout">
          <article className="b2c-profile-card">
            <div className="b2c-profile-card-head">
              <div>
                <span className="b2c-pill subtle">Customer Details</span>
                <h2>Profile Information</h2>
              </div>
              <span className={`b2c-status-pill ${isProfileComplete ? 'completed' : 'reviewed'}`}>
                {isProfileComplete ? 'Ready to Order' : 'Complete Profile'}
              </span>
            </div>

            {error && <div className="b2c-alert error">{error}</div>}
            {notice && <div className="b2c-alert success">{notice}</div>}

            <form className="b2c-profile-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input type="text" name="name" value={profileForm.name} onChange={handleChange} required />
              </label>

              <label>
                Email ID
                <input type="email" name="email" value={profileForm.email} onChange={handleChange} required />
              </label>

              <label>
                Phone Number
                <input type="text" name="phone" value={profileForm.phone} onChange={handleChange} required />
              </label>

              <label className="b2c-profile-form-wide">
                Address
                <textarea name="address" value={profileForm.address} onChange={handleChange} required placeholder="Enter your complete address" />
              </label>

              <button className="b2c-btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Saving...' : 'Save Profile'} <IconArrowRight />
              </button>
            </form>
          </article>

          <aside className="b2c-profile-sidecard">
            <span className="b2c-pill subtle">Order Readiness</span>
            <h3>Required before ordering</h3>
            <div className="b2c-profile-checklist">
              <div className={`b2c-profile-check ${profileForm.phone ? 'done' : ''}`}>Phone number</div>
              <div className={`b2c-profile-check ${profileForm.email ? 'done' : ''}`}>Email ID</div>
              <div className={`b2c-profile-check ${profileForm.address ? 'done' : ''}`}>Address</div>
            </div>
            <p>Once all details are available, you can place orders without interruption from the product page.</p>

            <div className="b2c-profile-password-block">
              <span className="b2c-pill subtle">Security</span>
              <h3>Change password</h3>
              <form className="b2c-profile-password-form" onSubmit={handlePasswordSubmit}>
                <label>
                  Current Password
                  <input type="password" name="current_password" value={passwordForm.current_password} onChange={handlePasswordChange} required />
                </label>
                <label>
                  New Password
                  <input type="password" name="password" value={passwordForm.password} onChange={handlePasswordChange} required />
                </label>
                <label>
                  Confirm New Password
                  <input type="password" name="password_confirmation" value={passwordForm.password_confirmation} onChange={handlePasswordChange} required />
                </label>
                <button className="b2c-btn-secondary" type="submit" disabled={passwordSubmitting}>
                  {passwordSubmitting ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>
          </aside>
        </section>
      </main>

      <StoreFooter user={user} />
    </div>
  );
}

function CustomerPolicyPage({
  user,
  onLogout,
  policy,
  policyLoading,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const policyParagraphs = (policy?.content || '')
    .split(/\n+/)
    .filter(Boolean);
  const visibleParagraphs = policyParagraphs.length ? policyParagraphs : defaultPolicyParagraphs;
  const heroNotes = visibleParagraphs.slice(0, 3);

  return (
    <div className="b2c-store-shell">
      {user
        ? (
          <CustomerHeader
            user={user}
            onLogout={onLogout}
            currentPage="policy"
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkNotificationRead={onMarkNotificationRead}
            onMarkAllNotificationsRead={onMarkAllNotificationsRead}
          />
        )
        : <GuestHeader onLoginClick={() => { window.location.href = '/'; }} currentPage="policy" />}

      <main className="b2c-store-main">
        <section className="b2c-policy-hero">
          <div className="b2c-policy-hero-copy">
            <span className="b2c-pill">Printing Policy</span>
            <h1>{policy?.title || 'Printing Policy'}</h1>
            <p>Review the key approval points before your print request moves to production.</p>
          </div>

          <div className="b2c-policy-hero-points">
            {heroNotes.map((note, index) => (
              <div key={`${index}-${note.slice(0, 16)}`} className="b2c-policy-hero-point">
                <span>0{index + 1}</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="b2c-policy-card b2c-policy-card-rich">
          {policyLoading ? (
            <div className="b2c-empty-catalog">
              <p>Loading policy...</p>
            </div>
          ) : (
            <>
              <div className="b2c-policy-summary">
                <div>
                  <span className="b2c-policy-summary-label">Order Checkpoint</span>
                  <h2>Confirm artwork, spelling, quantity, and finish before production begins.</h2>
                </div>
              </div>

              <div className="b2c-policy-grid">
                {visibleParagraphs.map((paragraph, index) => (
                  <article key={`${index}-${paragraph.slice(0, 20)}`} className="b2c-policy-point-card">
                    <span className="b2c-policy-point-index">0{index + 1}</span>
                    <p>{paragraph}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      <StoreFooter user={user} />
    </div>
  );
}

function AboutUsPage({
  user,
  onLogout,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  return (
    <div className="b2c-store-shell">
      {user
        ? (
          <CustomerHeader
            user={user}
            onLogout={onLogout}
            currentPage="about"
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkNotificationRead={onMarkNotificationRead}
            onMarkAllNotificationsRead={onMarkAllNotificationsRead}
          />
        )
        : <GuestHeader onLoginClick={() => { window.location.href = '/'; }} currentPage="about" />}

      <main className="b2c-store-main">
        <section className="b2c-about-page-hero">
          <div className="b2c-about-page-copy">
            <span className="b2c-pill">About Us</span>
            <h1>Premium printing for invitations, business stationery, and finished presentation pieces.</h1>
            <p>
              Angel Enterprise was established in 2013 and helps customers order wedding stationery, visiting cards, envelopes, sleeves, and custom print pieces with better clarity from design approval to final production.
            </p>
            <div className="b2c-about-stats-row">
              {aboutStats.map((item) => (
                <article key={item.value} className="b2c-about-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
            <div className="b2c-about-trust-list">
              {aboutPrinciples.map((item) => (
                <div key={item} className="b2c-about-trust-row">
                  <span className="b2c-about-preview-mark"><IconSpark /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="b2c-about-hero-visual">
            <article className="b2c-about-hero-feature b2c-about-hero-feature-large">
              <img src={aboutVisualGallery[0].image} alt={aboutVisualGallery[0].title} />
              <div className="b2c-about-hero-caption">
                <span>{aboutVisualGallery[0].title}</span>
                <p>{aboutVisualGallery[0].caption}</p>
              </div>
            </article>
            <div className="b2c-about-hero-stack">
              {aboutVisualGallery.slice(1).map((item) => (
                <article key={item.title} className="b2c-about-hero-feature">
                  <img src={item.image} alt={item.title} />
                  <div className="b2c-about-hero-caption">
                    <span>{item.title}</span>
                    <p>{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="b2c-about-page-badge">
              <strong>Konica Print Focus</strong>
              <span>Sharp color output, controlled approval flow, and premium finishing details across every order.</span>
            </div>
          </div>
        </section>

        <section className="b2c-about-machine-section">
          <div className="b2c-about-machine-panel">
            <div className="b2c-about-machine-copy">
              <span className="b2c-pill subtle">Konica Machine</span>
              <h2>We use Konica machine production for sharper color, cleaner detailing, and more dependable premium print output.</h2>
              <p>
                Our machine setup helps us maintain better consistency across invitation sets, visiting cards, envelopes, sleeves, and custom print jobs.
              </p>
              <p>
                Combined with artwork review and approval discipline, this gives customers a stronger final result from design stage to printed delivery.
              </p>
            </div>
            <div className="b2c-about-machine-visual">
              <img src={machineImage} alt="Konica machine used by Angel Enterprise" />
            </div>
          </div>
        </section>

        <section className="b2c-about-showcase-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">What We Offer</span>
            <h2>Built like a premium print storefront, backed by real production care.</h2>
            <p>We keep the product selection elegant, the approval steps clear, and the final printed result presentation-ready.</p>
          </div>
          <div className="b2c-about-showcase-grid">
            {aboutShowcaseCards.map((item) => (
              <article key={item.title} className="b2c-about-showcase-card">
                <div className="b2c-about-showcase-media">
                  <img src={item.image} alt={item.title} />
                </div>
                <span className="b2c-about-showcase-index">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="b2c-about-story-section">
          <div className="b2c-about-story-layout">
            <div className="b2c-about-story-copy">
              <span className="b2c-pill subtle">Why It Feels Better</span>
              <h2>A cleaner order journey for premium print customers.</h2>
              <p>
                From artwork review to GSM selection and sample checking, we shape each order so the customer knows what is being produced before it reaches the machine.
              </p>
              <p>
                That makes Angel Enterprise feel less like a generic print counter and more like a premium print storefront for wedding, gifting, and business stationery needs.
              </p>
            </div>

            <div className="b2c-about-story-grid">
              {aboutHighlights.map((item) => (
                <article key={item.title} className="b2c-about-story-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="b2c-about-values-section">
          <div className="b2c-about-values-panel">
            <div>
              <span className="b2c-pill subtle">Why Clients Choose Us</span>
              <h2>Every print job is handled with clarity, finish awareness, and customer-focused support.</h2>
            </div>
            <div className="b2c-about-values-list">
              {aboutPrinciples.map((item) => (
                <div key={item} className="b2c-about-value-row">
                  <span className="b2c-about-preview-mark"><IconSpark /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="b2c-about-journey-section">
          <div className="b2c-about-journey-panel">
            <div className="b2c-about-journey-copy">
              <span className="b2c-pill subtle">Studio Approach</span>
              <h2>We treat each order like a finished product experience, not just a file to print.</h2>
              <p>
                That means better alignment between design intent, paper feel, print-side choice, GSM selection, and final production output. The result is cleaner communication with customers and stronger print results on the machine.
              </p>
            </div>
            <div className="b2c-about-journey-steps">
              {processSteps.map((step) => (
                <div key={step.step} className="b2c-about-journey-step">
                  <span>{step.step}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="b2c-about-cta-section">
          <div className="b2c-about-cta-card">
            <span className="b2c-pill subtle">Start Your Order</span>
            <h2>Explore the collection and plan your next premium print order.</h2>
            <div className="b2c-guest-hero-actions">
              <a href="/printing-policy" className="b2c-btn-secondary b2c-btn-inline">Read Printing Policy</a>
              <a href="/" className="b2c-btn-primary b2c-btn-inline">
                {user ? 'Back to Store Home' : 'Open B2C Home'} <IconArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <StoreFooter user={user} />
    </div>
  );
}

function GuestExperience({
  mode,
  setMode,
  error,
  notice,
  loading,
  form,
  updateForm,
  handleSubmit,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  previewProducts,
}) {
  const openCustomerLogin = () => {
    setMode('login');
    window.requestAnimationFrame(() => {
      document.getElementById('b2c-login')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="b2c-store-shell">
      <GuestHeader onLoginClick={openCustomerLogin} currentPage="home" />

      <HeroCarousel />

      <main className="b2c-store-main">
        <section className="b2c-intro-section">
          <div className="b2c-intro-container">
            <span className="b2c-pill">Premium Print Atelier</span>
            <h1 className="b2c-intro-title">Premium Printing for Celebrations and Brands</h1>
            <p className="b2c-intro-text">
              We create premium wedding kankotris, customized envelopes, invitation sets, brand inserts, and festive print products with a strong focus on quality and elegant finishing.
              For sharp colors, clean detailing, and reliable output, we use Konica printing machine technology in our production process.
              Our goal is to give every customer beautiful printing, smooth service, and a polished final result for every special occasion.
            </p>
            <div className="b2c-guest-hero-actions">
              <a href="/portal" className="b2c-btn-secondary b2c-btn-inline">Login as B2B</a>
              <button type="button" className="b2c-btn-primary b2c-btn-inline" onClick={openCustomerLogin}>
                Login as B2C <IconArrowRight />
              </button>
            </div>
          </div>
        </section>

        <AboutPreviewSection />

        <section id="catalog" className="b2c-section b2c-catalog-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Signature Collections</span>
            <h2>Configure & Order Prints</h2>
            <p>Select a category or search for custom stationery, then click "Customize" to get a live pricing quote.</p>
          </div>

          <div className="b2c-premium-product-grid">
            {previewProducts.slice(0, 8).map((product) => (
              <article key={product.id || product.name} className="b2c-premium-product-card">
                <div className="b2c-card-img-wrap">
                  <img src={getProductImage(product)} alt={product.name} className="b2c-card-img" />
                  <div className="b2c-card-badge-wrap">
                    <span className="b2c-card-tag">{product.category}</span>
                  </div>
                </div>
                <div className="b2c-card-details">
                  <h3>{product.name}</h3>
                  <p className="b2c-card-tagline">{product.tagline}</p>
                  <div className="b2c-card-pricing-row">
                    <div className="b2c-card-price">
                      <span className="b2c-price-lbl">Starting from</span>
                      <strong className="b2c-price-val">{money(product.amount)}</strong>
                    </div>
                    <div className="b2c-card-actions">
                      <button className="b2c-card-btn" type="button" onClick={openCustomerLogin}>
                        Customize <IconArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="b2c-login" className="b2c-login-panel-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Customer Access</span>
            <h2>Login or create your B2C account</h2>
            <p>Continue as a customer to place premium print orders, upload files, and track your requests.</p>
          </div>

          <div className="b2c-auth-card-wrap">
          <div className="b2c-auth-card">
            <div className="b2c-tabs">
              <button className={`b2c-tab ${mode === 'login' || mode === 'forgot' ? 'active' : ''}`} onClick={() => { setMode('login'); }}>
                Login
              </button>
              <button className={`b2c-tab ${mode === 'register' ? 'active' : ''}`} onClick={() => { setMode('register'); }}>
                Register
              </button>
            </div>

            <div className="b2c-form-content">
              <div className="b2c-auth-brandmark">
                <img src={logo} alt="Angel logo" className="b2c-auth-logo" />
              </div>

              <h2 className="b2c-heading">
                {mode === 'login' ? 'Customer Login' : mode === 'forgot' ? 'Forgot Password' : 'Create Customer Account'}
              </h2>
              <p className="b2c-subheading">
                {mode === 'login'
                  ? 'Enter your account and explore the premium customer storefront.'
                  : mode === 'forgot'
                    ? 'Reset your password using your email address and phone number.'
                    : 'Register to access the B2C home page and upcoming ecommerce experience.'}
              </p>

              {error && <div className="b2c-alert error">{error}</div>}
              {notice && <div className="b2c-alert success">{notice}</div>}

              <form className="b2c-form" onSubmit={handleSubmit}>
                {mode === 'register' && (
                  <>
                    <div className="b2c-input-group">
                      <label>Full Name</label>
                      <div className="b2c-input-wrapper">
                        <span className="b2c-input-icon"><IconUser /></span>
                        <input type="text" name="name" className="b2c-input" placeholder="Enter your full name" value={form.name} onChange={updateForm} required />
                      </div>
                    </div>

                    <div className="b2c-input-group">
                      <label>Phone Number</label>
                      <div className="b2c-input-wrapper">
                        <span className="b2c-input-icon"><IconPhone /></span>
                        <input type="tel" name="phone" className="b2c-input" placeholder="Enter your phone number" value={form.phone} onChange={updateForm} required />
                      </div>
                    </div>

                    <div className="b2c-input-group">
                      <label>Address</label>
                      <div className="b2c-input-wrapper b2c-textarea-wrap">
                        <span className="b2c-input-icon"><IconMapPin /></span>
                        <textarea name="address" className="b2c-input b2c-auth-textarea" placeholder="Enter your address" value={form.address} onChange={updateForm} required />
                      </div>
                    </div>
                  </>
                )}

                {mode === 'forgot' && (
                  <div className="b2c-input-group">
                    <label>Phone Number</label>
                    <div className="b2c-input-wrapper">
                      <span className="b2c-input-icon"><IconPhone /></span>
                      <input type="tel" name="phone" className="b2c-input" placeholder="Enter your registered phone number" value={form.phone} onChange={updateForm} required />
                    </div>
                  </div>
                )}

                <div className="b2c-input-group">
                  <label>Email Address</label>
                  <div className="b2c-input-wrapper">
                    <span className="b2c-input-icon"><IconEmail /></span>
                    <input type="email" name="email" className="b2c-input" placeholder="Enter your email" value={form.email} onChange={updateForm} required />
                  </div>
                </div>

                <div className="b2c-input-group">
                  <label>{mode === 'forgot' ? 'New Password' : 'Password'}</label>
                  <div className="b2c-input-wrapper">
                    <span className="b2c-input-icon"><IconLock /></span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="b2c-input"
                      placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
                      value={form.password}
                      onChange={updateForm}
                      required
                      style={{ paddingRight: '44px' }}
                    />
                    <button
                      type="button"
                      className="b2c-ghost-eye"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <IconEyeOff /> : <IconEye />}
                    </button>
                  </div>
                </div>

                {mode === 'login' && (
                  <button type="button" className="b2c-inline-link" onClick={() => setMode('forgot')}>
                    Forgot password?
                  </button>
                )}

                {(mode === 'register' || mode === 'forgot') && (
                  <div className="b2c-input-group">
                    <label>Confirm Password</label>
                    <div className="b2c-input-wrapper">
                      <span className="b2c-input-icon"><IconLock /></span>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="password_confirmation"
                        className="b2c-input"
                        placeholder="Confirm your password"
                        value={form.password_confirmation}
                        onChange={updateForm}
                        required
                        style={{ paddingRight: '44px' }}
                      />
                      <button
                        type="button"
                        className="b2c-ghost-eye"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                  </div>
                )}

                <button type="submit" className="b2c-btn-primary" disabled={loading}>
                  {loading ? 'Please wait...' : mode === 'login' ? 'Login' : mode === 'forgot' ? 'Reset Password' : 'Register'} <IconArrowRight />
                </button>
              </form>

              {mode === 'forgot' && (
                <button type="button" className="b2c-inline-link" onClick={() => setMode('login')}>
                  Back to login
                </button>
              )}

              <div className="b2c-secure-text">
                <span><IconSpark /></span>
                Premium customer access with your real print storefront now taking shape
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>

      <StoreFooter user={null} />
    </div>
  );
}

export default function B2CApp() {
  const pathname = window.location.pathname;
  const isAdminModule = pathname.startsWith('/b2c-admin');
  const isOrdersPage = pathname.startsWith('/my-orders');
  const isProfilePage = pathname.startsWith('/profile');
  const isPolicyPage = pathname.startsWith('/printing-policy');
  const isAboutPage = pathname.startsWith('/about-us');
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [policy, setPolicy] = useState(defaultPolicy);
  const [policyLoading, setPolicyLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: ''
  });

  const previewProducts = useMemo(() => buildProductCards(products), [products]);
  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (error) setError('');
    if (notice) setNotice('');
  };
  const getCsrf = () => document.querySelector('meta[name="csrf-token"]')?.content || '';

  const api = async (url, options = {}) => {
    const isFormData = options.body instanceof FormData;
    const response = await fetch(url, {
      credentials: 'same-origin',
      ...options,
      headers: {
        Accept: 'application/json',
        'X-CSRF-TOKEN': getCsrf(),
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers || {}),
      },
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      if (response.status === 419) {
        window.location.reload();
        return new Promise(() => { });
      }
      const firstError = data.errors ? Object.values(data.errors)[0]?.[0] : null;
      throw new Error(firstError || data.message || 'Something went wrong.');
    }

    return data;
  };

  async function checkUser() {
    if (isAdminModule) {
      const adminResponse = await api('/api/b2c/admin-session');
      setUser(adminResponse.user || null);
      return;
    }

    const customerResponse = await api('/api/b2c/me');
    setUser(customerResponse.user || null);
  }

  async function loadCatalog() {
    if (isAdminModule || isOrdersPage || isProfilePage || isPolicyPage || isAboutPage) return;

    try {
      const [productData, categoryData] = await Promise.all([
        api('/api/b2c/products'),
        api('/api/b2c/categories'),
      ]);
      setProducts(Array.isArray(productData) ? productData : []);
      setCategories(Array.isArray(categoryData) ? categoryData : []);
    } catch {
      setProducts([]);
      setCategories([]);
    }
  }

  async function loadPolicy() {
    if (!isPolicyPage) return;

    setPolicyLoading(true);
    try {
      const data = await api('/api/b2c/policy');
      setPolicy({
        title: data?.title || defaultPolicy.title,
        content: data?.content || '',
      });
    } catch {
      setPolicy(defaultPolicy);
    } finally {
      setPolicyLoading(false);
    }
  }

  async function loadNotifications() {
    if (!user) {
      setNotifications([]);
      setUnreadNotifications(0);
      return;
    }

    const baseUrl = isAdminModule ? '/portal/api/notifications' : '/api/b2c/notifications';
    try {
      const data = await api(baseUrl);
      setNotifications(data.notifications || []);
      setUnreadNotifications(data.unread_count || 0);
    } catch {
      setNotifications([]);
      setUnreadNotifications(0);
    }
  }

  useEffect(() => {
    Promise.all([
      checkUser(),
      loadCatalog(),
      loadPolicy(),
    ]).finally(() => setLoadingUser(false));
  }, []);

  useEffect(() => {
    loadNotifications();
  }, [user?.id, user?.role, isAdminModule]);

  const markNotificationRead = async (notificationId) => {
    const baseUrl = isAdminModule ? '/portal/api/notifications' : '/api/b2c/notifications';
    await api(`${baseUrl}/${notificationId}/read`, { method: 'POST', body: JSON.stringify({}) });
    await loadNotifications();
  };

  const markAllNotificationsRead = async () => {
    const baseUrl = isAdminModule ? '/portal/api/notifications' : '/api/b2c/notifications';
    await api(`${baseUrl}/read-all`, { method: 'POST', body: JSON.stringify({}) });
    await loadNotifications();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    setLoading(true);

    try {
      if (mode === 'register') {
        const response = await api('/api/b2c/register', {
          method: 'POST',
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            password: form.password,
            password_confirmation: form.password_confirmation
          })
        });

        setUser(response.user);
        setNotice(response.message || 'Registration successful.');
      } else if (mode === 'forgot') {
        const response = await api('/api/b2c/forgot-password', {
          method: 'POST',
          body: JSON.stringify({
            email: form.email,
            phone: form.phone,
            password: form.password,
            password_confirmation: form.password_confirmation,
          })
        });

        setNotice(response.message || 'Password reset successful.');
        setMode('login');
      } else {
        const response = await api('/api/b2c/login', {
          method: 'POST',
          body: JSON.stringify({
            email: form.email,
            password: form.password
          })
        });

        setUser(response.user);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const logoutUrl = isAdminModule ? '/portal/api/logout' : '/api/b2c/logout';
    await api(logoutUrl, { method: 'POST', body: JSON.stringify({}) });
    window.location.reload();
  };

  if (loadingUser) {
    return (
      <div className="b2c-page b2c-page-muted b2c-loader-page">
        <div className="b2c-loader-card">
          <img src={logo} alt="Angel logo" className="b2c-loader-logo" />
          <div className="b2c-loader-text">Loading B2C Portal...</div>
        </div>
      </div>
    );
  }

  if (isAdminModule) {
    if (!user) {
      return <AdminAccessRequired />;
    }

    return (
      <B2CAdminPanel
        user={user}
        onLogout={handleLogout}
        api={api}
        notifications={notifications}
        unreadCount={unreadNotifications}
        onMarkNotificationRead={markNotificationRead}
        onMarkAllNotificationsRead={markAllNotificationsRead}
      />
    );
  }

  if (user) {
    if (isAboutPage) {
      return (
        <AboutUsPage
          user={user}
          onLogout={handleLogout}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    }

    if (isPolicyPage) {
      return (
        <CustomerPolicyPage
          user={user}
          onLogout={handleLogout}
          policy={policy}
          policyLoading={policyLoading}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    }

    if (isOrdersPage) {
      return (
        <CustomerOrdersPage
          user={user}
          onLogout={handleLogout}
          api={api}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    }

    if (isProfilePage) {
      return (
        <CustomerProfilePage
          user={user}
          onLogout={handleLogout}
          api={api}
          onProfileUpdated={setUser}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    }

    return (
      <CustomerHome
        user={user}
        onLogout={handleLogout}
        products={products}
        categories={categories}
        api={api}
        notifications={notifications}
        unreadCount={unreadNotifications}
        onMarkNotificationRead={markNotificationRead}
        onMarkAllNotificationsRead={markAllNotificationsRead}
      />
    );
  }

  if (isAboutPage) {
    return <AboutUsPage user={null} onLogout={null} />;
  }

  if (isPolicyPage) {
    return <CustomerPolicyPage user={null} onLogout={null} policy={policy} policyLoading={policyLoading} />;
  }

  return (
    <GuestExperience
      mode={mode}
      setMode={(value) => {
        setMode(value);
        setError('');
        setNotice('');
      }}
      error={error}
      notice={notice}
      loading={loading}
      form={form}
      updateForm={updateForm}
      handleSubmit={handleSubmit}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      showConfirmPassword={showConfirmPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      previewProducts={previewProducts}
    />
  );
}
