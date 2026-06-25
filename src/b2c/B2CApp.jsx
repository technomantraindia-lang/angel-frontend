import React, { useEffect, useMemo, useState } from 'react';
import './b2c.css';
import logo from '../logo.png';
import carouselTwo from '../carousle 2.png';
import carouselThree from '../carousle 3.png';
import carouselFour from '../carousle 4.png';
import finalBanner from '../newest_banner.png';
import machineImage from '../machine.png';
import newBrocher from '../new brocher.png';
import newWedding from '../new weeding .png';
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

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const money = (value) => `₹${Number(value || 0).toLocaleString('en-IN', { minimumFractionDigits: Number(value || 0) % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 })}`;
const acceptedArtworkTypes = '.cdr,.zip,.png,.jpg,.jpeg';
const defaultPolicy = {
  title: 'Printing Policy',
  content: '',
};
const CUSTOMER_LOGIN_SECTION_ID = 'b2c-login';
const CUSTOMER_LOGIN_QUERY_PARAM = 'customer-login';

function redirectToCustomerLogin() {
  window.location.href = `/?${CUSTOMER_LOGIN_QUERY_PARAM}=1#${CUSTOMER_LOGIN_SECTION_ID}`;
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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="b2c-bell-icon">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
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
    image: finalBanner,
    alt: 'Angel Enterprise premium banner',
    eyebrow: 'Featured Collection',
    title: 'Transforming Ideas into Premium Prints',
    description: 'Discover high-fidelity printing solutions, luxury wedding collections, and bespoke branding stationery.',
    position: 'center',
  },
  {
    image: carouselFour,
    alt: 'Angel Enterprise premium print showcase banner',
    eyebrow: 'Production Studio',
    title: 'Elegant print presentation backed by strong machine performance.',
    description: 'From customer approval to final output, we keep every premium print order clean, refined, and production-ready.',
  },
  {
    image: newBrocher,
    alt: 'Premium brochures and corporate letterhead prints',
    eyebrow: 'Business Essentials',
    title: 'Brochure, Letterhead & Invoice Book Printing',
    description: 'We print premium brochures, letterheads, invoice books, and other business stationery.',
  },
  {
    image: newWedding,
    alt: 'Luxury wedding invitation cards',
    eyebrow: 'Wedding Collections',
    title: 'Premium Wedding Cards & Luxury Invitations',
    description: 'Create beautiful memories with premium paper, hot foil stamping, and classic wax seals.',
  },
  {
    image: carouselTwo,
    alt: 'Decorative luxury invitation design with premium detailing',
    eyebrow: 'Crafted Details',
    title: 'Foiling, textures, and layered print details that feel memorable.',
    description: 'We build statement pieces for celebrations and brand moments with careful layout, rich paper feel, and consistent Konica print output.',
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
    title: 'Envelopes',
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
    <a href="/" className={`b2c-brand ${compact ? 'compact' : ''}`} style={{ textDecoration: 'none' }}>
      <div className="b2c-brand-logo-wrap">
        <img src={logo} alt="Angel logo" className="b2c-brand-logo" />
      </div>
      <div className="b2c-brand-copy">
        <span className="b2c-brand-name">Angel Enterprise</span>
        <span className="b2c-brand-label">{label}</span>
      </div>
    </a>
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

function createEmptyB2CPricingTier(quantity = 100) {
  return {
    quantity,
    price: '',
    front_back_price: '',
  };
}

function getStandardProductPricingTiers(product, printSide = 'front') {
  const fallbackQuantity = Math.max(1, Number(product?.print_copy || 1));
  const fallbackFrontPrice = roundMoneyValue(Number(product?.amount || 0) * fallbackQuantity);
  const fallbackFrontBackPrice = product?.front_back_amount !== null && product?.front_back_amount !== undefined && product?.front_back_amount !== ''
    ? roundMoneyValue(Number(product.front_back_amount || 0) * fallbackQuantity)
    : null;

  const rawTiers = Array.isArray(product?.pricing_tiers) && product.pricing_tiers.length
    ? product.pricing_tiers
    : [{
        quantity: fallbackQuantity,
        price: fallbackFrontPrice,
        front_back_price: fallbackFrontBackPrice,
      }];

  return rawTiers
    .map((tier, index) => {
      const quantity = Math.max(1, Number(tier?.quantity || 0));
      const price = Number(tier?.price || 0);
      const frontBackPrice = tier?.front_back_price === null || tier?.front_back_price === undefined || tier?.front_back_price === ''
        ? null
        : Number(tier.front_back_price);

      if (!Number.isFinite(quantity) || quantity < 1 || !Number.isFinite(price) || price < 0) {
        return null;
      }

      return {
        id: tier?.id || `tier-${quantity}-${index}`,
        quantity,
        price: roundMoneyValue(price),
        front_back_price: frontBackPrice !== null && Number.isFinite(frontBackPrice)
          ? roundMoneyValue(frontBackPrice)
          : null,
      };
    })
    .filter(Boolean)
    .filter((tier) => printSide !== 'front_back' || tier.front_back_price !== null)
    .sort((a, b) => a.quantity - b.quantity);
}

function getStandardTierForQuantity(product, quantity, printSide = 'front') {
  const tiers = getStandardProductPricingTiers(product, printSide);
  return tiers.find((tier) => tier.quantity === Number(quantity)) || tiers[0] || null;
}

function getStandardTierTotal(product, quantity, printSide = 'front') {
  const tier = getStandardTierForQuantity(product, quantity, printSide);
  if (!tier) return 0;
  return printSide === 'front_back' ? Number(tier.front_back_price || 0) : Number(tier.price || 0);
}

function getStandardUnitPrice(product, quantity, printSide = 'front') {
  const total = getStandardTierTotal(product, quantity, printSide);
  const copies = Math.max(1, Number(quantity || 1));
  return roundMoneyValue(total / copies);
}

function getStandardTierOptionLabel(product, tier, printSide = 'front', recommendedQuantity = null, allTiers = []) {
  const quantityLabel = `${tier.quantity} Copies`;
  const totalPriceLabel = money(getStandardTierTotal(product, tier.quantity, printSide));
  const isRecommended = recommendedQuantity === tier.quantity && allTiers.length > 1;
  const maxQuantityLabelLength = allTiers.reduce((maxLength, currentTier) => {
    const currentLength = `${currentTier.quantity} Copies`.length;
    return Math.max(maxLength, currentLength);
  }, quantityLabel.length);
  const spacer = '\u00A0'.repeat(Math.max(4, (maxQuantityLabelLength - quantityLabel.length) + 6));

  return `${quantityLabel}${spacer}(${totalPriceLabel})${isRecommended ? '  - Recommended' : ''}`;
}

function getDefaultStandardQuantity(product, printSide = 'front') {
  return getStandardProductPricingTiers(product, printSide)[0]?.quantity || Math.max(1, Number(product?.print_copy || 1));
}

function roundMoneyValue(value) {
  return Math.round((Number(value || 0) + Number.EPSILON) * 100) / 100;
}

function emptyB2CProductForm(categories = []) {
  return {
    b2c_category_id: categories[0]?.id ? String(categories[0].id) : '',
    name: '',
    short_description: '',
    description: '',
    print_side_mode: 'front_only',
    pricing_tiers: [createEmptyB2CPricingTier()],
    allow_design_serial: false,
    allow_artwork_upload: false,
    sort_order: 0,
    remove_sample_pdf: false,
  };
}

function emptyColorPrintProductForm(categories = []) {
  return {
    category: categories[0]?.name || '',
    name: '',
    print_copy: 100,
    amount: '',
    front_back_amount: '',
    pricing_tiers: [],
    sort_order: 0,
    is_active: true,
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
  const [categoryImageFile, setCategoryImageFile] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [removeCategoryImage, setRemoveCategoryImage] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showCategoriesSection, setShowCategoriesSection] = useState(false);
  const [productForm, setProductForm] = useState(() => emptyB2CProductForm());
  const [editingProductId, setEditingProductId] = useState(null);
  const [existingImages, setExistingImages] = useState([]);
  const [removedImageIds, setRemovedImageIds] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [samplePdfFile, setSamplePdfFile] = useState(null);
  const [productSubmitting, setProductSubmitting] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);

  // Color Print Admin states
  const [colorPrintProducts, setColorPrintProducts] = useState([]);
  const [colorPrintCategories, setColorPrintCategories] = useState([]);
  const [colorPrintCategoryName, setColorPrintCategoryName] = useState('');
  const [colorPrintCategoryLoading, setColorPrintCategoryLoading] = useState(false);
  const [colorPrintProductForm, setColorPrintProductForm] = useState(() => emptyColorPrintProductForm());
  const [editingColorPrintProductId, setEditingColorPrintProductId] = useState(null);
  const [colorPrintProductSubmitting, setColorPrintProductSubmitting] = useState(false);

  const [searchB2CProduct, setSearchB2CProduct] = useState('');
  const [selectedB2CProductCategory, setSelectedB2CProductCategory] = useState('All');
  const [searchColorPrintProduct, setSearchColorPrintProduct] = useState('');
  const [searchB2COrder, setSearchB2COrder] = useState('');
  const [searchCustomer, setSearchCustomer] = useState('');
  const [productFormStep, setProductFormStep] = useState(1);
  const [searchCancelledB2COrder, setSearchCancelledB2COrder] = useState('');

  const filteredB2CProducts = useMemo(() => {
    return products.filter(p => {
      const categoryMatch = selectedB2CProductCategory === 'All' || p.category === selectedB2CProductCategory;
      const searchMatch = (p.name || '').toLowerCase().includes(searchB2CProduct.toLowerCase()) ||
                          (p.category || '').toLowerCase().includes(searchB2CProduct.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [products, searchB2CProduct, selectedB2CProductCategory]);

  const filteredColorPrintProducts = useMemo(() => {
    return colorPrintProducts.filter(p => 
      (p.name || '').toLowerCase().includes(searchColorPrintProduct.toLowerCase()) ||
      (p.category || '').toLowerCase().includes(searchColorPrintProduct.toLowerCase())
    );
  }, [colorPrintProducts, searchColorPrintProduct]);

  const filteredB2COrders = useMemo(() => {
    return orders.filter(o => {
      if (o.status === 'cancelled') return false;
      const q = searchB2COrder.toLowerCase();
      const orderNumberMatch = (o.order_number || '').toLowerCase().includes(q);
      const contactNameMatch = (o.customer?.name || o.contact_name || '').toLowerCase().includes(q);
      const contactEmailMatch = (o.contact_email || '').toLowerCase().includes(q);
      const contactPhoneMatch = (o.contact_phone || '').toLowerCase().includes(q);
      const itemsMatch = (o.items || []).some(item => (item.product_name || '').toLowerCase().includes(q));
      return orderNumberMatch || contactNameMatch || contactEmailMatch || contactPhoneMatch || itemsMatch;
    });
  }, [orders, searchB2COrder]);

  const filteredCancelledB2COrders = useMemo(() => {
    return orders.filter(o => {
      if (o.status !== 'cancelled') return false;
      const q = searchCancelledB2COrder.toLowerCase();
      const orderNumberMatch = (o.order_number || '').toLowerCase().includes(q);
      const contactNameMatch = (o.customer?.name || o.contact_name || '').toLowerCase().includes(q);
      const contactEmailMatch = (o.contact_email || '').toLowerCase().includes(q);
      const contactPhoneMatch = (o.contact_phone || '').toLowerCase().includes(q);
      const itemsMatch = (o.items || []).some(item => (item.product_name || '').toLowerCase().includes(q));
      return orderNumberMatch || contactNameMatch || contactEmailMatch || contactPhoneMatch || itemsMatch;
    });
  }, [orders, searchCancelledB2COrder]);

  const filteredCustomers = useMemo(() => {
    return customers.filter(c => 
      (c.name || '').toLowerCase().includes(searchCustomer.toLowerCase()) ||
      (c.email || '').toLowerCase().includes(searchCustomer.toLowerCase()) ||
      (c.phone || '').toLowerCase().includes(searchCustomer.toLowerCase())
    );
  }, [customers, searchCustomer]);

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
    setProductFormStep(1);
  };

  const loadAdminData = async () => {
    try {
      const [
        dashboardData, productData, categoryData, orderData, customerData, staffData, policyData,
        cpProductData, cpCategoryData
      ] = await Promise.all([
        api('/portal/api/admin/b2c/dashboard'),
        api('/portal/api/admin/b2c/products'),
        api('/portal/api/admin/b2c/categories'),
        api('/portal/api/admin/b2c/orders'),
        api('/portal/api/admin/b2c/customers'),
        api('/portal/api/admin/staff-users'),
        api('/portal/api/admin/b2c/policy'),
        api('/portal/api/admin/b2c-color-print/products'),
        api('/portal/api/admin/b2c-color-print/categories'),
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
      setColorPrintProducts(Array.isArray(cpProductData) ? cpProductData : []);
      setColorPrintCategories(Array.isArray(cpCategoryData) ? cpCategoryData : []);
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

  useEffect(() => {
    if (colorPrintCategories.length && !colorPrintProductForm.category && !editingColorPrintProductId) {
      setColorPrintProductForm((prev) => ({ ...prev, category: colorPrintCategories[0].name }));
    }
  }, [colorPrintCategories, colorPrintProductForm.category, editingColorPrintProductId]);

  const resetColorPrintProductForm = (nextCategories = colorPrintCategories) => {
    setEditingColorPrintProductId(null);
    setColorPrintProductForm(emptyColorPrintProductForm(nextCategories));
  };

  const startEditProduct = (product) => {
    const fallbackQuantity = Math.max(1, Number(product.print_copy || 100));
    const fallbackFrontPrice = roundMoneyValue(Number(product.amount || 0) * fallbackQuantity);
    const fallbackFrontBackPrice = product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== ''
      ? roundMoneyValue(Number(product.front_back_amount || 0) * fallbackQuantity)
      : '';

    setEditingProductId(product.id);
    setProductForm({
      b2c_category_id: String(product.b2c_category_id),
      name: product.name || '',
      short_description: product.short_description || '',
      description: product.description || '',
      print_side_mode: product.print_side_mode || 'front_only',
      pricing_tiers: Array.isArray(product.pricing_tiers) && product.pricing_tiers.length
        ? product.pricing_tiers.map((tier, index) => ({
            quantity: tier.quantity ?? (index + 1) * 100,
            price: tier.price ?? '',
            front_back_price: tier.front_back_price ?? '',
          }))
        : [{
            quantity: fallbackQuantity,
            price: fallbackFrontPrice,
            front_back_price: fallbackFrontBackPrice,
          }],
      allow_design_serial: Boolean(product.allow_design_serial),
      allow_artwork_upload: Boolean(product.allow_artwork_upload),
      sort_order: product.sort_order || 0,
      remove_sample_pdf: false,
    });
    setExistingImages(Array.isArray(product.images) ? product.images : []);
    setRemovedImageIds([]);
    setNewImages([]);
    setSamplePdfFile(null);
    setProductFormStep(2);
    setTab('add_product');
    setNotice(`Editing ${product.name}.`);
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();
    if (!categoryName.trim()) return;

    setError('');
    setNotice('');
    setCategoryLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', categoryName.trim());
      if (categoryImageFile) {
        formData.append('image', categoryImageFile);
      }

      await api('/portal/api/admin/b2c/categories', {
        method: 'POST',
        body: formData,
      });
      setCategoryName('');
      setCategoryImageFile(null);
      setShowCategoryForm(false);
      setNotice('Customer category added successfully.');
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
      setNotice(response.message || 'Customer category deleted successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStartEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setCategoryImageFile(null);
    setRemoveCategoryImage(false);
    setShowCategoryForm(true);
    setShowCategoriesSection(true);
    setError('');
    setNotice('');
  };

  const handleCancelEditCategory = () => {
    setEditingCategory(null);
    setCategoryName('');
    setCategoryImageFile(null);
    setRemoveCategoryImage(false);
    setShowCategoryForm(false);
    setError('');
    setNotice('');
  };

  const handleUpdateCategory = async (event) => {
    event.preventDefault();
    if (!editingCategory || !categoryName.trim()) return;

    setError('');
    setNotice('');
    setCategoryLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', categoryName.trim());
      if (categoryImageFile) {
        formData.append('image', categoryImageFile);
      }
      if (removeCategoryImage) {
        formData.append('remove_image', '1');
      }

      await api(`/portal/api/admin/b2c/categories/${editingCategory.id}`, {
        method: 'POST',
        body: formData,
      });

      setEditingCategory(null);
      setCategoryName('');
      setCategoryImageFile(null);
      setRemoveCategoryImage(false);
      setShowCategoryForm(false);
      setNotice('Customer category updated successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    } finally {
      setCategoryLoading(false);
    }
  };

  const handleProductField = (field, value) => {
    setProductForm((prev) => {
      if (field === 'print_side_mode') {
        return {
          ...prev,
          print_side_mode: value,
          pricing_tiers: (prev.pricing_tiers || []).map((tier) => ({
            ...tier,
            front_back_price: value === 'front_only' ? '' : tier.front_back_price,
          })),
        };
      }

      return { ...prev, [field]: value };
    });
  };

  const addProductPricingTier = () => {
    setProductForm((prev) => ({
      ...prev,
      pricing_tiers: [...(prev.pricing_tiers || []), createEmptyB2CPricingTier()],
    }));
  };

  const updateProductPricingTier = (index, field, value) => {
    setProductForm((prev) => {
      const tiers = [...(prev.pricing_tiers || [])];
      tiers[index] = { ...tiers[index], [field]: value };
      return { ...prev, pricing_tiers: tiers };
    });
  };

  const removeProductPricingTier = (index) => {
    setProductForm((prev) => {
      const tiers = (prev.pricing_tiers || []).filter((_, tierIndex) => tierIndex !== index);
      return {
        ...prev,
        pricing_tiers: tiers.length ? tiers : [createEmptyB2CPricingTier()],
      };
    });
  };

  // GSM handlers removed

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
      setError('Please create a Customer category before adding products.');
      return;
    }

    if (totalSelectedImages < 1) {
      setError('Please keep at least one product image.');
      return;
    }

    const normalizedPricingTiers = (productForm.pricing_tiers || [])
      .map((tier) => ({
        quantity: Number(tier.quantity || 0),
        price: Number(tier.price || 0),
        front_back_price: tier.front_back_price === '' || tier.front_back_price === null || tier.front_back_price === undefined
          ? null
          : Number(tier.front_back_price),
      }))
      .filter((tier) => Number.isFinite(tier.quantity) && tier.quantity > 0 && Number.isFinite(tier.price) && tier.price >= 0)
      .sort((a, b) => a.quantity - b.quantity);

    if (!normalizedPricingTiers.length) {
      setError('Please add at least one quantity and base price row.');
      return;
    }

    setProductSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('b2c_category_id', productForm.b2c_category_id);
      formData.append('name', productForm.name);
      formData.append('short_description', productForm.short_description);
      formData.append('description', productForm.description);
      formData.append('print_side_mode', productForm.print_side_mode || 'front_only');
      formData.append('pricing_tiers_json', JSON.stringify(normalizedPricingTiers));
      formData.append('gsm_options_json', JSON.stringify([]));
      formData.append('allow_design_serial', productForm.allow_design_serial ? '1' : '0');
      formData.append('allow_artwork_upload', productForm.allow_artwork_upload ? '1' : '0');
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
        setNotice('Customer product updated successfully.');
      } else {
        await api('/portal/api/admin/b2c/products', { method: 'POST', body: formData });
        setNotice('Customer product added successfully.');
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
      setNotice(response.message || 'Customer product deleted successfully.');
      if (editingProductId === product.id) {
        resetProductForm();
      }
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddColorPrintCategory = async (event) => {
    event.preventDefault();
    if (!colorPrintCategoryName.trim()) return;

    setError('');
    setNotice('');
    setColorPrintCategoryLoading(true);

    try {
      await api('/portal/api/admin/b2c-color-print/categories', {
        method: 'POST',
        body: JSON.stringify({ name: colorPrintCategoryName.trim() }),
      });
      setColorPrintCategoryName('');
      setNotice('Color print category added successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    } finally {
      setColorPrintCategoryLoading(false);
    }
  };

  const handleDeleteColorPrintCategory = async (category) => {
    if (!window.confirm(`Delete color print category "${category.name}"?`)) return;

    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c-color-print/categories/${category.id}`, { method: 'DELETE' });
      setNotice(response.message || 'Color print category deleted successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditColorPrintCategory = async (category) => {
    const newName = window.prompt("Edit Color Print Category Name:", category.name);
    if (newName === null) return;
    const trimmed = newName.trim();
    if (!trimmed || trimmed === category.name) return;

    setError('');
    setNotice('');

    try {
      await api(`/portal/api/admin/b2c-color-print/categories/${category.id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: trimmed }),
      });
      setNotice('Color print category renamed successfully.');
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleColorPrintProductField = (field, value) => {
    setColorPrintProductForm((prev) => ({ ...prev, [field]: value }));
  };

  const addColorPrintTier = (printSide = 'front') => {
    setColorPrintProductForm(prev => ({
      ...prev,
      pricing_tiers: [...(prev.pricing_tiers || []), { print_side: printSide, min: 1, max: '', discount: '' }]
    }));
  };

  const updateColorPrintTier = (index, field, value) => {
    setColorPrintProductForm(prev => {
      const tiers = [...(prev.pricing_tiers || [])];
      tiers[index] = { ...tiers[index], [field]: value };
      return { ...prev, pricing_tiers: tiers };
    });
  };

  const removeColorPrintTier = (index) => {
    setColorPrintProductForm(prev => ({
      ...prev,
      pricing_tiers: (prev.pricing_tiers || []).filter((_, i) => i !== index)
    }));
  };

  const startEditColorPrintProduct = (product) => {
    setEditingColorPrintProductId(product.id);
    setColorPrintProductForm({
      category: product.category || '',
      name: product.name || '',
      print_copy: product.print_copy || 1,
      amount: product.amount || '',
      front_back_amount: product.front_back_amount !== null && product.front_back_amount !== undefined ? product.front_back_amount : '',
      pricing_tiers: product.pricing_tiers || [],
      sort_order: product.sort_order || 0,
      is_active: product.is_active
    });
    setTab('color_print');
    setNotice(`Editing Color Print product ${product.name}. Scroll up/down to see form.`);
  };

  const submitColorPrintProduct = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');

    if (!colorPrintCategories.length) {
      setError('Please create a Color Print category before adding products.');
      return;
    }

    setColorPrintProductSubmitting(true);

    try {
      const payload = {
        category: colorPrintProductForm.category,
        name: colorPrintProductForm.name,
        print_copy: Number(colorPrintProductForm.print_copy || 1),
        amount: Number(colorPrintProductForm.amount || 0),
        front_back_amount: colorPrintProductForm.front_back_amount !== '' && colorPrintProductForm.front_back_amount !== null && colorPrintProductForm.front_back_amount !== undefined ? Number(colorPrintProductForm.front_back_amount) : null,
        pricing_tiers: (colorPrintProductForm.pricing_tiers || []).map((t) => ({
          print_side: t.print_side || 'front',
          min: Number(t.min || 1),
          max: t.max !== '' && t.max !== null && t.max !== undefined ? Number(t.max) : null,
          discount: Number(t.discount || 0)
        })),
        sort_order: Number(colorPrintProductForm.sort_order || 0),
        is_active: colorPrintProductForm.is_active ? 1 : 0
      };

      if (editingColorPrintProductId) {
        await api(`/portal/api/admin/b2c-color-print/products/${editingColorPrintProductId}`, {
          method: 'PUT',
          body: JSON.stringify(payload)
        });
        setNotice('Color print product updated successfully.');
      } else {
        await api('/portal/api/admin/b2c-color-print/products', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        setNotice('Color print product added successfully.');
      }

      resetColorPrintProductForm();
      await loadAdminData();
    } catch (err) {
      setError(err.message);
    } finally {
      setColorPrintProductSubmitting(false);
    }
  };

  const handleDeleteColorPrintProduct = async (product) => {
    if (!window.confirm(`Delete color print product "${product.name}"?`)) return;

    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c-color-print/products/${product.id}`, { method: 'DELETE' });
      setNotice(response.message || 'Color print product deleted successfully.');
      if (editingColorPrintProductId === product.id) {
        resetColorPrintProductForm();
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
      setNotice(response.message || 'Customer account deleted successfully.');
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

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this customer order? This action cannot be undone.")) return;
    setError('');
    setNotice('');

    try {
      const response = await api(`/portal/api/admin/b2c/orders/${orderId}`, {
        method: 'DELETE',
      });
      setNotice(response.message || 'Customer order deleted successfully.');
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
      setNotice(response.message || 'Customer order work assignment updated successfully.');
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
      setNotice(response.message || 'Customer job status updated successfully.');
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
      setNotice(response.message || 'Customer printing policy updated successfully.');
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
        customer.phone ? `\t${customer.phone}` : '',
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
          <div className="b2c-loader-text">Loading Customer Module...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="b2c-page b2c-page-muted">
      <header className="b2c-shell-topbar">
        <BrandBlock compact label={isStaffModule ? 'Customer Staff Module' : 'Customer Admin Module'} />
        <div className="b2c-shell-actions">
          <a href="/portal" className="b2c-link-strong">Back to Dealer Module</a>
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
              ? [['orders', 'Customer Orders']]
              : [
                  ['dashboard', 'Dashboard'],
                  ['add_product', 'Add Products'],
                  ['products', 'Product Catalog'],
                  ['color_print', 'Customization Color Print'],
                  ['orders', 'Orders'],
                  ['cancelled_orders', 'Cancelled Orders'],
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
                  <h2>Latest Customer activity</h2>
                </div>
              </div>

              {(stats.recent_orders || []).length === 0 ? (
                <div className="b2c-admin-empty">No Customer orders yet.</div>
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

        {(tab === 'add_product' || tab === 'products') && (
          <>
            {tab === 'add_product' && (
              <>
            <section className="b2c-admin-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(201, 163, 94, 0.22)', background: 'linear-gradient(180deg, var(--b2c-white) 0%, var(--b2c-pearl) 100%)', borderRadius: '24px', boxShadow: '0 8px 30px rgba(13, 20, 36, 0.04)', marginBottom: '24px' }}>
              <div 
                className="b2c-admin-card-head" 
                onClick={() => {
                  if (editingCategory) {
                    // Do not allow collapsing while in edit mode to prevent confusion
                    return;
                  }
                  setShowCategoriesSection(!showCategoriesSection);
                }}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  cursor: editingCategory ? 'default' : 'pointer', 
                  margin: '0', 
                  padding: '20px 28px',
                  background: 'linear-gradient(90deg, rgba(201, 163, 94, 0.07) 0%, rgba(201, 163, 94, 0.02) 100%)',
                  borderBottom: showCategoriesSection ? '1.5px solid rgba(201, 163, 94, 0.16)' : 'none',
                  transition: 'background-color 0.25s ease',
                  userSelect: 'none'
                }}
                onMouseEnter={(e) => { if (!editingCategory) e.currentTarget.style.backgroundColor = 'rgba(201, 163, 94, 0.12)'; }}
                onMouseLeave={(e) => { if (!editingCategory) e.currentTarget.style.backgroundColor = ''; }}
              >
                <div>
                  <span className="b2c-pill subtle" style={{ marginBottom: '4px', display: 'inline-block' }}>Categories</span>
                  <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: 'var(--b2c-navy)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {editingCategory ? `Edit Category: ${editingCategory.name}` : 'Manage Customer Categories'}
                    <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--muted)' }}>
                      ({categories.length} categories)
                    </span>
                  </h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {!editingCategory && (
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--b2c-gold)' }}>
                      {showCategoriesSection ? 'Hide Panel' : 'Expand Panel'}
                    </span>
                  )}
                  {!editingCategory && (
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ 
                        transform: showCategoriesSection ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        color: 'var(--b2c-gold)'
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </div>
              </div>

              {showCategoriesSection && (
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                    {editingCategory ? (
                      <button 
                        className="b2c-btn-secondary" 
                        type="button" 
                        onClick={handleCancelEditCategory}
                        style={{ padding: '8px 16px', fontSize: '13px', width: 'auto' }}
                      >
                        Cancel Edit
                      </button>
                    ) : (
                      <button 
                        className="b2c-btn-primary" 
                        type="button" 
                        onClick={() => setShowCategoryForm(!showCategoryForm)}
                        style={{ padding: '8px 16px', fontSize: '13px', width: 'auto' }}
                      >
                        {showCategoryForm ? 'Close Form' : '+ Add Category'}
                      </button>
                    )}
                  </div>

                  {showCategoryForm && (
                    <form 
                      className="b2c-admin-product-form" 
                      onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory}
                      style={{ marginBottom: '30px', padding: '20px', background: 'rgba(201, 163, 94, 0.04)', borderRadius: '16px', border: '1px solid rgba(201, 163, 94, 0.12)' }}
                    >
                      <div className="b2c-admin-form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <label>
                          Category Name
                          <input
                            type="text"
                            value={categoryName}
                            onChange={(event) => setCategoryName(event.target.value)}
                            placeholder="e.g. Wedding Cards, Visiting Cards"
                            required
                          />
                        </label>
                        
                        <label>
                          Category Image File
                          <input
                            type="file"
                            accept="image/*"
                            key={categoryImageFile ? 'has-file' : 'no-file'}
                            onChange={(event) => setCategoryImageFile(event.target.files?.[0] || null)}
                            style={{ padding: '7px 10px' }}
                          />
                        </label>
                      </div>

                      {editingCategory && editingCategory.image_url && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                            <img src={editingCategory.image_url} alt="Current" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 'bold', color: 'var(--b2c-error)', cursor: 'pointer' }}>
                            <input 
                              type="checkbox" 
                              checked={removeCategoryImage} 
                              onChange={(e) => setRemoveCategoryImage(e.target.checked)} 
                              style={{ width: 'auto', margin: 0 }}
                            />
                            Remove current category image
                          </label>
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                        <button className="b2c-btn-primary" type="submit" disabled={categoryLoading}>
                          {categoryLoading ? 'Saving...' : editingCategory ? 'Update Category' : 'Add Category'}
                        </button>
                      </div>
                    </form>
                  )}

                  {categories.length > 0 ? (
                    <div className="b2c-admin-table-wrap" style={{ marginTop: '20px' }}>
                      <table className="b2c-admin-table" style={{ minWidth: '600px' }}>
                        <thead>
                          <tr>
                            <th style={{ width: '80px' }}>Image</th>
                            <th>Category Name</th>
                            <th style={{ width: '150px', textAlign: 'right' }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((category) => (
                            <tr key={category.id}>
                              <td>
                                <div style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(13,20,36,0.08)', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  {category.image_url ? (
                                    <img src={category.image_url} alt={category.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                  ) : (
                                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 'bold', textAlign: 'center', padding: '2px' }}>No Image</span>
                                  )}
                                </div>
                              </td>
                              <td style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '15px' }}>
                                {category.name}
                              </td>
                              <td style={{ verticalAlign: 'middle', textAlign: 'right' }}>
                                <div className="b2c-admin-table-actions" style={{ justifyContent: 'flex-end', gap: '10px' }}>
                                  <button 
                                    type="button" 
                                    className="b2c-btn-secondary" 
                                    onClick={() => handleStartEditCategory(category)}
                                    style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '6px', background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
                                  >
                                    Edit
                                  </button>
                                  <button 
                                    type="button" 
                                    className="b2c-btn-secondary" 
                                    onClick={() => handleDeleteCategory(category)}
                                    style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '6px', background: '#fef2f2', color: '#b91c1c', border: '1px solid #fca5a5' }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="b2c-admin-empty">No categories available. Please create one above.</div>
                  )}
                </div>
              )}
            </section>

            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head">
                <div>
                  <span className="b2c-pill subtle">{editingProductId ? 'Edit Product' : 'Add Product'}</span>
                  <h2>{editingProductId ? 'Update Customer product' : 'Create Customer product'}</h2>
                </div>
                {editingProductId && (
                  <button className="b2c-btn-secondary" type="button" onClick={() => resetProductForm()}>
                    Cancel Edit
                  </button>
                )}
              </div>

              <form className="b2c-admin-product-form" onSubmit={submitProduct}>
                {!editingProductId && productFormStep === 1 ? (
                  <div className="b2c-admin-form-grid" style={{ gridTemplateColumns: '1fr' }}>
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
                    <div className="b2c-modal-actions" style={{ justifyContent: 'flex-start', borderTop: 'none', padding: '0', marginTop: '16px' }}>
                      <button
                        type="button"
                        className="b2c-btn-primary"
                        disabled={!productForm.b2c_category_id}
                        onClick={() => setProductFormStep(2)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="b2c-admin-form-container">
                      {/* Left Column */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Card 1: Product Basics */}
                        <div className="b2c-admin-card-redesigned">
                          <div className="b2c-admin-card-redesigned-head">
                            <h3>
                              <span className="badge">1</span> Product Basics
                            </h3>
                          </div>
                          <div className="b2c-admin-grid-inputs two-cols">
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

                            <label style={{ gridColumn: 'span 2' }}>
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

                            <label style={{ gridColumn: 'span 2' }}>
                              Short Description
                              <input
                                type="text"
                                value={productForm.short_description}
                                onChange={(event) => handleProductField('short_description', event.target.value)}
                                placeholder="Visible in product cards"
                              />
                            </label>

                            <label style={{ gridColumn: 'span 2' }}>
                              Description
                              <textarea
                                value={productForm.description}
                                onChange={(event) => handleProductField('description', event.target.value)}
                                placeholder="Full product details for the customer modal"
                                style={{ minHeight: '120px' }}
                              />
                            </label>
                          </div>
                        </div>

                        {/* Card 2: Pricing Tiers */}
                        <div className="b2c-admin-card-redesigned">
                          <div className="b2c-admin-card-redesigned-head" style={{ borderBottom: 'none', marginBottom: '0', paddingBottom: '0' }}>
                            <div>
                              <h3 style={{ marginBottom: '4px' }}>
                                <span className="badge">2</span> Base Pricing Tiers
                              </h3>
                              <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--b2c-slate)' }}>
                                Enter total base price for each quantity tier. Customers see per-unit price automatically.
                              </p>
                            </div>
                            <button
                              type="button"
                              className="b2c-btn-secondary"
                              onClick={addProductPricingTier}
                              style={{ padding: '8px 16px', fontSize: '13px' }}
                            >
                              + Add Tier Row
                            </button>
                          </div>

                          <div style={{ marginTop: '16px', overflowX: 'auto' }}>
                            <table className="b2c-admin-tier-table">
                              <thead>
                                <tr>
                                  <th style={{ width: '25%' }}>Quantity</th>
                                  <th style={{ width: '35%' }}>Front Base Price</th>
                                  {productForm.print_side_mode !== 'front_only' && (
                                    <th style={{ width: '35%' }}>Front & Back Base Price</th>
                                  )}
                                  <th style={{ width: '5%', textAlign: 'center' }}>Remove</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(productForm.pricing_tiers || []).map((tier, index) => {
                                  const quantity = Number(tier.quantity || 0);
                                  const frontPrice = Number(tier.price || 0);
                                  const frontBackPrice = Number(tier.front_back_price || 0);
                                  const frontUnitPrice = quantity > 0 ? roundMoneyValue(frontPrice / quantity) : 0;
                                  const frontBackUnitPrice = quantity > 0 ? roundMoneyValue(frontBackPrice / quantity) : 0;

                                  return (
                                    <tr key={`b2c-tier-${index}`}>
                                      <td>
                                        <div className="b2c-admin-tier-field">
                                          <input
                                            type="number"
                                            min="1"
                                            value={tier.quantity}
                                            onChange={(event) => updateProductPricingTier(index, 'quantity', event.target.value)}
                                            placeholder="e.g. 100"
                                            required
                                          />
                                          <span className="b2c-admin-tier-helper b2c-admin-tier-helper-hidden">
                                            Per unit: {money(0)}
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="b2c-admin-tier-field">
                                          <input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={tier.price}
                                            onChange={(event) => updateProductPricingTier(index, 'price', event.target.value)}
                                            placeholder="₹"
                                            required
                                          />
                                          <span className="b2c-admin-tier-helper">
                                            Per unit: {money(frontUnitPrice)}
                                          </span>
                                        </div>
                                      </td>
                                      {productForm.print_side_mode !== 'front_only' && (
                                        <td>
                                          <div className="b2c-admin-tier-field">
                                            <input
                                              type="number"
                                              min="0"
                                              step="0.01"
                                              value={tier.front_back_price}
                                              onChange={(event) => updateProductPricingTier(index, 'front_back_price', event.target.value)}
                                              placeholder="₹"
                                              required
                                            />
                                            <span className="b2c-admin-tier-helper">
                                              Per unit: {money(frontBackUnitPrice)}
                                            </span>
                                          </div>
                                        </td>
                                      )}
                                      <td style={{ textAlign: 'center' }}>
                                        <button
                                          type="button"
                                          onClick={() => removeProductPricingTier(index)}
                                          style={{
                                            border: 'none',
                                            background: 'rgba(220, 38, 38, 0.06)',
                                            color: 'var(--b2c-error)',
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--b2c-error)';
                                            e.currentTarget.style.color = '#fff';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(220, 38, 38, 0.06)';
                                            e.currentTarget.style.color = 'var(--b2c-error)';
                                          }}
                                        >
                                          ✕
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            {(!productForm.pricing_tiers || productForm.pricing_tiers.length === 0) && (
                              <div style={{ padding: '20px', textAlign: 'center', color: 'var(--b2c-slate)', fontSize: '13px' }}>
                                No pricing tiers added yet. Click "+ Add Tier Row" to add.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Card 3: Media & Files */}
                        <div className="b2c-admin-card-redesigned">
                          <div className="b2c-admin-card-redesigned-head">
                            <h3>
                              <span className="badge">3</span> Media & Attachments
                            </h3>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Product Photos */}
                            <div>
                              <label style={{ fontWeight: '700', fontSize: '13px', color: 'var(--b2c-navy)', display: 'block', marginBottom: '8px' }}>
                                Product Photos (up to 5)
                              </label>
                              <label htmlFor="admin-image-upload" className="b2c-admin-media-item" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                                <span style={{ fontWeight: '800', color: 'var(--b2c-navy)', fontSize: '14px' }}>Choose images...</span>
                                <span style={{ fontSize: '11px', color: 'var(--b2c-slate)' }}>
                                  {totalSelectedImages}/5 images selected.
                                </span>
                                <input
                                  id="admin-image-upload"
                                  type="file"
                                  accept="image/png,image/jpeg,image/webp"
                                  multiple
                                  onChange={handleNewImages}
                                  style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}
                                />
                              </label>

                              {visibleExistingImages.length > 0 && (
                                <div style={{ marginTop: '16px' }}>
                                  <strong style={{ fontSize: '12px', color: 'var(--b2c-navy)', display: 'block', marginBottom: '8px' }}>
                                    Current Images
                                  </strong>
                                  <div className="b2c-admin-media-grid">
                                    {visibleExistingImages.map((image) => (
                                      <div key={image.id} className="b2c-admin-media-card-redesigned">
                                        <img src={image.file_url} alt="Product" />
                                        <button
                                          type="button"
                                          className="remove-btn"
                                          onClick={() => setRemovedImageIds((prev) => [...prev, image.id])}
                                          title="Remove image"
                                        >
                                          ✕
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {newImages.length > 0 && (
                                <div style={{ marginTop: '16px' }}>
                                  <strong style={{ fontSize: '12px', color: 'var(--b2c-navy)', display: 'block', marginBottom: '8px' }}>
                                    New Images Selected
                                  </strong>
                                  <div className="b2c-admin-media-grid">
                                    {newImagePreviews.map((preview, index) => (
                                      <div key={preview.id} className="b2c-admin-media-card-redesigned">
                                        <img src={preview.url} alt={preview.name} />
                                        <button
                                          type="button"
                                          className="remove-btn"
                                          onClick={() => handleRemoveNewImage(index)}
                                          title="Remove image"
                                        >
                                          ✕
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Sample PDF */}
                            <div style={{ borderTop: '1px solid rgba(13, 20, 36, 0.06)', paddingTop: '16px' }}>
                              <label style={{ fontWeight: '700', fontSize: '13px', color: 'var(--b2c-navy)', display: 'block', marginBottom: '8px' }}>
                                Sample PDF Document
                              </label>
                              <label htmlFor="admin-pdf-upload" className="b2c-admin-media-item" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                                <span style={{ fontWeight: '800', color: 'var(--b2c-navy)', fontSize: '14px' }}>Choose PDF...</span>
                                <span style={{ fontSize: '11px', color: 'var(--b2c-slate)' }}>
                                  PDF sample for customer reference.
                                </span>
                                <input
                                  id="admin-pdf-upload"
                                  type="file"
                                  accept="application/pdf"
                                  onChange={handleSamplePdfChange}
                                  style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}
                                />
                              </label>

                              {(samplePdfFile || editingProduct?.sample_pdf_url) && (
                                <div style={{ marginTop: '12px' }}>
                                  {editingProduct?.sample_pdf_url && !productForm.remove_sample_pdf && !samplePdfFile && (
                                    <div className="b2c-admin-pdf-preview-box">
                                      <div className="b2c-admin-pdf-icon-badge">PDF</div>
                                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <strong style={{ fontSize: '12px', color: 'var(--b2c-navy)' }}>Current PDF</strong>
                                        <span style={{ fontSize: '10px', color: 'var(--b2c-slate)' }}>Active on storefront</span>
                                      </div>
                                      <a
                                        href={editingProduct.sample_pdf_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--b2c-accent)', textDecoration: 'none', marginRight: '8px' }}
                                      >
                                        View
                                      </a>
                                      <button
                                        type="button"
                                        onClick={() => handleProductField('remove_sample_pdf', true)}
                                        style={{ border: 'none', background: 'transparent', color: 'var(--b2c-error)', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }}
                                      >
                                        ✕
                                      </button>
                                    </div>
                                  )}

                                  {editingProduct?.sample_pdf_url && productForm.remove_sample_pdf && !samplePdfFile && (
                                    <div className="b2c-admin-pdf-preview-box" style={{ background: 'rgba(220, 38, 38, 0.05)', border: '1px solid rgba(220, 38, 38, 0.15)' }}>
                                      <div className="b2c-admin-pdf-icon-badge" style={{ background: 'var(--b2c-error)' }}>PDF</div>
                                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <strong style={{ fontSize: '12px', color: 'var(--b2c-error)' }}>Will be removed</strong>
                                        <span style={{ fontSize: '10px', color: 'var(--b2c-slate)' }}>Save product to apply changes</span>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => handleProductField('remove_sample_pdf', false)}
                                        style={{ border: 'none', background: 'transparent', color: 'var(--b2c-slate)', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold' }}
                                      >
                                        Undo
                                      </button>
                                    </div>
                                  )}

                                  {samplePdfFile && (
                                    <div className="b2c-admin-pdf-preview-box">
                                      <div className="b2c-admin-pdf-icon-badge">PDF</div>
                                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <strong style={{ fontSize: '12px', color: 'var(--b2c-navy)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '150px' }}>
                                          {samplePdfFile.name}
                                        </strong>
                                        <span style={{ fontSize: '10px', color: 'var(--b2c-slate)' }}>New sample PDF</span>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => setSamplePdfFile(null)}
                                        style={{ border: 'none', background: 'transparent', color: 'var(--b2c-error)', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }}
                                      >
                                        ✕
                                      </button>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            <div style={{ borderTop: '1px solid rgba(13, 20, 36, 0.06)', paddingTop: '16px' }}>
                              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={Boolean(productForm.allow_design_serial)}
                                  onChange={(event) => handleProductField('allow_design_serial', event.target.checked)}
                                  style={{ marginTop: '3px' }}
                                />
                                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                  <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--b2c-navy)' }}>
                                    Require Design Serial Number
                                  </span>
                                  <span style={{ fontSize: '11px', color: 'var(--b2c-slate)', lineHeight: '1.5' }}>
                                    Enable this when the sample PDF contains design serial numbers and the customer must enter one before ordering.
                                  </span>
                                </span>
                              </label>
                            </div>

                            <div style={{ borderTop: '1px solid rgba(13, 20, 36, 0.06)', paddingTop: '16px' }}>
                              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={Boolean(productForm.allow_artwork_upload)}
                                  onChange={(event) => handleProductField('allow_artwork_upload', event.target.checked)}
                                  style={{ marginTop: '3px' }}
                                />
                                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                  <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--b2c-navy)' }}>
                                    Allow Artwork Upload
                                  </span>
                                  <span style={{ fontSize: '11px', color: 'var(--b2c-slate)', lineHeight: '1.5' }}>
                                    Enable this to allow/require the customer to upload an artwork file (PDF, CDR, JPG, PNG, ZIP etc.) for this product.
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="b2c-admin-form-footer">
                        {!editingProductId && (
                          <button
                            type="button"
                            className="b2c-btn-secondary"
                            onClick={() => setProductFormStep(1)}
                            style={{ padding: '12px 24px' }}
                          >
                            Back
                          </button>
                        )}
                        <button
                          className="b2c-btn-primary"
                          type="submit"
                          disabled={productSubmitting}
                          style={{ padding: '12px 30px' }}
                        >
                          {productSubmitting ? 'Saving...' : editingProductId ? 'Update Product' : 'Create Product'}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </section>
              </>
            )}

            {tab === 'products' && (
            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span className="b2c-pill subtle">Catalog</span>
                  <h2>Customer products</h2>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="b2c-btn-secondary"
                    onClick={() => {
                      resetProductForm();
                      setTab('add_product');
                    }}
                  >
                    Add New Product
                  </button>
                  <div style={{ position: 'relative', minWidth: '280px' }}>
                    <input
                      type="text"
                      placeholder="Search products by name or category..."
                      value={searchB2CProduct}
                      onChange={(e) => setSearchB2CProduct(e.target.value)}
                      style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--b2c-border)', fontSize: '14px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Category Chips/Tabs Filter */}
              <div className="b2c-categories-tabs" style={{ marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid rgba(13,20,36,0.05)' }}>
                <button
                  type="button"
                  className={`b2c-filter-tab ${selectedB2CProductCategory === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedB2CProductCategory('All')}
                >
                  All Categories ({products.length})
                </button>
                {categories.map((cat) => {
                  const count = products.filter(p => p.category === cat.name).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`b2c-filter-tab ${selectedB2CProductCategory === cat.name ? 'active' : ''}`}
                      onClick={() => setSelectedB2CProductCategory(cat.name)}
                    >
                      {cat.name} ({count})
                    </button>
                  );
                })}
              </div>

              {filteredB2CProducts.length === 0 ? (
                <div className="b2c-admin-empty">No products found matching the criteria.</div>
              ) : (
                <div className="b2c-admin-catalog-grid">
                  {filteredB2CProducts.map((product) => {
                    const firstImage = product.images && product.images[0]?.file_url;
                    const tiers = getStandardProductPricingTiers(product);
                    const printableMode = (product.print_side_mode || 'front_only').replaceAll('_', ' ');

                    return (
                      <div key={product.id} className="b2c-admin-product-card">
                        <div className="b2c-admin-product-card-media">
                          <span className="b2c-admin-product-card-badge">
                            {product.category || 'Standard'}
                          </span>
                          <span className={`b2c-admin-product-card-status ${product.is_active ? 'active' : 'inactive'}`}>
                            {product.is_active ? 'Active' : 'Hidden'}
                          </span>
                          {firstImage ? (
                            <img src={firstImage} alt={product.name} />
                          ) : (
                            <div className="b2c-admin-product-card-media-placeholder">
                              No Image Uploaded
                            </div>
                          )}
                        </div>

                        <div className="b2c-admin-product-card-body">
                          <h3 className="b2c-admin-product-card-title">{product.name}</h3>
                          <p className="b2c-admin-product-card-desc">
                            {product.short_description || 'No short description provided.'}
                          </p>

                          <div className="b2c-admin-product-card-meta">
                            <span>
                              <strong>Print:</strong> {printableMode}
                            </span>
                            {product.sample_pdf_url && (
                              <span style={{ color: 'var(--b2c-accent)' }}>
                                📄 PDF Sample
                              </span>
                            )}
                          </div>

                          <div className="b2c-admin-product-card-tiers">
                            <span className="b2c-admin-product-card-tiers-title">Pricing Tiers</span>
                            {tiers.slice(0, 3).map((tier) => (
                              <div key={`${product.id}-${tier.quantity}`} className="b2c-admin-product-card-tier-item">
                                <span className="b2c-admin-product-card-tier-qty">{tier.quantity} Copies</span>
                                <span className="b2c-admin-product-card-tier-price">
                                  {money(tier.price)} ({money(getStandardUnitPrice(product, tier.quantity, 'front'))}/unit)
                                  {product.print_side_mode !== 'front_only' && tier.front_back_price !== null && (
                                    <span style={{ display: 'block', fontSize: '10.5px', color: 'var(--b2c-slate)', textAlign: 'right', fontWeight: 'normal' }}>
                                      F&B: {money(tier.front_back_price)} ({money(getStandardUnitPrice(product, tier.quantity, 'front_back'))}/unit)
                                    </span>
                                  )}
                                </span>
                              </div>
                            ))}
                            {tiers.length > 3 && (
                              <div style={{ fontSize: '11px', color: 'var(--b2c-slate)', textAlign: 'center', marginTop: '4px' }}>
                                + {tiers.length - 3} more tiers
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="b2c-admin-product-card-actions">
                          <button
                            type="button"
                            className="edit-btn"
                            onClick={() => startEditProduct(product)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="delete-btn"
                            onClick={() => handleDeleteProduct(product)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
            )}
          </>
        )}

        {tab === 'color_print' && (
          <div className="admin-products" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '110px' }}>
              
              {/* Product Adding/Editing form for Customer Color Print */}
              <form className="panel product-form" onSubmit={submitColorPrintProduct} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--line)', position: 'static' }}>
                <h2>{editingColorPrintProductId ? 'Edit Color Print Product' : 'Add Color Print Product'}</h2>
                <label>Category
                  <select
                    value={colorPrintProductForm.category}
                    onChange={(event) => handleColorPrintProductField('category', event.target.value)}
                    required
                    style={{ width: '100%', padding: '10px 14px', fontSize: '15px', border: '1.5px solid var(--line)', borderRadius: '8px', background: '#ffffff', color: 'var(--navy)' }}
                  >
                    <option value="">Select category</option>
                    {colorPrintCategories.map((category) => (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </label>
                <label>Product Name
                  <input
                    type="text"
                    value={colorPrintProductForm.name}
                    onChange={(event) => handleColorPrintProductField('name', event.target.value)}
                    required
                  />
                </label>
                <label>Base Print Copies
                  <input
                    type="number"
                    min="1"
                    value={colorPrintProductForm.print_copy}
                    onChange={(event) => handleColorPrintProductField('print_copy', event.target.value)}
                    required
                  />
                </label>
                <label>Front Only Base Amount (₹)
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={colorPrintProductForm.amount}
                    onChange={(event) => handleColorPrintProductField('amount', event.target.value)}
                    required
                  />
                </label>
                <label>Front & Back Base Amount (₹) <span style={{fontWeight:'normal', fontSize:'12px', color:'var(--muted)'}}>(Optional, leave blank if not supported)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={colorPrintProductForm.front_back_amount || ''}
                    onChange={(event) => handleColorPrintProductField('front_back_amount', event.target.value)}
                    placeholder="Leave blank if not supported"
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '10px' }} className="full">
                  <input 
                    type="checkbox" 
                    checked={colorPrintProductForm.is_active} 
                    onChange={(event) => handleColorPrintProductField('is_active', event.target.checked)} 
                    style={{ width: 'auto', cursor: 'pointer' }}
                  />
                  <span>Product is Active & visible to customers</span>
                </label>

                {/* Tier Pricing Section */}
                <div style={{ marginTop: '10px', borderTop: '1px solid var(--line)', paddingTop: '15px' }} className="full">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)' }}>Pricing Tiers (Optional)</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button type="button" className="btn ghost" style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '6px' }} onClick={() => addColorPrintTier('front')}>+ Add Front Tier</button>
                      <button type="button" className="btn ghost" style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '6px' }} onClick={() => addColorPrintTier('both')}>+ Add Front&Back Tier</button>
                    </div>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '-4px', marginBottom: '12px' }}>
                    Define custom discount percentages for print copy ranges.
                  </p>
                  {(colorPrintProductForm.pricing_tiers || []).map((tier, index) => {
                    const isBoth = tier.print_side === 'both';
                    const baseAmountForTier = isBoth ? colorPrintProductForm.front_back_amount : colorPrintProductForm.amount;
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
                            onChange={e => updateColorPrintTier(index, 'min', e.target.value === '' ? '' : Number(e.target.value))}
                            style={{ padding: '6px 8px', fontSize: '12px', borderRadius: '6px' }}
                            required
                          />
                          <input
                            type="number"
                            placeholder="Max"
                            value={tier.max || ''}
                            onChange={e => updateColorPrintTier(index, 'max', e.target.value === '' ? '' : Number(e.target.value))}
                            style={{ padding: '6px 8px', fontSize: '12px', borderRadius: '6px' }}
                          />
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="Discount %"
                            value={tier.discount || ''}
                            onChange={e => updateColorPrintTier(index, 'discount', e.target.value === '' ? '' : Number(e.target.value))}
                            style={{ padding: '6px 8px', fontSize: '12px', borderRadius: '6px' }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => removeColorPrintTier(index)}
                            style={{ padding: '6px 8px', background: 'var(--red-bg)', color: 'var(--red)', border: '1px solid #fca5a5', borderRadius: '6px', fontSize: '12px' }}
                          >
                            ×
                          </button>
                        </div>
                        {Number(baseAmountForTier) > 0 && (
                          <div style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 'bold', marginTop: '4px', paddingLeft: '4px' }}>
                            💡 {money(roundMoneyValue(Number(baseAmountForTier) * (1 - (Number(tier.discount) || 0) / 100)))} per copy
                            {Number(tier.min) > 0 && ` (Total: ${money(roundMoneyValue(Number(baseAmountForTier) * Number(tier.min) * (1 - (Number(tier.discount) || 0) / 100)))} for ${tier.min} copies`}
                            {Number(tier.max) > 0 && ` to ${money(roundMoneyValue(Number(baseAmountForTier) * Number(tier.max) * (1 - (Number(tier.discount) || 0) / 100)))} for ${tier.max} copies`}
                            {Number(tier.min) > 0 && ')'}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
                  <button className="btn primary" style={{ flex: 1, padding: '10px' }} disabled={colorPrintProductSubmitting}>
                    {colorPrintProductSubmitting ? 'Saving...' : editingColorPrintProductId ? 'Update' : 'Create Product'}
                  </button>
                  {editingColorPrintProductId && (
                    <button type="button" className="btn ghost" onClick={resetColorPrintProductForm} style={{ flex: 1, padding: '10px' }}>Cancel</button>
                  )}
                </div>
              </form>

              {/* Category management for Customer Color Print */}
              <form className="panel product-form" onSubmit={handleAddColorPrintCategory} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid var(--line)', position: 'static' }}>
                <h2>Add Category</h2>
                <label>Category Name
                  <input
                    type="text"
                    value={colorPrintCategoryName}
                    onChange={(event) => setColorPrintCategoryName(event.target.value)}
                    placeholder="e.g. Wedding Cards"
                    required
                  />
                </label>
                <button className="btn primary full" type="submit" disabled={colorPrintCategoryLoading} style={{ marginTop: '10px' }}>
                  {colorPrintCategoryLoading ? 'Adding Category...' : 'Add Category'}
                </button>

                <div style={{ marginTop: '20px', borderTop: '1.5px solid var(--line)', paddingTop: '15px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)', display: 'block', marginBottom: '8px' }}>Existing Categories</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '200px', overflowY: 'auto', paddingRight: '4px' }}>
                    {colorPrintCategories.map(c => (
                      <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--line)' }}>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>{c.name}</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            type="button"
                            onClick={() => handleEditColorPrintCategory(c)}
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
                            onClick={() => handleDeleteColorPrintCategory(c)}
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

            {/* Catalog list table for Customer Color Print */}
            <section className="panel grow" style={{ background: '#fff', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <h2 style={{ margin: 0 }}>Color Print Product Chart & Price list</h2>
                <div style={{ position: 'relative', minWidth: '280px' }}>
                  <input
                    type="text"
                    placeholder="Search color print products..."
                    value={searchColorPrintProduct}
                    onChange={(e) => setSearchColorPrintProduct(e.target.value)}
                    style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--line)', fontSize: '14px' }}
                  />
                </div>
              </div>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Product Name</th>
                    <th>Print Copies & Tiers</th>
                    <th>Base Amount (₹)</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredColorPrintProducts.map(p => (
                    <tr key={p.id}>
                      <td style={{ color: 'var(--muted)', fontWeight: '600' }}>{p.category}</td>
                      <td>
                        <strong style={{ color: 'var(--navy)' }}>{p.name}</strong>
                      </td>
                      <td>
                        <div className="b2c-admin-table-sub">Base Copies: {p.print_copy}</div>
                        {p.pricing_tiers && p.pricing_tiers.length > 0 ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--blue)' }}>Tiers defined:</span>
                            {p.pricing_tiers.map((t, idx) => (
                              <span key={idx} style={{ fontSize: '11px', color: 'var(--ink)' }}>
                                📄 {t.print_side === 'both' ? 'F&B' : 'Front'}: {t.min}{t.max ? ` to ${t.max}` : '+'} copies = <strong>{t.discount}% discount</strong>
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span style={{ fontSize: '11px', color: 'var(--muted)' }}>No discount tiers</span>
                        )}
                      </td>
                      <td>
                        <div className="b2c-admin-table-sub">Front: <strong>{money(p.amount)}</strong></div>
                        {Number(p.front_back_amount) > 0 && (
                          <div className="b2c-admin-table-sub">Front & Back: <strong>{money(p.front_back_amount)}</strong></div>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', alignItems: 'center' }}>
                          <button style={{ background: '#f0f4f8', color: 'var(--navy)' }} onClick={() => { startEditColorPrintProduct(p); setTab('color_print'); }}>Edit / Tiers</button>
                          {p.is_active ? (
                            <button style={{ background: '#fee2e2', color: '#ef4444', borderColor: '#fca5a5' }} onClick={() => handleDeleteColorPrintProduct(p)}>Delete</button>
                          ) : (
                            <span style={{ fontSize: '11px', color: 'var(--red)', background: 'var(--red-bg)', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold' }}>Deleted/Inactive</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        )}

        {tab === 'orders' && (
          <section className="b2c-admin-card">
            <div className="b2c-admin-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="b2c-pill subtle">Orders</span>
                <h2>{isStaffModule ? 'Customer assigned order queue' : 'Customer orders'}</h2>
              </div>
              <div style={{ position: 'relative', minWidth: '350px' }}>
                <input
                  type="text"
                  placeholder="Search customer orders..."
                  value={searchB2COrder}
                  onChange={(e) => setSearchB2COrder(e.target.value)}
                  style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--b2c-border)', fontSize: '14px' }}
                />
              </div>
            </div>

            {filteredB2COrders.length === 0 ? (
              <div className="b2c-admin-empty">{isStaffModule ? 'No Customer jobs available right now.' : 'No customer orders yet.'}</div>
            ) : (
              <div className="b2c-admin-table-wrap">
                <table className="b2c-admin-table">
                  <thead>
                    <tr>
                      <th style={{ width: '160px', minWidth: '160px' }}>Order</th>
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
                    {filteredB2COrders.map((order) => (
                      <tr key={order.id}>
                        <td style={{ width: '160px', minWidth: '160px' }}>
                          <strong>{order.order_number}</strong>
                          <div className="b2c-admin-table-sub">{order.contact_phone}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                            <button
                              type="button"
                              className="b2c-admin-view-btn"
                              style={{ margin: 0, padding: '8px 12px', fontSize: '12px', textAlign: 'center', display: 'block', width: '100%', boxSizing: 'border-box' }}
                              onClick={() => setSelectedOrderDetails(order)}
                            >
                              View Details
                            </button>
                            {order.status === 'completed' && (
                              <a
                                href={`/customer/orders/${order.id}/receipt`}
                                target="_blank"
                                rel="noreferrer"
                                className="b2c-admin-view-btn"
                                style={{ margin: 0, padding: '8px 12px', fontSize: '12px', textAlign: 'center', display: 'block', width: '100%', boxSizing: 'border-box', color: 'var(--b2c-primary)', textDecoration: 'none' }}
                              >
                                View Receipt
                              </a>
                            )}
                            {!isStaffModule && (
                              <button
                                type="button"
                                className="b2c-admin-view-btn"
                                style={{ margin: 0, padding: '8px 12px', fontSize: '12px', textAlign: 'center', display: 'block', width: '100%', boxSizing: 'border-box', color: 'var(--b2c-error)' }}
                                onClick={() => handleOrderStatus(order.id, 'cancelled')}
                              >
                                Cancel Order
                              </button>
                            )}
                          </div>
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
                                  {!item.b2c_product_id && (
                                    <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px', display: 'inline-block' }}>Customize Color Print</span>
                                  )}
                                </span>
                                <div className="b2c-admin-table-sub">
                                  {printSideLabels[item.print_side] || item.print_side}
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
                                      href={`/portal/api/b2c/download/${item.id}`}
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

        {tab === 'cancelled_orders' && !isStaffModule && (
          <section className="b2c-admin-card">
            <div className="b2c-admin-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="b2c-pill subtle">Cancelled Orders</span>
                <h2>Cancelled customer orders</h2>
              </div>
              <div style={{ position: 'relative', minWidth: '350px' }}>
                <input
                  type="text"
                  placeholder="Search cancelled customer orders..."
                  value={searchCancelledB2COrder}
                  onChange={(e) => setSearchCancelledB2COrder(e.target.value)}
                  style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--b2c-border)', fontSize: '14px' }}
                />
              </div>
            </div>

            {filteredCancelledB2COrders.length === 0 ? (
              <div className="b2c-admin-empty">No cancelled orders found.</div>
            ) : (
              <div className="b2c-admin-table-wrap">
                <table className="b2c-admin-table">
                  <thead>
                    <tr>
                      <th style={{ width: '160px', minWidth: '160px' }}>Order</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Artwork</th>
                      <th>Total</th>
                      <th>Order Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCancelledB2COrders.map((order) => (
                      <tr key={order.id}>
                        <td style={{ width: '160px', minWidth: '160px' }}>
                          <strong>{order.order_number}</strong>
                          <div className="b2c-admin-table-sub">{order.contact_phone}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                            <button
                              type="button"
                              className="b2c-admin-view-btn"
                              style={{ margin: 0, padding: '8px 12px', fontSize: '12px', textAlign: 'center', display: 'block', width: '100%', boxSizing: 'border-box' }}
                              onClick={() => setSelectedOrderDetails(order)}
                            >
                              View Details
                            </button>
                            <button
                              type="button"
                              className="b2c-admin-view-btn"
                              style={{ margin: 0, padding: '8px 12px', fontSize: '12px', textAlign: 'center', display: 'block', width: '100%', boxSizing: 'border-box', color: 'var(--b2c-error)' }}
                              onClick={() => handleDeleteOrder(order.id)}
                            >
                              Remove Order
                            </button>
                          </div>
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
                                  {!item.b2c_product_id && (
                                    <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px', display: 'inline-block' }}>Customize Color Print</span>
                                  )}
                                </span>
                                <div className="b2c-admin-table-sub">
                                  {printSideLabels[item.print_side] || item.print_side}
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
                                      href={`/portal/api/b2c/download/${item.id}`}
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
                        <td>{money(order.grand_total)}</td>
                        <td>
                          <span className={`b2c-status-pill ${order.status}`}>{order.status}</span>
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
            <div className="b2c-admin-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="b2c-pill subtle">Customers</span>
                <h2>Registered customers</h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', flex: '1', justifyContent: 'flex-end' }}>
                <div style={{ position: 'relative', minWidth: '280px' }}>
                  <input
                    type="text"
                    placeholder="Search customers..."
                    value={searchCustomer}
                    onChange={(e) => setSearchCustomer(e.target.value)}
                    style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--b2c-border)', fontSize: '14px' }}
                  />
                </div>
                <button type="button" className="b2c-btn-secondary b2c-btn-inline" onClick={handleExportCustomers} style={{ margin: 0 }}>
                  Export CSV
                </button>
              </div>
            </div>

            {filteredCustomers.length === 0 ? (
              <div className="b2c-admin-empty">No registered customers yet.</div>
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
                    {filteredCustomers.map((customer) => (
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
                <p>Write the customer-facing printing or privacy policy shown in the Customer portal.</p>
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
                  {selectedOrderDetails.status === 'completed' && (
                    <div style={{ marginTop: '12px' }}>
                      <a
                        href={`/customer/orders/${selectedOrderDetails.id}/receipt`}
                        target="_blank"
                        rel="noreferrer"
                        className="b2c-btn-secondary"
                        style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', width: '100%', padding: '10px 0', boxSizing: 'border-box' }}
                      >
                        View Receipt
                      </a>
                    </div>
                  )}
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
                          <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Category: {item.category_name}</span>
                          {!item.b2c_product_id && (
                            <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', display: 'inline-block' }}>Customize Color Print</span>
                          )}
                        </div>
                        <strong>{money(item.line_total)}</strong>
                      </div>
                      <div className="b2c-order-details-list compact">
                        <div><strong>Quantity:</strong> <span>{item.quantity}</span></div>
                        <div><strong>Print Side:</strong> <span>{printSideLabels[item.print_side] || item.print_side}</span></div>
                        {item.gsm && <div><strong>Paper GSM:</strong> <span>{item.gsm}{Number(item.gsm_price || 0) > 0 ? ` (+${money(item.gsm_price)} per copy)` : ''}</span></div>}
                        <div><strong>Design Serial No:</strong> <span>{item.design_serial_number || 'Not provided'}</span></div>
                        <div><strong>Finish:</strong> <span>{finishLabels[item.finish] || item.finish || 'Standard'}</span></div>
                      </div>
                      {item.custom_text && (
                        <div className="b2c-order-note-box small">
                          <strong>Customer Text / Notes</strong>
                          <p>{item.custom_text}</p>
                        </div>
                      )}
                      {item.file_path ? (
                        <a
                          href={`/portal/api/b2c/download/${item.id}`}
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
            <img src={slide.image} alt={slide.alt} className="b2c-hero-slide-image" style={{ objectPosition: slide.position || 'center' }} />
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
        <BrandBlock compact label="Customer Portal" />
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
          <a href="/products" className={`b2c-orders-btn ${currentPage === 'products' ? 'active' : ''}`}>Products</a>
          <a href="/about-us" className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
          <a href="/printing-policy" className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
          <a href="/contact-us" className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
          <a href="/portal" className="b2c-orders-btn b2c-orders-btn-wide">Dealer Login</a>
          <button type="button" className="b2c-btn-primary b2c-header-login-btn" onClick={onLoginClick}>
            Customer Login
          </button>
        </div>
      </header>

      <B2CHeaderDrawer open={menuOpen} onClose={() => setMenuOpen(false)} label="Customer Portal">
        <a href="/" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
        <a href="/products" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'products' ? 'active' : ''}`}>Products</a>
        <a href="/about-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
        <a href="/printing-policy" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
        <a href="/contact-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
        <a href="/portal" onClick={() => setMenuOpen(false)} className="b2c-orders-btn b2c-orders-btn-wide">Dealer Login</a>
        <button type="button" className="b2c-btn-primary b2c-header-login-btn" onClick={() => { setMenuOpen(false); onLoginClick(); }}>
          Customer Login
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
        <BrandBlock compact label="Customer Storefront" />
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
          <a href="/products" className={`b2c-orders-btn ${currentPage === 'products' ? 'active' : ''}`}>Products</a>
          <a href="/about-us" className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
          <a href="/my-orders" className={`b2c-orders-btn ${currentPage === 'orders' ? 'active' : ''}`}>My Orders</a>
          <a href="/printing-policy" className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
          <a href="/contact-us" className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
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

      <B2CHeaderDrawer open={menuOpen} onClose={() => setMenuOpen(false)} label="Customer Storefront">
        <a href="/" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
        <a href="/products" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'products' ? 'active' : ''}`}>Products</a>
        <a href="/about-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
        <a href="/my-orders" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'orders' ? 'active' : ''}`}>My Orders</a>
        <a href="/printing-policy" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
        <a href="/contact-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
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
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <a href="https://www.instagram.com/ags_printers/?hl=en" target="_blank" rel="noreferrer" className="b2c-social-icon-link" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551940682643" target="_blank" rel="noreferrer" className="b2c-social-icon-link" aria-label="Facebook">
              <IconFacebook />
            </a>
          </div>
        </div>

        <div className="b2c-footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/portal">Dealer Login</a>
          <a href="/">Customer Login</a>
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
          <div className="b2c-footer-contact-list">
            <div className="b2c-footer-contact-item">
              <span className="b2c-footer-contact-icon"><IconPhone /></span>
              <div className="b2c-footer-contact-text">
                <a href="tel:8200391418">Office No.: 8200391418</a>
                <a href="https://wa.me/919724503723" target="_blank" rel="noopener noreferrer">WhatsApp: 9724503723</a>
              </div>
            </div>
            <div className="b2c-footer-contact-item">
              <span className="b2c-footer-contact-icon"><IconEmail /></span>
              <div className="b2c-footer-contact-text">
                <a href="mailto:print@angelprintshop.com">Email: print@angelprintshop.com</a>
              </div>
            </div>
            <div className="b2c-footer-contact-item alignment-top">
              <span className="b2c-footer-contact-icon"><IconMapPin /></span>
              <div className="b2c-footer-contact-text address-block">
                <span>F/4, First Floor, Shyamal Complex,</span>
                <span>New CG Road, Near Kotak Bank,</span>
                <span>Nigam Nagar, Chandkheda,</span>
                <span>Ahmedabad, Gujarat – 382424</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="b2c-footer-bottom">
        <span>Angel Enterprise Customer Portal</span>
        <span>Premium printing with creative care and polished finishing.</span>
      </div>
    </footer>
  );
}

function AdminAccessRequired() {
  return (
    <div className="b2c-page b2c-page-muted">
      <header className="b2c-shell-topbar">
        <BrandBlock compact label="Customer Admin" />
        <a href="/portal" className="b2c-link-strong">Back to Dealer Admin</a>
      </header>

      <main className="b2c-center-stage">
        <section className="b2c-coming-card">
          <span className="b2c-pill">Protected Access</span>
          <h1 className="b2c-coming-title">Admin Login Required</h1>
          <p className="b2c-coming-text">
            This page is for Dealer administrators and staff who switch into the Customer module from the main portal.
          </p>
          <div className="b2c-coming-actions">
            <a href="/portal" className="b2c-btn-primary b2c-btn-inline">Open Dealer Admin Portal <IconArrowRight /></a>
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
  cart,
  setCart,
  isCartOpen,
  setIsCartOpen,
  handleRemoveFromCart,
  handleCartFileChange,
  handleSendCartInquiry,
  inquiryLoading,
}) {
  const productCards = useMemo(() => buildProductCards(products), [products]);

  // Search & Filter state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal customization state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(100);
  const [selectedPrintSide, setSelectedPrintSide] = useState('front');
  const [designSerialNumber, setDesignSerialNumber] = useState('');
  const [customText, setCustomText] = useState('');
  const [artworkFile, setArtworkFile] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('cart') === 'open') {
      setIsCartOpen(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

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

  // Calculate price details for a given product configuration
  const calculation = useMemo(() => {
    if (!selectedProduct) return { basePrice: 0, costPerCopy: 0, subtotal: 0, discountPercent: 0, discountAmount: 0, total: 0 };

    const basePrice = getStandardTierTotal(selectedProduct, quantity, selectedPrintSide);
    const costPerCopy = getStandardUnitPrice(selectedProduct, quantity, selectedPrintSide);
    const subtotal = basePrice;
    const discountPercent = 0;
    const discountAmount = 0;
    const total = subtotal;

    return {
      basePrice,
      costPerCopy,
      subtotal,
      discountPercent,
      discountAmount,
      total
    };
  }, [selectedProduct, quantity, selectedPrintSide]);

  const qtyOptions = useMemo(() => {
    return selectedProduct ? getStandardProductPricingTiers(selectedProduct, selectedPrintSide) : [];
  }, [selectedProduct, selectedPrintSide]);

  const recommendedQuantity = useMemo(() => {
    if (!qtyOptions.length) return null;
    return qtyOptions.reduce((best, tier) => {
      const bestUnitPrice = best ? getStandardUnitPrice(selectedProduct, best.quantity, selectedPrintSide) : Number.POSITIVE_INFINITY;
      const tierUnitPrice = getStandardUnitPrice(selectedProduct, tier.quantity, selectedPrintSide);
      return tierUnitPrice < bestUnitPrice ? tier : best;
    }, qtyOptions[0])?.quantity || null;
  }, [qtyOptions, selectedProduct, selectedPrintSide]);

  const getQtyPrice = (qty) => {
    return selectedProduct ? getStandardTierTotal(selectedProduct, qty, selectedPrintSide) : 0;
  };
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
    const initialPrintSide = getInitialPrintSide(product);
    setSelectedPrintSide(initialPrintSide);
    setQuantity(getDefaultStandardQuantity(product, initialPrintSide));
    setDesignSerialNumber('');
    setCustomText('');
    setArtworkFile(null);
    setActiveImageIndex(0);
  };

  useEffect(() => {
    if (!selectedProduct) return;
    const availableQuantities = getStandardProductPricingTiers(selectedProduct, selectedPrintSide).map((tier) => tier.quantity);
    if (!availableQuantities.length) return;
    if (!availableQuantities.includes(Number(quantity))) {
      setQuantity(availableQuantities[0]);
    }
  }, [selectedProduct, selectedPrintSide, quantity]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const trimmedSerialNumber = designSerialNumber.trim();

    if (selectedProduct.allow_design_serial && !trimmedSerialNumber) {
      alert('Please enter the design serial number before adding this product to the cart.');
      return;
    }



    const finalQuantity = Number(quantity);
    const finalTotal = getStandardTierTotal(selectedProduct, finalQuantity, selectedPrintSide);
    const finalUnitPrice = getStandardUnitPrice(selectedProduct, finalQuantity, selectedPrintSide);
    const cartItem = {
      cartId: `${selectedProduct.id}-${Date.now()}`,
      product: selectedProduct,
      quantity: finalQuantity,
      total: finalTotal,
      details: {
        costPerCopy: finalUnitPrice,
        discountPercent: calculation.discountPercent,
        customText,
        printSide: selectedPrintSide,
        gsm: null,
        gsmPrice: 0,
        designSerialNumber: trimmedSerialNumber,
      },
      file: artworkFile,
    };
    setCart([...cart, cartItem]);
    setSelectedProduct(null);
    setArtworkFile(null);
    setIsCartOpen(true);
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
        onOpenCart={() => { window.location.href = '/cart'; }}
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkNotificationRead={onMarkNotificationRead}
        onMarkAllNotificationsRead={onMarkAllNotificationsRead}
      />

      <HeroCarousel />

      <main className="b2c-store-main">

        <section id="catalog" className="b2c-section b2c-catalog-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Signature Collections</span>
            <h2>Premium Print Categories</h2>
            <p>Select a category below to explore our customized products and templates designed for your event or brand.</p>
          </div>

          <div className="b2c-categories-grid">
            {/* Custom Color Print Card */}
            <article className="b2c-category-card">
              <div className="b2c-category-img-wrap">
                <img src={machineImage} alt="Customization Color Print" className="b2c-category-img" />
                <div className="b2c-category-badge-wrap">
                  <span className="b2c-category-tag">Custom Print</span>
                </div>
              </div>
              <div className="b2c-category-details">
                <h3>Custom Color Print</h3>
                <p className="b2c-category-tagline">Upload your own design/artwork, customize sizes, copies, and order color prints with bulk discounts.</p>
                <div className="b2c-category-action-row">
                  <a href="/b2c/color-print" className="b2c-category-btn">
                    Order Color Prints <IconArrowRight />
                  </a>
                </div>
              </div>
            </article>

            {/* Dynamic B2C Categories */}
            {categories.map((cat) => (
              <article key={cat.id} className="b2c-category-card">
                <div className="b2c-category-img-wrap">
                  <img src={cat.image_url || getProductImage(cat.name)} alt={cat.name} className="b2c-category-img" />
                  <div className="b2c-category-badge-wrap">
                    <span className="b2c-category-tag">Category</span>
                  </div>
                </div>
                <div className="b2c-category-details">
                  <h3>{cat.name}</h3>
                  <p className="b2c-category-tagline">Explore our premium collection of custom {cat.name.toLowerCase()} options with high-quality finishes.</p>
                  <div className="b2c-category-action-row">
                    <a href={`/products?category=${encodeURIComponent(cat.name)}`} className="b2c-category-btn">
                      Shop Now <IconArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

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

                    <div className="b2c-modal-field">
                      <label>Order Quantity (Copies)</label>
                      <select
                        className="b2c-input-styled"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        style={{ fontFamily: '"Courier New", monospace', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {qtyOptions.map((tier) => (
                          <option key={tier.quantity} value={tier.quantity}>
                            {getStandardTierOptionLabel(selectedProduct, tier, selectedPrintSide, recommendedQuantity, qtyOptions)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedProduct.sample_pdf_url && (
                      <div className="b2c-modal-field">
                        <label>Sample PDF</label>
                        <a href={selectedProduct.sample_pdf_url} target="_blank" rel="noreferrer" className="b2c-card-link-btn b2c-modal-download-btn">
                          Open Sample PDF
                        </a>
                        <span className="b2c-field-hint">Check the admin-uploaded PDF before entering the design serial number.</span>
                      </div>
                    )}

                    {selectedProduct.allow_design_serial && (
                      <div className="b2c-modal-field">
                        <label>Design Serial Number</label>
                        <input
                          type="text"
                          className="b2c-input-styled"
                          value={designSerialNumber}
                          onChange={(e) => setDesignSerialNumber(e.target.value)}
                          placeholder="Enter design serial no. from the sample PDF"
                          required
                        />
                        <span className="b2c-field-hint">
                          Enter the serial number from the sample PDF before placing the order.
                          {selectedProduct.sample_pdf_url ? ' Open the sample PDF above if you need to check the design serial.' : ''}
                        </span>
                      </div>
                    )}



                    <div className="b2c-modal-field">
                      <label>Add Instruction</label>
                      <textarea
                        placeholder="Enter names, wording, calligraphy style, or special typography requests..."
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="b2c-modal-textarea"
                      ></textarea>
                    </div>

                    {/* Real-time Pricing Summary */}
                    <div className="b2c-price-summary-box">
                      <div className="b2c-summary-row">
                        <span>Base Price for {quantity} qty ({printSideLabels[selectedPrintSide] || 'Front'}):</span>
                        <span>{money(calculation.basePrice)}</span>
                      </div>
                      <div className="b2c-summary-row">
                        <span>Per Unit Price:</span>
                        <span>{money(calculation.costPerCopy)}</span>
                      </div>
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
                        </p>

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
                  <p className="b2c-drawer-disclaimer">These items will be saved directly into the Customer order queue for admin and staff follow-up.</p>
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
            <p>Review placed orders, item quantities, status, and total value from your personal Customer order page.</p>
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
                              href={`/portal/api/b2c/download/${item.id}`}
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

                  <div className="b2c-order-card-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span>Order Total</span>
                      <strong style={{ marginLeft: '8px' }}>{money(order.grand_total)}</strong>
                    </div>
                    {order.receipt_shared && (
                      <a
                        href={`/customer/orders/${order.id}/receipt`}
                        target="_blank"
                        rel="noreferrer"
                        className="b2c-btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '13px', textDecoration: 'none' }}
                      >
                        Download Receipt
                      </a>
                    )}
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
            <p>Phone number, email ID, and address should be complete before placing a Customer order.</p>
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
                {user ? 'Back to Store Home' : 'Open Customer Home'} <IconArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <StoreFooter user={user} />
    </div>
  );
}

function ContactUsPage({
  user,
  onLogout,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "f39964c2-274f-4f6a-bcbc-4770694ce78f",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          subject: "New Contact Form Submission from " + form.name
        })
      });
      const data = await response.json();
      if (response.status === 200 || data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        alert(data.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit form. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="b2c-store-shell">
      {user ? (
        <CustomerHeader
          user={user}
          onLogout={onLogout}
          currentPage="contact"
          notifications={notifications}
          unreadCount={unreadCount}
          onMarkNotificationRead={onMarkNotificationRead}
          onMarkAllNotificationsRead={onMarkAllNotificationsRead}
        />
      ) : (
        <GuestHeader onLoginClick={() => { window.location.href = '/'; }} currentPage="contact" />
      )}

      <main className="b2c-store-main">
        <section className="b2c-consultation-section">
          <div className="b2c-consultation-grid">
            <div className="b2c-consultation-info">
              <h2>Contact Us</h2>
              
              <div className="b2c-contact-info-list">
                <a 
                  href="https://maps.google.com/?q=Angel+Enterprise,+F/4,+First+Floor,+Shyamal+Complex,+New+CG+Road,+Near+Kotak+Bank,+Nigam+Nagar,+Chandkheda,+Ahmedabad,+Gujarat+–+382424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b2c-contact-card"
                >
                  <span className="b2c-contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-6-11a6 6 0 0 1 12 0c0 6.65-6 11-6 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
                  </span>
                  <div className="b2c-contact-details">
                    <strong className="b2c-contact-label">Our Address</strong>
                    <span className="b2c-contact-value">
                      F/4, First Floor, Shyamal Complex,<br />
                      New CG Road, Near Kotak Bank,<br />
                      Nigam Nagar, Chandkheda,<br />
                      Ahmedabad, Gujarat – 382424
                    </span>
                  </div>
                </a>

                <div className="b2c-contact-card">
                  <span className="b2c-contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  <div className="b2c-contact-details">
                    <strong className="b2c-contact-label">Phone Number</strong>
                    <a href="tel:8200391418" className="b2c-contact-link">8200391418</a>
                    <a href="https://wa.me/919724503723" target="_blank" rel="noopener noreferrer" className="b2c-contact-sublink">WhatsApp: 9724503723</a>
                  </div>
                </div>

                <div className="b2c-contact-card">
                  <span className="b2c-contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <div className="b2c-contact-details">
                    <strong className="b2c-contact-label">Email Address</strong>
                    <a href="mailto:print@angelprintshop.com" className="b2c-contact-link">print@angelprintshop.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="b2c-consultation-form-card">
              <form className="b2c-consultation-form" onSubmit={handleSubmit}>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="b2c-input-styled"
                    required
                  />
                </div>

                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="b2c-input-styled"
                    required
                  />
                </div>

                <div>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="b2c-input-styled"
                    required
                  />
                </div>

                <div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="b2c-textarea-styled"
                    style={{ minHeight: '120px' }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="b2c-btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>

                {success && (
                  <div style={{ color: 'var(--b2c-gold)', fontSize: '13px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <StoreFooter user={user} />

      {success && (
        <div className="b2c-modal-overlay" onClick={() => setSuccess(false)}>
          <div className="b2c-modal-card" style={{ maxWidth: '440px', width: '90%', padding: '40px 24px', textAlign: 'center', margin: 'auto' }} onClick={e => e.stopPropagation()}>
            <button className="b2c-modal-close" onClick={() => setSuccess(false)}>×</button>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(21, 128, 61, 0.1)', color: 'var(--b2c-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
              ✓
            </div>
            <h3 style={{ fontSize: '22px', color: 'var(--b2c-navy)', marginBottom: '8px', fontWeight: '800' }}>Submitted Successfully!</h3>
            <p style={{ color: 'var(--b2c-slate)', fontSize: '14px', lineHeight: '1.5', marginBottom: '24px' }}>
              Thank you for reaching out. Your request has been successfully received, and we will get back to you shortly.
            </p>
            <button className="b2c-btn-primary" onClick={() => setSuccess(false)}>
              Okay
            </button>
          </div>
        </div>
      )}
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
  categories = [],
  remember,
  setRemember,
}) {
  const openCustomerLogin = () => {
    setMode('login');
    window.requestAnimationFrame(() => {
      document.getElementById(CUSTOMER_LOGIN_SECTION_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="b2c-store-shell">
      <GuestHeader onLoginClick={openCustomerLogin} currentPage="home" />

      <HeroCarousel />

      <main className="b2c-store-main">
        <section id="catalog" className="b2c-section b2c-catalog-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Signature Collections</span>
            <h2>Premium Print Categories</h2>
            <p>Select a category below to explore our customized products and templates designed for your event or brand.</p>
          </div>

          <div className="b2c-categories-grid">
            {/* Custom Color Print Card */}
            <article className="b2c-category-card">
              <div className="b2c-category-img-wrap">
                <img src={machineImage} alt="Customization Color Print" className="b2c-category-img" />
                <div className="b2c-category-badge-wrap">
                  <span className="b2c-category-tag">Custom Print</span>
                </div>
              </div>
              <div className="b2c-category-details">
                <h3>Custom Color Print</h3>
                <p className="b2c-category-tagline">Upload your own design/artwork, customize sizes, copies, and order color prints with bulk discounts.</p>
                <div className="b2c-category-action-row">
                  <button type="button" className="b2c-category-btn" onClick={openCustomerLogin}>
                    Order Color Prints <IconArrowRight />
                  </button>
                </div>
              </div>
            </article>

            {/* Dynamic B2C Categories */}
            {categories.map((cat) => (
              <article key={cat.id || cat.name} className="b2c-category-card">
                <div className="b2c-category-img-wrap">
                  <img src={cat.image_url || getProductImage(cat.name)} alt={cat.name} className="b2c-category-img" />
                  <div className="b2c-category-badge-wrap">
                    <span className="b2c-category-tag">Category</span>
                  </div>
                </div>
                <div className="b2c-category-details">
                  <h3>{cat.name}</h3>
                  <p className="b2c-category-tagline">Explore our premium collection of custom {cat.name.toLowerCase()} options with high-quality finishes.</p>
                  <div className="b2c-category-action-row">
                    <a href={`/products?category=${encodeURIComponent(cat.name)}`} className="b2c-category-btn">
                      Shop Now <IconArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

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
              <a href="/portal" className="b2c-btn-secondary b2c-btn-inline">Dealer Login</a>
              <button type="button" className="b2c-btn-primary b2c-btn-inline" onClick={openCustomerLogin}>
                Customer Login <IconArrowRight />
              </button>
            </div>
          </div>
        </section>

        <AboutPreviewSection />

        <section id={CUSTOMER_LOGIN_SECTION_ID} className="b2c-login-panel-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Customer Access</span>
            <h2>Login or create your Customer account</h2>
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
                    : 'Register to access the Customer home page and upcoming ecommerce experience.'}
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

                {mode === 'login' && (
                  <div className="b2c-remember-me-wrap">
                    <input
                      type="checkbox"
                      id="b2c-remember"
                      className="b2c-remember-me-checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label htmlFor="b2c-remember" className="b2c-remember-me-label">
                      Remember me on this device
                    </label>
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

function CustomerProductsPage({
  user,
  onLogout,
  products,
  categories,
  api,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
  openCustomerLogin,
  cart = [],
}) {
  const queryParams = new URLSearchParams(window.location.search);
  const initialCategory = queryParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const productCards = useMemo(() => buildProductCards(products), [products]);

  const uniqueCategories = useMemo(() => {
    const list = new Set();
    productCards.forEach((p) => {
      if (p.category) list.add(p.category);
    });
    return ['All', ...Array.from(list)];
  }, [productCards]);

  const filteredProducts = useMemo(() => {
    return productCards.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tagline && product.tagline.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [productCards, selectedCategory, searchQuery]);

  return (
    <div className="b2c-store-shell">
      {user ? (
        <CustomerHeader
          user={user}
          onLogout={onLogout}
          currentPage="products"
          cartCount={cart.length}
          onOpenCart={() => { window.location.href = '/cart'; }}
          notifications={notifications}
          unreadCount={unreadCount}
          onMarkNotificationRead={onMarkNotificationRead}
          onMarkAllNotificationsRead={onMarkAllNotificationsRead}
        />
      ) : (
        <GuestHeader onLoginClick={openCustomerLogin} currentPage="products" />
      )}

      <main className="b2c-store-main">
        <section className="b2c-shop-hero" style={{ background: 'linear-gradient(135deg, #0d1424 0%, #162033 100%)', color: '#fff', padding: '40px', borderRadius: '24px', marginBottom: '36px', border: '1px solid rgba(201, 163, 94, 0.15)' }}>
          <span className="b2c-pill" style={{ background: 'var(--b2c-gold)', color: '#fff', fontWeight: 'bold' }}>Our Storefront</span>
          <h1 style={{ marginTop: '12px', fontSize: '32px', color: '#fff' }}>Configure & Order Premium Prints</h1>
          <p style={{ opacity: 0.8, fontSize: '15px', marginTop: '6px', maxWidth: '640px' }}>
            Choose from our signature collections or upload custom layouts. Get instant details and personalize every job to match your requirements.
          </p>
        </section>

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

        <div className="b2c-premium-product-grid" style={{ marginTop: '24px' }}>


          {filteredProducts.length === 0 && searchQuery ? (
            <div className="b2c-empty-catalog" style={{ gridColumn: '1 / -1' }}>
              <p>No products found matching your search query.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <a 
                key={product.id} 
                href={`/product/${product.id}`} 
                className="b2c-premium-product-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
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
                    <div className="b2c-card-actions" style={{ marginLeft: 'auto' }}>
                      <span className="b2c-card-btn">
                        Shop Now <IconArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </main>
      <StoreFooter user={user} />
    </div>
  );
}

function CustomerProductDetailsPage({
  user,
  onLogout,
  products,
  categories,
  api,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
  openCustomerLogin,
  productId,
  cart = [],
  setCart,
  handleRemoveFromCart,
  handleCartFileChange,
  handleSendCartInquiry,
  inquiryLoading,
}) {
  const [cartStep, setCartStep] = useState(1);

  const product = useMemo(() => {
    if (!products.length || !productId) return null;
    return products.find((p) => String(p.id) === String(productId)) || null;
  }, [products, productId]);

  const [quantity, setQuantity] = useState(100);
  const [selectedPrintSide, setSelectedPrintSide] = useState('front');
  const [designSerialNumber, setDesignSerialNumber] = useState('');
  const [customText, setCustomText] = useState('');
  const [artworkFile, setArtworkFile] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false);

  const printSideLabels = {
    front: 'Front Only',
    both: 'Front & Back',
    front_back: 'Front & Back',
    single: 'Front Only',
    double: 'Front & Back',
  };

  useEffect(() => {
    if (product) {
      const initialPrintSide = getInitialPrintSide(product);
      setSelectedPrintSide(initialPrintSide);
      setQuantity(getDefaultStandardQuantity(product, initialPrintSide));
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const availableQuantities = getStandardProductPricingTiers(product, selectedPrintSide).map((tier) => tier.quantity);
    if (!availableQuantities.length) return;
    if (!availableQuantities.includes(Number(quantity))) {
      setQuantity(availableQuantities[0]);
    }
  }, [product, selectedPrintSide, quantity]);

  // Sync page options to cart item if it exists (bi-directional sync 1)
  useEffect(() => {
    if (!product || !cart.length) return;
    
    // Find the cart item for this product
    const matchingIndex = cart.findIndex(item => item.product.id === product.id);
    if (matchingIndex !== -1) {
      const updatedCart = [...cart];
      const item = updatedCart[matchingIndex];
      
      const finalQuantity = Number(quantity);
      const finalTotal = getStandardTierTotal(product, finalQuantity, selectedPrintSide);
      const finalUnitPrice = getStandardUnitPrice(product, finalQuantity, selectedPrintSide);
      
      // Only set cart if there is a difference to avoid loop
      const diff = item.quantity !== finalQuantity || 
                   item.details.printSide !== selectedPrintSide || 
                   item.details.customText !== customText || 
                   item.details.designSerialNumber !== designSerialNumber.trim();
                   
      if (diff) {
        updatedCart[matchingIndex] = {
          ...item,
          quantity: finalQuantity,
          total: finalTotal,
          details: {
            ...item.details,
            costPerCopy: finalUnitPrice,
            printSide: selectedPrintSide,
            customText,
            designSerialNumber: designSerialNumber.trim()
          }
        };
        setCart(updatedCart);
      }
    }
  }, [quantity, selectedPrintSide, customText, designSerialNumber, product, cart, setCart]);

  // Sync cart item changes back to page options (bi-directional sync 2)
  useEffect(() => {
    if (!product) return;
    const cartItem = cart.find(item => item.product.id === product.id);
    if (cartItem) {
      if (Number(quantity) !== Number(cartItem.quantity)) {
        setQuantity(cartItem.quantity);
      }
      if (selectedPrintSide !== cartItem.details.printSide) {
        setSelectedPrintSide(cartItem.details.printSide);
      }
      if (customText !== cartItem.details.customText) {
        setCustomText(cartItem.details.customText || '');
      }
      if (designSerialNumber !== cartItem.details.designSerialNumber) {
        setDesignSerialNumber(cartItem.details.designSerialNumber || '');
      }
    }
  }, [cart, product]);

  if (!products.length) {
    return (
      <div className="b2c-page b2c-page-muted b2c-loader-page">
        <div className="b2c-loader-card">
          <img src={logo} alt="Angel logo" className="b2c-loader-logo" />
          <div className="b2c-loader-text">Loading Product Details...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="b2c-page b2c-page-muted b2c-loader-page">
        <div className="b2c-loader-card">
          <h2 style={{ color: 'var(--b2c-navy)', marginBottom: '12px' }}>Product Not Found</h2>
          <p style={{ color: 'var(--b2c-slate)' }}>The requested product does not exist or has been removed.</p>
          <a href="/products" className="b2c-btn-primary b2c-btn-inline" style={{ marginTop: '16px' }}>Back to Shop</a>
        </div>
      </div>
    );
  }

  const qtyOptions = getStandardProductPricingTiers(product, selectedPrintSide);
  const recommendedQuantity = qtyOptions.reduce((best, tier) => {
    const bestUnitPrice = best ? getStandardUnitPrice(product, best.quantity, selectedPrintSide) : Number.POSITIVE_INFINITY;
    const tierUnitPrice = getStandardUnitPrice(product, tier.quantity, selectedPrintSide);
    return tierUnitPrice < bestUnitPrice ? tier : best;
  }, qtyOptions[0])?.quantity || null;

  const getQtyPrice = (qty) => {
    return getStandardTierTotal(product, qty, selectedPrintSide);
  };

  const selectedProductImages = (() => {
    if (Array.isArray(product.image_urls) && product.image_urls.length) {
      return product.image_urls;
    }
    return [getProductImage(product)];
  })();

  const calculation = (() => {
    const basePrice = getStandardTierTotal(product, quantity, selectedPrintSide);
    const costPerCopy = getStandardUnitPrice(product, quantity, selectedPrintSide);
    const subtotal = basePrice;
    const total = subtotal;

    return {
      basePrice,
      costPerCopy,
      subtotal,
      total
    };
  })();

  const handleAddToCart = () => {
    if (!user) {
      if (openCustomerLogin) {
        openCustomerLogin();
      } else {
        redirectToCustomerLogin();
      }
      return;
    }

    const trimmedSerialNumber = designSerialNumber.trim();
    if (product.allow_design_serial && !trimmedSerialNumber) {
      alert('Please enter the design serial number before adding this product to the cart.');
      return;
    }



    setAddingToCart(true);
    const finalQuantity = Number(quantity);
    const baseUnitPrice = getStandardUnitPrice(product, finalQuantity, selectedPrintSide);
    const totalPrice = getStandardTierTotal(product, finalQuantity, selectedPrintSide);

    const exists = cart.some(item => item.product.id === product.id);
    if (exists) {
      alert("This product is already in your cart. You can configure its options directly on this page or inside the cart sidebar.");
      setAddingToCart(false);
      return;
    }

    const cartItem = {
      cartId: `${product.id}-${Date.now()}`,
      product: product,
      quantity: finalQuantity,
      total: totalPrice,
      details: {
        costPerCopy: baseUnitPrice,
        discountPercent: 0,
        customText,
        printSide: selectedPrintSide,
        gsm: null,
        gsmPrice: 0,
        designSerialNumber: trimmedSerialNumber,
      },
      file: artworkFile,
    };
    
    setCart([...cart, cartItem]);
    setAddingToCart(false);
  };

  return (
    <div className="b2c-store-shell">
      {user ? (
        <CustomerHeader
          user={user}
          onLogout={onLogout}
          currentPage="products"
          cartCount={cart.length}
          onOpenCart={() => { window.location.href = '/cart'; }}
          notifications={notifications}
          unreadCount={unreadCount}
          onMarkNotificationRead={onMarkNotificationRead}
          onMarkAllNotificationsRead={onMarkAllNotificationsRead}
        />
      ) : (
        <GuestHeader onLoginClick={openCustomerLogin} currentPage="products" />
      )}

      <main className="b2c-store-main b2c-detail-main shop-layout" style={{ maxWidth: '1650px', width: '100%', margin: '0 auto', padding: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1, minWidth: 0 }}>
          <nav className="b2c-breadcrumbs">
            <a href="/">Home</a>
            <span className="b2c-breadcrumb-sep">/</span>
            <a href="/products">Products</a>
            <span className="b2c-breadcrumb-sep">/</span>
            <a href={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</a>
            <span className="b2c-breadcrumb-sep">/</span>
            <span className="b2c-breadcrumb-active">{product.name}</span>
          </nav>

          <div className="b2c-detail-container">
            <div className="b2c-modal-preview-panel">
              <div className="b2c-modal-preview-stage" style={{ position: 'relative' }}>
                <img
                  src={selectedProductImages[activeImageIndex]}
                  alt={`${product.name} preview ${activeImageIndex + 1}`}
                  className="b2c-modal-preview-img"
                />
                <button 
                  type="button" 
                  className="b2c-fav-button" 
                  style={{ display: 'none' }}
                  onClick={() => alert('Added to favorites!')}
                >
                  ❤️
                </button>
              </div>
              
              {selectedProductImages.length > 1 && (
                <div className="b2c-modal-thumbs" style={{ marginTop: '16px', justifyContent: 'center' }}>
                  {selectedProductImages.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      className={`b2c-modal-thumb ${index === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              <div className="b2c-detail-policy-card" style={{ marginTop: '24px', background: 'rgba(201, 163, 94, 0.06)', border: '1px solid rgba(201, 163, 94, 0.15)', borderRadius: '16px', padding: '20px' }}>
                <h4 style={{ color: 'var(--b2c-navy)', margin: '0 0 10px', fontSize: '15px', fontWeight: 'bold' }}>⭐ Premium Print Quality Guarantee</h4>
                <p style={{ color: 'var(--b2c-slate)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  All signature collection prints are output on high-fidelity Konica production machines. We inspect color registry, paper weight, and foil embellishment boundaries before courier packing.
                </p>
              </div>
            </div>

            <div className="b2c-modal-form-panel">
              <div className="b2c-modal-customizer-form">
                <span className="b2c-pill" style={{ background: 'var(--b2c-gold-soft)', color: '#946f31', border: 'none', marginBottom: '8px' }}>
                  {product.category}
                </span>
                <h2 style={{ fontSize: '28px', color: 'var(--b2c-navy)', margin: '4px 0 12px' }}>{product.name}</h2>
                <p style={{ color: 'var(--b2c-slate)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px' }}>
                  {product.description || product.tagline || 'Premium detailing with carefully balanced texture and color.'}
                </p>

                <div className="b2c-card-stars" style={{ marginBottom: '24px' }}>
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  <span className="b2c-card-rating-text" style={{ color: 'var(--b2c-navy)', fontWeight: 'bold', marginLeft: '6px' }}>5.0 (24 reviews)</span>
                </div>

                <div className="b2c-modal-field">
                  <label>Print Side</label>
                  <select
                    className="b2c-input-styled"
                    value={selectedPrintSide}
                    onChange={(e) => setSelectedPrintSide(e.target.value)}
                  >
                    {getPrintSideOptions(product).map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="b2c-modal-field">
                  <label>Order Quantity (Copies)</label>
                  <select
                    className="b2c-input-styled"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    style={{ fontFamily: '"Courier New", monospace', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {qtyOptions.map((tier) => (
                      <option key={tier.quantity} value={tier.quantity}>
                        {getStandardTierOptionLabel(product, tier, selectedPrintSide, recommendedQuantity, qtyOptions)}
                      </option>
                    ))}
                  </select>
                </div>

                {product.sample_pdf_url && (
                  <div className="b2c-modal-field">
                    <label>Sample PDF</label>
                    <a href={product.sample_pdf_url} target="_blank" rel="noreferrer" className="b2c-card-link-btn b2c-modal-download-btn">
                      Open Sample PDF
                    </a>
                    <span className="b2c-field-hint">Check the admin-uploaded PDF before entering the design serial number.</span>
                  </div>
                )}

                {product.allow_design_serial && (
                  <div className="b2c-modal-field">
                    <label>Design Serial Number</label>
                    <input
                      type="text"
                      className="b2c-input-styled"
                      value={designSerialNumber}
                      onChange={(e) => setDesignSerialNumber(e.target.value)}
                      placeholder="Enter design serial no. from the sample PDF"
                      required
                    />
                    <span className="b2c-field-hint">
                      Enter the serial number from the sample PDF before ordering.
                      {product.sample_pdf_url ? (
                        <>
                          {' '}Check the{' '}
                          <a href={product.sample_pdf_url} target="_blank" rel="noreferrer" style={{ color: 'var(--b2c-accent)', fontWeight: 'bold' }}>
                            Sample PDF
                          </a>.
                        </>
                      ) : null}
                    </span>
                  </div>
                )}



                <div className="b2c-modal-field">
                  <label>Add Instruction</label>
                  <textarea
                    placeholder="Enter names, wording, calligraphy style, or special typography requests..."
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="b2c-modal-textarea"
                    style={{ height: '100px' }}
                  ></textarea>
                </div>


                <div className="b2c-price-summary-box" style={{ background: '#fff', border: '1px solid rgba(201,163,94,0.2)', padding: '20px', borderRadius: '16px', marginTop: '24px' }}>
                  <div className="b2c-summary-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                    <span>Base Price for {quantity} qty ({printSideLabels[selectedPrintSide] || 'Front'}):</span>
                    <span>{money(calculation.basePrice)}</span>
                  </div>
                  <div className="b2c-summary-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                    <span>Per Unit Price:</span>
                    <span>{money(calculation.costPerCopy)}</span>
                  </div>
                  <hr style={{ border: 'none', borderTop: '1px solid rgba(13,20,36,0.06)', margin: '12px 0' }} />
                  <div className="b2c-summary-row total" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px' }}>
                    <strong>Estimated Price:</strong>
                    <strong style={{ color: 'var(--b2c-gold)', fontSize: '20px' }}>{money(calculation.total)}</strong>
                  </div>
                </div>

                <div className="b2c-modal-actions" style={{ marginTop: '28px', display: 'flex', gap: '16px' }}>
                  <button
                    type="button"
                    className="b2c-btn-primary"
                    onClick={handleAddToCart}
                    disabled={addingToCart}
                    style={{ flex: 1, padding: '16px' }}
                  >
                    {addingToCart ? 'Adding...' : cart.some(item => item.product.id === product.id) ? 'Added to Cart ✓' : user ? 'Add to Cart' : 'Login to Personalize & Order'}
                  </button>
                  <a
                    href="/products"
                    className="b2c-btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '14px 20px', textDecoration: 'none' }}
                  >
                    Back to Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Cart panel */}
        <aside className="cart panel" style={{ position: 'sticky', top: '100px', width: '380px', flexShrink: 0 }}>
          {cart.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', padding: '14px 24px', background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
              <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: 'var(--b2c-gold)' }} title="Cart Selection"></div>
              <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: cartStep === 2 ? 'var(--b2c-gold)' : '#cbd5e1' }} title="Uploads & Checkout"></div>
            </div>
          )}
          
          {cartStep === 1 ? (
            <>
              <div className="cart-head" style={{ padding: '20px 24px 15px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: 'var(--b2c-navy)' }}>Shopping Cart</h2>
                <span style={{ fontSize: '12px', background: 'var(--b2c-gold-soft)', color: 'var(--b2c-gold)', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold' }}>{cart.length} items</span>
              </div>
              
              {!cart.length ? (
                <div className="empty" style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px 20px', fontSize: '14px' }}>
                  Your cart is empty. Add products to configure and order.
                </div>
              ) : (
                <div style={{ padding: '0 24px 24px' }}>
                  <div style={{ maxHeight: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', margin: '15px 0' }}>
                    {cart.map(item => (
                      <div className="cart-item" key={item.cartId} style={{ display: 'flex', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9', position: 'relative' }}>
                        <button 
                          className="remove" 
                          onClick={() => handleRemoveFromCart(item.cartId)} 
                          style={{ border: 'none', background: 'none', fontSize: '18px', color: '#cbd5e1', cursor: 'pointer', position: 'absolute', right: 0, top: 0 }}
                          onMouseEnter={e => e.target.style.color = '#ef4444'}
                          onMouseLeave={e => e.target.style.color = '#cbd5e1'}
                        >
                          ×
                        </button>
                        <div style={{ flex: 1 }}>
                          <strong style={{ fontSize: '14px', color: 'var(--b2c-navy)', display: 'block', paddingRight: '20px' }}>{item.product.name}</strong>
                          <small style={{ color: 'var(--muted)', fontSize: '11px', display: 'block', marginTop: '2px' }}>
                            Qty: {item.quantity} · {printSideLabels[item.details.printSide] || item.details.printSide}
                            {item.details.designSerialNumber && ` · Serial: ${item.details.designSerialNumber}`}
                          </small>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                            <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
                              Fixed Qty: <strong style={{ color: 'var(--b2c-navy)' }}>{item.quantity}</strong>
                            </div>
                            <strong style={{ color: 'var(--b2c-gold)', fontSize: '14px' }}>{money(item.total)}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderTop: '1px solid var(--line)', marginBottom: '15px' }}>
                    <span style={{ fontWeight: '500', color: 'var(--b2c-navy)' }}>Subtotal</span>
                    <strong style={{ fontSize: '18px', color: 'var(--b2c-gold)' }}>{money(cart.reduce((sum, item) => sum + item.total, 0))}</strong>
                  </div>
                  
                  <button className="btn primary wide" onClick={() => { window.location.href = '/cart'; }} style={{ width: '100%', padding: '12px', fontSize: '14px', borderRadius: '8px', background: 'var(--b2c-gold)', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                    Proceed to Checkout →
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="cart-head" style={{ padding: '20px 24px 15px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0, color: 'var(--b2c-navy)' }}>Upload Artwork</h2>
                <button className="btn ghost" onClick={() => setCartStep(1)} style={{ padding: '4px 8px', fontSize: '12px', border: '1px solid var(--line)', borderRadius: '6px', background: '#fff', cursor: 'pointer' }}>
                  ← Back
                </button>
              </div>
              
              <div style={{ padding: '24px' }}>
                <div style={{ maxHeight: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px' }}>
                  {cart.map((item) => (
                    <div key={item.cartId} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--b2c-navy)', display: 'block', marginBottom: '2px' }}>{item.product.name}</strong>
                      <small style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>
                        {item.quantity} copies · {printSideLabels[item.details.printSide] || item.details.printSide}
                      </small>
                      {item.product.allow_artwork_upload && (
                        <div style={{ marginTop: '8px' }}>
                          <input
                            type="file"
                            accept=".pdf,.cdr,.zip,.png,.jpg,.jpeg"
                            onChange={(e) => handleCartFileChange(item.cartId, e.target.files[0] || null)}
                            style={{ fontSize: '11px', maxWidth: '100%' }}
                          />
                          {item.file ? (
                            <span style={{ fontSize: '11px', color: 'green', display: 'block', marginTop: '2px' }}>
                              ✓ {item.file.name}
                            </span>
                          ) : (
                            <span style={{ fontSize: '11px', color: 'var(--b2c-error)', display: 'block', marginTop: '2px', fontWeight: 'bold' }}>
                              ⚠ Artwork required
                            </span>
                          )}
                        </div>
                      )}

                    </div>
                  ))}
                </div>
                
                <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderTop: '1px solid var(--line)', marginBottom: '15px' }}>
                  <span style={{ fontWeight: '500', color: 'var(--b2c-navy)' }}>Total</span>
                  <strong style={{ fontSize: '18px', color: 'var(--b2c-gold)' }}>{money(cart.reduce((sum, item) => sum + item.total, 0))}</strong>
                </div>
                
                <button 
                  className="btn primary wide" 
                  onClick={handleSendCartInquiry} 
                  disabled={inquiryLoading} 
                  style={{ width: '100%', padding: '12px', fontSize: '14px', borderRadius: '8px', background: 'var(--b2c-gold)', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  {inquiryLoading ? 'Submitting Order...' : 'Place Order'}
                </button>
              </div>
            </>
          )}
        </aside>
      </main>
      <StoreFooter user={user} />
    </div>
  );
}

function CustomerCartPage({
  user,
  onLogout,
  api,
  cart = [],
  setCart,
  handleRemoveFromCart,
  handleCartFileChange,
  handleSendCartInquiry,
  inquiryLoading,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
  openCustomerLogin,
}) {
  const [customerNote, setCustomerNote] = useState('');

  const printSideLabels = {
    front: 'Front Only',
    both: 'Front & Back',
    front_back: 'Front & Back',
    single: 'Front Only',
    double: 'Front & Back',
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="b2c-store-shell">
      {user ? (
        <CustomerHeader
          user={user}
          onLogout={onLogout}
          currentPage="cart"
          cartCount={cart.length}
          notifications={notifications}
          unreadCount={unreadCount}
          onMarkNotificationRead={onMarkNotificationRead}
          onMarkAllNotificationsRead={onMarkAllNotificationsRead}
        />
      ) : (
        <GuestHeader onLoginClick={openCustomerLogin} currentPage="cart" />
      )}

      <main className="b2c-store-main" style={{ maxWidth: '1650px', width: '100%', margin: '0 auto', padding: '30px' }}>
        <section className="b2c-shop-hero" style={{ background: 'linear-gradient(135deg, #0d1424 0%, #162033 100%)', color: '#fff', padding: '40px', borderRadius: '24px', marginBottom: '30px', border: '1px solid rgba(201, 163, 94, 0.15)' }}>
          <div className="b2c-orders-page-copy">
            <span className="b2c-pill" style={{ background: 'var(--b2c-gold)', color: '#fff', fontWeight: 'bold' }}>Shopping Cart</span>
            <h1 style={{ color: '#fff', fontSize: '32px', marginTop: '12px' }}>Review your personalized selections</h1>
            <p style={{ opacity: 0.8, fontSize: '14px', marginTop: '5px' }}>Write special instructions and complete your purchase order.</p>
          </div>
        </section>

        {!user ? (
          <div className="panel" style={{ padding: '40px', textAlign: 'center', borderRadius: '16px' }}>
            <h2 style={{ color: 'var(--b2c-navy)', marginBottom: '12px' }}>Please login to view your cart</h2>
            <p style={{ color: 'var(--b2c-slate)', marginBottom: '20px' }}>You need to be logged in to view items in your cart and complete your purchase.</p>
            <button className="btn primary" onClick={openCustomerLogin || redirectToCustomerLogin}>Login Now</button>
          </div>
        ) : !cart.length ? (
          <div className="panel" style={{ padding: '60px 40px', textAlign: 'center', borderRadius: '16px' }}>
            <h2 style={{ color: 'var(--b2c-navy)', marginBottom: '12px' }}>Your cart is empty</h2>
            <p style={{ color: 'var(--b2c-slate)', marginBottom: '20px' }}>Browse our product catalog to personalize items and add them to your cart.</p>
            <a href="/products" className="btn primary">Browse Products</a>
          </div>
        ) : (
          <div className="b2c-cart-layout">
            {/* Left Column: Cart Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cart.map((item) => (
                <div key={item.cartId} className="b2c-cart-item-card">
                  <button
                    onClick={() => handleRemoveFromCart(item.cartId)}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '20px',
                      border: 'none',
                      background: 'none',
                      fontSize: '24px',
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ef4444'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; }}
                    title="Remove item"
                  >
                    ×
                  </button>

                  <div className="b2c-cart-item-flex">
                    <img
                      src={getProductImage(item.product)}
                      alt={item.product.name}
                      className="b2c-cart-item-image"
                    />
                    <div className="b2c-cart-item-content">
                      <span className="b2c-pill" style={{ background: 'var(--b2c-gold-soft)', color: '#946f31', border: 'none', fontSize: '11px', padding: '3px 8px', marginBottom: '6px', display: 'inline-block' }}>
                        {item.product.category}
                      </span>
                      <h3 style={{ margin: '0 0 8px', fontSize: '18px', color: 'var(--b2c-navy)' }}>{item.product.name}</h3>
                      
                      <div className="b2c-cart-item-specs">
                        <div><strong>Print Side:</strong> {printSideLabels[item.details.printSide] || item.details.printSide}</div>
                        {item.details.designSerialNumber && (
                          <div><strong>Design Serial:</strong> {item.details.designSerialNumber}</div>
                        )}
                        {item.details.customText && (
                          <div style={{ gridColumn: '1 / -1' }}><strong>Instructions:</strong> "{item.details.customText}"</div>
                        )}
                      </div>

                      <div className="b2c-cart-item-actions-row">
                        <div className="b2c-cart-quantity-selector">
                          <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--b2c-navy)' }}>Fixed Quantity:</span>
                          <span style={{ fontSize: '14px', color: 'var(--b2c-slate)' }}>{item.quantity} copies</span>
                          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                            ({money(item.details.costPerCopy)} / copy)
                          </span>
                        </div>

                        <div>
                          <strong style={{ fontSize: '20px', color: 'var(--b2c-gold)' }}>{money(item.total)}</strong>
                        </div>
                      </div>

                      {item.product.allow_artwork_upload && (
                        <div className="b2c-cart-item-upload" style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px dashed rgba(13,20,36,0.06)' }}>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--b2c-navy)', marginBottom: '6px' }}>
                            Artwork File:
                          </label>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                              type="file"
                              accept=".pdf,.cdr,.zip,.png,.jpg,.jpeg"
                              onChange={(e) => handleCartFileChange(item.cartId, e.target.files[0] || null)}
                              style={{ fontSize: '12px' }}
                            />
                            {item.file ? (
                              <span style={{ fontSize: '12px', color: 'green', fontWeight: 'bold' }}>✓ {item.file.name}</span>
                            ) : (
                              <span style={{ fontSize: '12px', color: 'var(--b2c-error)', fontWeight: 'bold' }}>⚠ Upload required</span>
                            )}
                          </div>
                        </div>
                      )}


                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary */}
            <aside className="panel cart" style={{ padding: '24px', borderRadius: '16px', position: 'sticky', top: '100px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 20px', color: 'var(--b2c-navy)', borderBottom: '1px solid var(--line)', paddingBottom: '15px' }}>Order Summary</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px' }}>
                  <span style={{ color: 'var(--b2c-slate)' }}>Subtotal ({cart.length} items)</span>
                  <strong style={{ color: 'var(--b2c-navy)' }}>{money(cartTotal)}</strong>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '10px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--b2c-navy)' }}>Total amount</span>
                  <strong style={{ color: 'var(--b2c-gold)', fontSize: '22px' }}>{money(cartTotal)}</strong>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px', color: 'var(--b2c-navy)' }}>Special Instructions / Note:</label>
                <textarea
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="Enter courier, cutting, or special packaging requests..."
                  style={{ width: '100%', height: '100px', padding: '10px', fontSize: '13px', borderRadius: '8px', border: '1px solid var(--line)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button
                className="btn primary wide"
                style={{ width: '100%', padding: '14px', fontSize: '15px', borderRadius: '8px', background: 'var(--b2c-gold)', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(201, 163, 94, 0.2)' }}
                onClick={async () => {
                  await handleSendCartInquiry(customerNote);
                }}
                disabled={inquiryLoading}
              >
                {inquiryLoading ? 'Submitting Order...' : 'Place Order'}
              </button>
            </aside>
          </div>
        )}
      </main>

      <StoreFooter user={user} />
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
  const isContactPage = pathname.startsWith('/contact-us');
  const isColorPrintShop = pathname.startsWith('/b2c/color-print');
  const isProductsPage = pathname.startsWith('/products');
  const isCartPage = pathname.startsWith('/cart');
  const productMatch = pathname.match(/^\/product\/([^/]+)/);
  const isProductDetailsPage = !!productMatch;
  const urlProductId = productMatch ? productMatch[1] : null;
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [inquiryLoading, setInquiryLoading] = useState(false);
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

  // Initialize cart when user becomes available
  useEffect(() => {
    if (user) {
      try {
        const saved = localStorage.getItem(`b2c_cart_${user.id}`);
        if (saved) {
          setCart(JSON.parse(saved).map((item) => ({ ...item, file: null })));
        } else {
          setCart([]);
        }
      } catch {
        setCart([]);
      }
    } else {
      setCart([]);
    }
  }, [user?.id]);

  // Sync B2C standard product cart to local storage when cart state updates
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `b2c_cart_${user.id}`,
        JSON.stringify(cart.map(({ file, ...item }) => item))
      );
    }
  }, [cart, user?.id]);

  useEffect(() => {
    if (loadingUser || user) return;

    const params = new URLSearchParams(window.location.search);
    const shouldOpenLogin =
      window.location.hash === `#${CUSTOMER_LOGIN_SECTION_ID}` ||
      params.get(CUSTOMER_LOGIN_QUERY_PARAM) === '1';

    if (!shouldOpenLogin) return;

    setMode('login');
    window.requestAnimationFrame(() => {
      document.getElementById(CUSTOMER_LOGIN_SECTION_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [loadingUser, user]);

  const handleRemoveFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
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

  const handleSendCartInquiry = async (customerNote = '') => {
    if (!user.phone || !user.email || !user.address) {
      alert('Please complete your profile with phone, email, and address before placing an order.');
      window.location.href = '/profile';
      return;
    }

    const missingRequiredSerial = cart.find((item) => item.product.allow_design_serial && !item.details.designSerialNumber?.trim());
    if (missingRequiredSerial) {
      alert(`Please enter the design serial number for ${missingRequiredSerial.product.name} before placing the order.`);
      return;
    }

    const missingArtwork = cart.find((item) => item.product.allow_artwork_upload && !item.file);
    if (missingArtwork) {
      alert(`Please upload the artwork file for ${missingArtwork.product.name} before placing the order.`);
      return;
    }

    setInquiryLoading(true);
    try {
      const formData = new FormData();
      formData.append('customer_note', customerNote);
      formData.append('items_json', JSON.stringify(
        cart.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
          print_side: item.details.printSide,
          gsm: null,
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
      window.location.href = '/my-orders';
    } catch (error) {
      alert(error.message);
    } finally {
      setInquiryLoading(false);
    }
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
    if (isAdminModule || isOrdersPage || isProfilePage || isPolicyPage || isAboutPage || isContactPage) return;

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

  const [b2cFlash, setB2cFlash] = useState(null);
  const [showB2cFlash, setShowB2cFlash] = useState(false);

  useEffect(() => {
    if (user && !isAdminModule) {
      const dismissed = sessionStorage.getItem('b2c_flash_dismissed');
      if (!dismissed) {
        api('/api/b2c/flash-message')
          .then(data => {
            if (data && data.active) {
              setB2cFlash(data);
              setShowB2cFlash(true);
            }
          })
          .catch(err => console.error(err));
      }
    }
  }, [user?.id, isAdminModule]);

  useEffect(() => {
    loadNotifications();
  }, [user?.id, user?.role, isAdminModule]);

  useEffect(() => {
    if (user) {
      window.scrollTo(0, 0);
    }
  }, [user?.id]);

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
            password: form.password,
            remember
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
    sessionStorage.removeItem('b2c_flash_dismissed');
    sessionStorage.removeItem('b2b_flash_dismissed');
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
    let pageContent;
    if (isAboutPage) {
      pageContent = (
        <AboutUsPage
          user={user}
          onLogout={handleLogout}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    } else if (isContactPage) {
      pageContent = (
        <ContactUsPage
          user={user}
          onLogout={handleLogout}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    } else if (isPolicyPage) {
      pageContent = (
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
    } else if (isOrdersPage) {
      pageContent = (
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
    } else if (isProfilePage) {
      pageContent = (
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
    } else if (isColorPrintShop) {
      pageContent = (
        <CustomerColorPrintShopPage
          user={user}
          onLogout={handleLogout}
          api={api}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
        />
      );
    } else if (isCartPage) {
      pageContent = (
        <CustomerCartPage
          user={user}
          onLogout={handleLogout}
          api={api}
          cart={cart}
          setCart={setCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCartFileChange={handleCartFileChange}
          handleSendCartInquiry={handleSendCartInquiry}
          inquiryLoading={inquiryLoading}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
          openCustomerLogin={() => setMode('login')}
        />
      );
    } else if (isProductsPage) {
      pageContent = (
        <CustomerProductsPage
          user={user}
          onLogout={handleLogout}
          products={products}
          categories={categories}
          api={api}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
          cart={cart}
        />
      );
    } else if (isProductDetailsPage) {
      pageContent = (
        <CustomerProductDetailsPage
          user={user}
          onLogout={handleLogout}
          products={products}
          categories={categories}
          api={api}
          notifications={notifications}
          unreadCount={unreadNotifications}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
          productId={urlProductId}
          cart={cart}
          setCart={setCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCartFileChange={handleCartFileChange}
          handleSendCartInquiry={handleSendCartInquiry}
          inquiryLoading={inquiryLoading}
        />
      );
    } else {
      pageContent = (
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
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCartFileChange={handleCartFileChange}
          handleSendCartInquiry={handleSendCartInquiry}
          inquiryLoading={inquiryLoading}
        />
      );
    }

    return (
      <>
        {pageContent}
        {showB2cFlash && b2cFlash && (
          <div className="b2c-flash-overlay">
            <div className="b2c-flash-card">
              <button
                type="button"
                className="b2c-flash-close"
                onClick={() => {
                  sessionStorage.setItem('b2c_flash_dismissed', '1');
                  setShowB2cFlash(false);
                }}
                title="Close Notice"
              >
                ×
              </button>

              <div className={`b2c-flash-grid ${b2cFlash.image ? 'has-image' : ''}`}>
                {b2cFlash.image && (
                  <div className="b2c-flash-image-wrapper">
                    <img
                      src={b2cFlash.image}
                      alt="Announcement Banner"
                      className="b2c-flash-image"
                    />
                  </div>
                )}
                
                <div className="b2c-flash-content">
                  <h2 className="b2c-flash-title">Notice</h2>
                  
                  {b2cFlash.text && (
                    <ul className="b2c-flash-list">
                      {b2cFlash.text.split('\n').map(l => l.trim()).filter(l => l.length > 0).map((line, idx) => {
                        const cleanLine = line.replace(/^[•\-\*\✦\s\d+\.\)\-\s]+/, '').trim();
                        return (
                          <li key={idx} className="b2c-flash-item">
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

  if (isCartPage) {
    return (
      <CustomerCartPage
        user={null}
        onLogout={handleLogout}
        api={api}
        cart={cart}
        setCart={setCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCartFileChange={handleCartFileChange}
        handleSendCartInquiry={handleSendCartInquiry}
        inquiryLoading={inquiryLoading}
        notifications={notifications}
        unreadCount={unreadNotifications}
        onMarkNotificationRead={markNotificationRead}
        onMarkAllNotificationsRead={markAllNotificationsRead}
        openCustomerLogin={redirectToCustomerLogin}
      />
    );
  }

  if (isProductsPage) {
    return (
      <CustomerProductsPage
        user={null}
        onLogout={handleLogout}
        products={products}
        categories={categories}
        api={api}
        notifications={notifications}
        unreadCount={unreadNotifications}
        onMarkNotificationRead={markNotificationRead}
        onMarkAllNotificationsRead={markAllNotificationsRead}
        openCustomerLogin={redirectToCustomerLogin}
        cart={cart}
      />
    );
  }

  if (isProductDetailsPage) {
    return (
      <CustomerProductDetailsPage
        user={null}
        onLogout={handleLogout}
        products={products}
        categories={categories}
        api={api}
        notifications={notifications}
        unreadCount={unreadNotifications}
        onMarkNotificationRead={markNotificationRead}
        onMarkAllNotificationsRead={markAllNotificationsRead}
        openCustomerLogin={redirectToCustomerLogin}
        productId={urlProductId}
        cart={cart}
        setCart={setCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCartFileChange={handleCartFileChange}
        handleSendCartInquiry={handleSendCartInquiry}
        inquiryLoading={inquiryLoading}
      />
    );
  }

  if (isAboutPage) {
    return <AboutUsPage user={null} onLogout={null} />;
  }

  if (isContactPage) {
    return <ContactUsPage user={null} onLogout={null} />;
  }

  if (isPolicyPage) {
    return <CustomerPolicyPage user={null} onLogout={null} policy={policy} policyLoading={policyLoading} />;
  }

  if (isColorPrintShop && !user) {
    return (
      <GuestExperience
        mode="login"
        setMode={setMode}
        error="Authentication required. Please login as a Customer to place custom color print orders."
        notice=""
        loading={loading}
        form={form}
        updateForm={updateForm}
        handleSubmit={handleSubmit}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        previewProducts={previewProducts}
        categories={categories}
        remember={remember}
        setRemember={setRemember}
      />
    );
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
      categories={categories}
      remember={remember}
      setRemember={setRemember}
    />
  );
}

const getB2CTierPrice = (product, copies, printSide = 'front') => {
  const count = Number(copies) || product.print_copy;
  const productPrice = printSide === 'both' && product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0 ? product.front_back_amount : product.amount;
  const baseCost = Number(productPrice) * count;
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
  return roundMoneyValue(baseCost * (1 - discount / 100));
};

const normalizeColorPrintSide = (printSide = 'front') => (
  printSide === 'both' || printSide === 'front_back' ? 'both' : 'front'
);

const getColorPrintCartId = (productId, printSide = 'front') => (
  `color-print-${productId}-${normalizeColorPrintSide(printSide)}`
);

function CustomerColorPrintShopPage({
  user,
  onLogout,
  api,
  notifications = [],
  unreadCount = 0,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(`b2c_color_print_cart_${user.id}`);
      return saved
        ? JSON.parse(saved).map((item) => ({
            ...item,
            cartId: item.cartId || getColorPrintCartId(item.id, item.print_side),
            print_copy: Math.max(1, Number(item.print_copy || 1)),
            print_side: normalizeColorPrintSide(item.print_side),
            amount: Number(item.amount || 0),
            file: null,
          }))
        : [];
    } catch {
      return [];
    }
  });

  const [chosenCopies, setChosenCopies] = useState({});
  const [chosenSides, setChosenSides] = useState({});
  const [cartStep, setCartStep] = useState(1);
  const [customerNote, setCustomerNote] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  // Filter category
  const [selectedCatFilter, setSelectedCatFilter] = useState('All');

  const printSideLabels = {
    front: 'Front Only',
    both: 'Front & Back',
    front_back: 'Front & Back',
    single: 'Front Only',
    double: 'Front & Back',
  };

  const findCartItem = (items, productId, printSide) => (
    items.find((item) => String(item.id) === String(productId) && normalizeColorPrintSide(item.print_side) === normalizeColorPrintSide(printSide))
  );

  const buildCartItem = (product, copies, printSide, existingItem = null) => {
    const normalizedSide = normalizeColorPrintSide(printSide);
    const safeCopies = Math.max(1, Number(copies) || Number(product.print_copy) || 1);
    return {
      cartId: existingItem?.cartId || getColorPrintCartId(product.id, normalizedSide),
      id: product.id,
      name: product.name,
      category: product.category,
      print_copy: safeCopies,
      print_side: normalizedSide,
      amount: getB2CTierPrice(product, safeCopies, normalizedSide),
      file: existingItem?.file ?? null,
    };
  };

  const syncSelectedCopies = (productId, copies) => {
    setChosenCopies((prev) => ({ ...prev, [productId]: Math.max(1, Number(copies) || 1) }));
  };

  const syncSelectedSide = (productId, printSide) => {
    setChosenSides((prev) => ({ ...prev, [productId]: normalizeColorPrintSide(printSide) }));
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

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem(
      `b2c_color_print_cart_${user.id}`,
      JSON.stringify(cart.map(({ file, ...item }) => item))
    );
  }, [cart, user.id]);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      api('/api/b2c/color-print/products'),
      api('/api/b2c/color-print/categories')
    ]).then(([productData, categoryData]) => {
      if (isMounted) {
        const prodList = Array.isArray(productData) ? productData : [];
        const catList = Array.isArray(categoryData) ? categoryData : [];
        setProducts(prodList);
        setCategories(catList);
      }
    }).catch(err => {
      if (isMounted) setError(err.message);
    }).finally(() => {
      if (isMounted) setLoading(false);
    });

    return () => { isMounted = false; };
  }, [api]);

  useEffect(() => {
    if (!products.length) return;

    setCart((current) => current.map((item) => {
      const product = products.find((entry) => String(entry.id) === String(item.id));
      if (!product) return item;

      const normalizedSide = normalizeColorPrintSide(item.print_side);
      const safeCopies = Math.max(1, Number(item.print_copy || product.print_copy || 1));
      const nextAmount = getB2CTierPrice(product, safeCopies, normalizedSide);
      const nextCartId = getColorPrintCartId(product.id, normalizedSide);

      if (
        item.print_copy === safeCopies &&
        item.print_side === normalizedSide &&
        item.amount === nextAmount &&
        item.cartId === nextCartId
      ) {
        return item;
      }

      return {
        ...item,
        cartId: nextCartId,
        print_copy: safeCopies,
        print_side: normalizedSide,
        amount: nextAmount,
      };
    }));
  }, [products]);

  const handleChosenSideChange = (product, nextSide) => {
    const normalizedSide = normalizeColorPrintSide(nextSide);
    const matchingCartItem = findCartItem(cart, product.id, normalizedSide);
    syncSelectedSide(product.id, normalizedSide);
    syncSelectedCopies(product.id, matchingCartItem?.print_copy || product.print_copy);
  };

  const handleChosenCopiesChange = (product, nextCopies, printSide) => {
    const normalizedSide = normalizeColorPrintSide(printSide);
    const safeCopies = Math.max(1, Number(nextCopies) || 1);
    syncSelectedCopies(product.id, safeCopies);

    setCart((current) => {
      const existingItem = findCartItem(current, product.id, normalizedSide);
      if (!existingItem) return current;

      const updatedItem = buildCartItem(product, safeCopies, normalizedSide, existingItem);
      return current.map((item) => item.cartId === existingItem.cartId ? updatedItem : item);
    });
  };

  const addToCart = (product, copies, printSide) => {
    const normalizedSide = normalizeColorPrintSide(printSide);
    const safeCopies = Math.max(1, Number(copies) || Number(product.print_copy) || 1);
    syncSelectedSide(product.id, normalizedSide);
    syncSelectedCopies(product.id, safeCopies);

    setCart(current => {
      const existingItem = findCartItem(current, product.id, normalizedSide);
      const nextItem = buildCartItem(product, safeCopies, normalizedSide, existingItem);
      return existingItem
        ? current.map((item) => item.cartId === existingItem.cartId ? nextItem : item)
        : [...current, nextItem];
    });
    setNotice(`${product.name} (${safeCopies} copies, ${normalizedSide === 'both' ? 'Front & Back' : 'Front Only'}) added to cart.`);
  };

  const updateCart = (cartId, values) => {
    setCart((current) => current.map((item) => item.cartId === cartId ? { ...item, ...values } : item));
  };

  const updateCartCopies = (cartId, copies) => {
    setCart((current) => {
      const existingItem = current.find((item) => item.cartId === cartId);
      if (!existingItem) return current;

      const product = products.find((entry) => String(entry.id) === String(existingItem.id));
      if (!product) return current;

      const updatedItem = buildCartItem(product, copies, existingItem.print_side, existingItem);
      syncSelectedSide(existingItem.id, existingItem.print_side);
      syncSelectedCopies(existingItem.id, updatedItem.print_copy);

      return current.map((item) => item.cartId === cartId ? updatedItem : item);
    });
  };

  const removeCart = (cartId) => {
    setCart(current => {
      const removedItem = current.find((item) => item.cartId === cartId);
      const next = current.filter(item => item.cartId !== cartId);
      if (next.length === 0) setCartStep(1);

      if (removedItem) {
        const matchingReplacement = next.find((item) => String(item.id) === String(removedItem.id));
        syncSelectedSide(removedItem.id, matchingReplacement?.print_side || 'front');
        syncSelectedCopies(
          removedItem.id,
          matchingReplacement?.print_copy || products.find((product) => String(product.id) === String(removedItem.id))?.print_copy || 1
        );
      }

      return next;
    });
  };

  const handleCheckout = async () => {
    if (!user.phone || !user.email || !user.address) {
      alert('Please complete your profile details before checkout.');
      window.location.href = '/profile';
      return;
    }

    if (!cart.length) {
      setError('Please add at least one product.');
      return;
    }

    if (cart.some(item => !item.file)) {
      setError('Please upload artwork file for every selected product.');
      return;
    }

    setCheckoutLoading(true);
    setError('');
    setNotice('');

    try {
      const formData = new FormData();
      formData.append('customer_note', customerNote);
      formData.append('items_json', JSON.stringify(cart.map(i => ({
        product_id: i.id,
        is_color_print: true,
        print_copy: i.print_copy,
        print_side: i.print_side === 'both' ? 'front_back' : 'front'
      }))));

      cart.forEach((item, index) => {
        if (item.file) {
          formData.append(`files[${index}]`, item.file);
        }
      });

      const result = await api('/api/b2c/orders', {
        method: 'POST',
        body: formData
      });

      setNotice(result.message || 'Order placed successfully!');
      setCart([]);
      setCartStep(1);
      setCustomerNote('');
      alert(`Order ${result.order?.order_number || ''} submitted successfully.`);
      window.location.href = '/my-orders';
    } catch (err) {
      setError(err.message);
    } finally {
      setCheckoutLoading(false);
    }
  };

  const groupedProducts = useMemo(() => {
    const map = {};
    products.forEach(p => {
      if (!map[p.category]) map[p.category] = [];
      map[p.category].push(p);
    });
    return map;
  }, [products]);

  const activeCategories = categories.filter(c => selectedCatFilter === 'All' || c.name === selectedCatFilter);

  const cartTotal = cart.reduce((sum, item) => sum + Number(item.amount), 0);

  if (loading) {
    return (
      <div className="b2c-page b2c-page-muted b2c-loader-page">
        <div className="b2c-loader-card">
          <img src={logo} alt="Angel logo" className="b2c-loader-logo" />
          <div className="b2c-loader-text">Loading Color Print Shop...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="b2c-store-shell">
      <CustomerHeader
        user={user}
        onLogout={onLogout}
        currentPage="color-print"
        cartCount={cart.length}
        onOpenCart={() => { window.location.href = '/cart'; }}
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkNotificationRead={onMarkNotificationRead}
        onMarkAllNotificationsRead={onMarkAllNotificationsRead}
      />

      <main className="b2c-store-main shop-layout" style={{ maxWidth: '1650px', width: '100%', margin: '0 auto', padding: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1, minWidth: 0 }}>
          <div className="b2c-shop-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff', padding: '30px', borderRadius: '16px', marginBottom: '10px' }}>
            <span className="b2c-pill" style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 'bold' }}>Customization Color Print</span>
            <h1 style={{ marginTop: '10px', fontSize: '28px', color: '#fff' }}>Custom printing with best volume discounts</h1>
            <p style={{ opacity: 0.8, fontSize: '14px', marginTop: '5px', color: '#cbd5e1' }}>Upload your print designs, choose print copies and double-sided preferences, and see instant volume discounts.</p>
          </div>

          {notice && <div className="b2c-alert success">{notice}</div>}
          {error && <div className="b2c-alert error">{error}</div>}

          {/* Categories Tab Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <button
              onClick={() => setSelectedCatFilter('All')}
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                fontFamily: 'inherit',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                background: selectedCatFilter === 'All' ? 'var(--blue)' : 'rgba(255, 255, 255, 0.72)',
                border: selectedCatFilter === 'All' ? '1.5px solid var(--blue)' : '1.5px solid rgba(13, 20, 36, 0.08)',
                color: selectedCatFilter === 'All' ? '#ffffff' : 'var(--muted)',
                transition: 'all 0.25s ease',
                outline: 'none',
                boxShadow: selectedCatFilter === 'All' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              All Categories
            </button>
            {categories.map(cat => {
              const isActive = selectedCatFilter === cat.name;
              const theme = getCategoryTheme(cat.name);
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatFilter(cat.name)}
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
                  {cat.name}
                </button>
              );
            })}
          </div>

          {activeCategories.map(cat => {
            const catProducts = groupedProducts[cat.name] || [];
            if (!catProducts.length) return null;
            const theme = getCategoryTheme(cat.name);
            return (
              <section key={cat.id} className="panel" style={{ display: 'block', marginBottom: '30px', borderTop: `4px solid ${theme.primary}` }}>
                <div className="panel-head" style={{ borderBottom: 'none', padding: '24px 28px 12px 28px' }}>
                  <h2 style={{ color: theme.text }}>{cat.name} Products</h2>
                  <p>Browse products and select copy quantities by color.</p>
                </div>
                <div style={{ padding: '0 28px 28px' }}>
                  <div className="b2c-color-print-desktop-table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
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
                          const currentSide = normalizeColorPrintSide(
                            chosenSides[product.id] ?? cart.find((item) => String(item.id) === String(product.id))?.print_side ?? 'front'
                          );
                          const cartItemForSelection = findCartItem(cart, product.id, currentSide);
                          const currentCopies = chosenCopies[product.id] ?? cartItemForSelection?.print_copy ?? product.print_copy;
                          const totalPrice = getB2CTierPrice(product, currentCopies, currentSide);
                          const perCopyPrice = currentCopies > 0 ? (totalPrice / currentCopies) : 0;
                          const inCart = !!cartItemForSelection;
                          const hasBoth = product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0;

                          return (
                            <tr key={product.id}>
                              <td data-label="Product Name">
                                <strong style={{ color: 'var(--navy)', fontSize: '16px' }}>{product.name}</strong>
                              </td>
                              <td data-label="Print Side">
                                <select
                                  value={currentSide}
                                  onChange={e => handleChosenSideChange(product, e.target.value)}
                                  style={{ padding: '6px 10px', fontSize: '14px', borderRadius: '6px', border: '1.5px solid var(--line)', outline: 'none' }}
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
                                      handleChosenCopiesChange(product, val, currentSide);
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
                                      handleChosenCopiesChange(product, val, currentSide);
                                    }}
                                  />
                                  <button
                                    type="button"
                                    className="adjust-btn"
                                    onClick={() => {
                                      const val = currentCopies + 1;
                                      handleChosenCopiesChange(product, val, currentSide);
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
                                  onClick={() => addToCart(product, currentCopies, currentSide)}
                                  style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '8px' }}
                                >
                                  {inCart ? 'Update Cart' : '+ Add to Cart'}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile view cards */}
                  <div className="b2c-color-print-mobile-cards">
                    {catProducts.map(product => {
                      const currentSide = normalizeColorPrintSide(
                        chosenSides[product.id] ?? cart.find((item) => String(item.id) === String(product.id))?.print_side ?? 'front'
                      );
                      const cartItemForSelection = findCartItem(cart, product.id, currentSide);
                      const currentCopies = chosenCopies[product.id] ?? cartItemForSelection?.print_copy ?? product.print_copy;
                      const totalPrice = getB2CTierPrice(product, currentCopies, currentSide);
                      const perCopyPrice = currentCopies > 0 ? (totalPrice / currentCopies) : 0;
                      const inCart = !!cartItemForSelection;
                      const hasBoth = product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0;

                      return (
                        <div key={product.id} className="b2c-color-print-card-item">
                          <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px', marginBottom: '4px' }}>
                            <strong style={{ color: 'var(--navy)', fontSize: '16px' }}>{product.name}</strong>
                          </div>

                          <div className="b2c-color-print-card-row">
                            <span className="b2c-color-print-card-label">Print Side</span>
                            <select
                              value={currentSide}
                              onChange={e => handleChosenSideChange(product, e.target.value)}
                              style={{ padding: '6px 10px', fontSize: '13px', borderRadius: '6px', border: '1px solid var(--line)', outline: 'none' }}
                            >
                              <option value="front">Front Only</option>
                              {hasBoth && <option value="both">Front & Back</option>}
                            </select>
                          </div>

                          <div className="b2c-color-print-card-row">
                            <span className="b2c-color-print-card-label">Select Copies</span>
                            <div className="copies-adjuster">
                              <button
                                type="button"
                                className="adjust-btn"
                                onClick={() => handleChosenCopiesChange(product, Math.max(1, currentCopies - 1), currentSide)}
                              >
                                −
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={currentCopies}
                                onChange={e => handleChosenCopiesChange(product, Math.max(1, Number(e.target.value) || 1), currentSide)}
                              />
                              <button
                                type="button"
                                className="adjust-btn"
                                onClick={() => handleChosenCopiesChange(product, currentCopies + 1, currentSide)}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="b2c-color-print-card-row" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '8px', marginTop: '4px' }}>
                            <div>
                              <strong style={{ fontSize: '16px', color: 'var(--blue)' }}>{money(totalPrice)}</strong>
                              <div style={{ color: 'var(--muted)', fontSize: '11px' }}>{currentCopies} copies · {money(perCopyPrice)} / copy</div>
                            </div>
                            <button
                              className="btn primary"
                              style={{ padding: '8px 14px', fontSize: '12px' }}
                              onClick={() => addToCart(product, currentCopies, currentSide)}
                            >
                              {inCart ? 'Update Cart' : 'Add to Cart'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Sidebar Cart panel */}
        <aside className="cart panel" style={{ position: 'sticky', top: '100px', width: '380px', flexShrink: 0 }}>
          {cart.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', padding: '14px 24px', background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
              <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: 'var(--blue)' }} title="Cart Selection"></div>
              <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: cartStep === 2 ? 'var(--blue)' : '#cbd5e1' }} title="Uploads & Checkout"></div>
            </div>
          )}

          {cartStep === 1 ? (
            <>
              <div className="cart-head" style={{ padding: '20px 24px 15px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: 'var(--navy)' }}>Shopping Cart</h2>
                <span style={{ fontSize: '12px', background: 'var(--blue-bg)', color: 'var(--blue)', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold' }}>{cart.length} items</span>
              </div>

              {!cart.length ? (
                <div className="empty" style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px 20px', fontSize: '14px' }}>
                  Add custom products from the list.
                </div>
              ) : (
                <div style={{ padding: '0 24px 24px' }}>
                  <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', margin: '15px 0' }}>
                    {cart.map(item => (
                      <div className="cart-item" key={item.cartId} style={{ display: 'flex', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9', position: 'relative' }}>
                        <button
                          className="remove"
                          onClick={() => removeCart(item.cartId)}
                          style={{ border: 'none', background: 'none', fontSize: '18px', color: '#cbd5e1', cursor: 'pointer', position: 'absolute', right: 0, top: 0 }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = '#ef4444'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; }}
                          title="Remove item"
                        >
                          ×
                        </button>
                        <div style={{ flex: 1 }}>
                          <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block', paddingRight: '20px' }}>{item.name}</strong>
                          <small style={{ color: 'var(--muted)', fontSize: '11px', display: 'block', marginTop: '2px' }}>
                            {item.print_copy} copies · {item.print_side === 'both' ? 'Double Sided' : 'Single Sided'}
                          </small>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Copies:</span>
                              <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '4px', overflow: 'hidden', height: '24px' }}>
                                <button
                                  type="button"
                                  style={{ padding: '0 8px', background: '#f8fafc', border: 'none', cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center' }}
                                  onClick={() => updateCartCopies(item.cartId, Math.max(1, item.print_copy - 1))}
                                >
                                  −
                                </button>
                                <span style={{ width: '56px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>{item.print_copy}</span>
                                <button
                                  type="button"
                                  style={{ padding: '0 8px', background: '#f8fafc', border: 'none', cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center' }}
                                  onClick={() => updateCartCopies(item.cartId, item.print_copy + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <strong style={{ fontSize: '14px', color: 'var(--blue)' }}>{money(item.amount)}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderTop: '1px solid var(--line)', marginBottom: '15px' }}>
                    <span style={{ fontWeight: '500', color: 'var(--navy)' }}>Subtotal</span>
                    <strong style={{ fontSize: '18px', color: 'var(--blue)' }}>{money(cartTotal)}</strong>
                  </div>
                  <button className="btn primary wide" style={{ width: '100%' }} onClick={() => setCartStep(2)}>
                    Next Step (Uploads) →
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="cart-head" style={{ padding: '20px 24px 15px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0, color: 'var(--navy)' }}>Upload Artwork</h2>
                <button
                  type="button"
                  className="btn ghost"
                  style={{ padding: '4px 8px', fontSize: '12px', border: '1px solid var(--line)', borderRadius: '6px', background: '#fff', cursor: 'pointer' }}
                  onClick={() => setCartStep(1)}
                >
                  ← Back
                </button>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px' }}>
                  {cart.map((item, index) => (
                    <div key={item.cartId} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block', marginBottom: '2px' }}>{item.name}</strong>
                      <small style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>{item.print_copy} copies · {item.print_side === 'both' ? 'F&B' : 'Front'}</small>
                      
                      <label htmlFor={`file-upload-color-${item.cartId}`} style={{
                        display: 'block',
                        padding: '12px 8px',
                        border: item.file ? '1px solid #22c55e' : '1px dashed #38bdf8',
                        borderRadius: '8px',
                        textAlign: 'center',
                        background: item.file ? '#f0fdf4' : '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: item.file ? '#16a34a' : 'var(--blue)', display: 'block' }}>
                          {item.file ? '✓ File Selected' : '📁 Upload Artwork File'}
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Accepts .cdr, .zip, .png, .jpg, .jpeg</span>
                        <input
                          id={`file-upload-color-${item.cartId}`}
                          type="file"
                          accept={acceptedArtworkTypes}
                          onChange={e => updateCart(item.cartId, { file: e.target.files?.[0] || null })}
                          style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}
                        />
                      </label>
                      
                      {item.file && (
                        <div style={{ fontSize: '11px', color: 'var(--navy)', marginTop: '8px', padding: '6px', background: '#fff', border: '1px solid var(--line)', borderRadius: '4px', wordBreak: 'break-all', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '160px' }}>{item.file.name}</span>
                          <button
                            type="button"
                            onClick={() => updateCart(item.cartId, { file: null })}
                            style={{ border: 'none', background: 'none', color: '#ef4444', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px', color: 'var(--navy)' }}>Special Instructions / Note:</label>
                  <textarea
                    value={customerNote}
                    onChange={e => setCustomerNote(e.target.value)}
                    placeholder="Enter courier, cutting, or special requests..."
                    style={{ width: '100%', height: '80px', padding: '8px', fontSize: '12px', borderRadius: '6px', border: '1px solid var(--line)', outline: 'none', resize: 'vertical', marginBottom: '15px' }}
                  />

                  <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontWeight: '500', color: 'var(--navy)' }}>Total amount:</span>
                    <strong style={{ fontSize: '18px', color: 'var(--blue)' }}>{money(cartTotal)}</strong>
                  </div>

                  <button
                    className="btn primary wide"
                    style={{ width: '100%', padding: '12px', fontSize: '14px', borderRadius: '8px', background: 'var(--blue)', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
                    onClick={handleCheckout}
                    disabled={checkoutLoading}
                  >
                    {checkoutLoading ? 'Submitting Order...' : 'Place Order'}
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>
      </main>

      {cart.length > 0 && (
        <button
          type="button"
          className="b2c-mobile-floating-cart-bar"
          onClick={() => {
            const asideElement = document.querySelector('.cart.panel');
            asideElement?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>🛒 View Cart ({cart.length} items)</span>
          <span>Total: {money(cartTotal)} →</span>
        </button>
      )}

      <StoreFooter user={user} />
    </div>
  );
}
