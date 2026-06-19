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

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
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
    description: 'Our Customer workflow is made for customers who want premium print quality, thoughtful support, and a beautifully finished final product.',
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

function normalizeQuantity(quantity, minimumQuantity, quantityStep) {
  const parsed = Number(quantity);

  if (!Number.isFinite(parsed) || parsed <= minimumQuantity) {
    return minimumQuantity;
  }

  const stepOffset = Math.round((parsed - minimumQuantity) / quantityStep);
  return minimumQuantity + Math.max(0, stepOffset) * quantityStep;
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
  const [categoryLoading, setCategoryLoading] = useState(false);
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
      sort_order: product.sort_order || 0,
      remove_sample_pdf: false,
    });
    setExistingImages(Array.isArray(product.images) ? product.images : []);
    setRemovedImageIds([]);
    setNewImages([]);
    setSamplePdfFile(null);
    setProductFormStep(2);
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
      formData.append('gsm_options_json', JSON.stringify([]));
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
                  ['products', 'Products'],
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

        {tab === 'products' && (
          <>
            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head">
                <div>
                  <span className="b2c-pill subtle">Categories</span>
                  <h2>Manage Customer categories</h2>
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

                      {/* GSM Options removed */}

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

                    <div className="b2c-modal-actions" style={{ display: 'flex', gap: '12px' }}>
                      {!editingProductId && (
                        <button
                          type="button"
                          className="b2c-btn-secondary"
                          onClick={() => setProductFormStep(1)}
                        >
                          Back
                        </button>
                      )}
                      <button className="b2c-btn-primary" type="submit" disabled={productSubmitting}>
                        {productSubmitting ? 'Saving...' : editingProductId ? 'Update Product' : 'Create Product'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </section>

            <section className="b2c-admin-card">
              <div className="b2c-admin-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span className="b2c-pill subtle">Catalog</span>
                  <h2>Customer products</h2>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <select
                    value={selectedB2CProductCategory}
                    onChange={(e) => setSelectedB2CProductCategory(e.target.value)}
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--b2c-border)', fontSize: '14px', background: '#fff', outline: 'none' }}
                  >
                    <option value="All">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                  <div style={{ position: 'relative', minWidth: '280px' }}>
                    <input
                      type="text"
                      placeholder="Search standard products..."
                      value={searchB2CProduct}
                      onChange={(e) => setSearchB2CProduct(e.target.value)}
                      style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1.5px solid var(--b2c-border)', fontSize: '14px' }}
                    />
                  </div>
                </div>
              </div>

              {filteredB2CProducts.length === 0 ? (
                <div className="b2c-admin-empty">No Customer products added yet.</div>
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
                      {filteredB2CProducts.map((product) => (
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
                              GSM: Not required
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
                          <span>{item.category_name}</span>
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
          <a href="/about-us" className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
          <a href="/printing-policy" className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
          <a href="/contact-us" className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
          <a href="/portal" className="b2c-orders-btn b2c-orders-btn-wide">Login as Dealer</a>
          <button type="button" className="b2c-btn-primary b2c-header-login-btn" onClick={onLoginClick}>
            Login as Customer
          </button>
        </div>
      </header>

      <B2CHeaderDrawer open={menuOpen} onClose={() => setMenuOpen(false)} label="Customer Portal">
        <a href="/" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
        <a href="/about-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
        <a href="/printing-policy" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
        <a href="/contact-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
        <a href="/portal" onClick={() => setMenuOpen(false)} className="b2c-orders-btn b2c-orders-btn-wide">Login as Dealer</a>
        <button type="button" className="b2c-btn-primary b2c-header-login-btn" onClick={() => { setMenuOpen(false); onLoginClick(); }}>
          Login as Customer
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
          <a href="/about-us" className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
          <a href="/printing-policy" className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
          <a href="/contact-us" className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
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

      <B2CHeaderDrawer open={menuOpen} onClose={() => setMenuOpen(false)} label="Customer Storefront">
        <a href="/" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
        <a href="/about-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'about' ? 'active' : ''}`}>About Us</a>
        <a href="/printing-policy" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'policy' ? 'active' : ''}`}>Printing Policy</a>
        <a href="/contact-us" onClick={() => setMenuOpen(false)} className={`b2c-orders-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact Us</a>
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
          <a href="/portal">Login as Dealer</a>
          <a href="/">Login as Customer</a>
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
          <a href="tel:8200391418">Office No.: 8200391418</a>
          <a href="https://wa.me/919724503723" target="_blank" rel="noopener noreferrer">Customer Care WhatsApp: 9724503723</a>
          <a href="mailto:print@angelprintshop.com" style={{ textTransform: 'none', color: 'inherit', textDecoration: 'none' }}>Email: print@angelprintshop.com</a>
          <span>Address: F/4, First Floor, Shyamal Complex,</span>
          <span>New CG Road, Near Kotak Bank,</span>
          <span>Nigam Nagar, Chandkheda,</span>
          <span>Ahmedabad, Gujarat – 382424</span>
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

  // Calculate price details for a given product configuration
  const calculation = useMemo(() => {
    if (!selectedProduct) return { baseCost: 0, costPerCopy: 0, subtotal: 0, discountPercent: 0, discountAmount: 0, total: 0 };

    const baseCost = selectedPrintSide === 'front_back'
      ? Number(selectedProduct.front_back_amount || selectedProduct.amount || 0)
      : Number(selectedProduct.amount || 0);

    const costPerCopy = baseCost;
    const subtotal = costPerCopy * quantity;

    // Discount tier lookup
    let discountPercent = 0;
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;

    return {
      baseCost,
      costPerCopy,
      subtotal,
      discountPercent,
      discountAmount,
      total
    };
  }, [selectedProduct, quantity, selectedPrintSide]);

  const minimumQuantity = selectedProduct?.print_copy || 1;
  const quantityStep = getQuantityStep(selectedProduct);
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
    const finalUnitPrice = baseUnitPrice;
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
        gsm: null,
        gsmPrice: 0,
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
              <article className="b2c-premium-product-card static-custom-card">
                <div className="b2c-card-img-wrap">
                  <img src={machineImage} alt="Customization Color Print" className="b2c-card-img" />
                  <div className="b2c-card-badge-wrap">
                    <span className="b2c-card-tag">Custom Print</span>
                  </div>
                </div>
                <div className="b2c-card-details">
                  <h3>Customization Color Print</h3>
                  <p className="b2c-card-tagline">Upload your own artwork and customize print side, copies, and discount volume tiers.</p>
                  <div className="b2c-card-pricing-row">
                    <div className="b2c-card-price">
                      <span className="b2c-price-lbl">Volume Tiers</span>
                      <strong className="b2c-price-val">Best Rates</strong>
                    </div>
                    <div className="b2c-card-actions">
                      <a href="/b2c/color-print" className="b2c-card-btn" style={{ textDecoration: 'none' }}>
                        Order Color Prints <IconArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
      alert('Thank you for contacting us! We will get back to you shortly.');
    }, 1200);
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
        <section id="catalog" className="b2c-section b2c-catalog-section">
          <div className="b2c-section-head-centered">
            <span className="b2c-pill subtle">Signature Collections</span>
            <h2>Configure & Order Prints</h2>
            <p>Select a category or search for custom stationery, then click "Customize" to get a live pricing quote.</p>
          </div>

          <div className="b2c-premium-product-grid">
            <article className="b2c-premium-product-card static-custom-card">
              <div className="b2c-card-img-wrap">
                <img src={machineImage} alt="Customization Color Print" className="b2c-card-img" />
                <div className="b2c-card-badge-wrap">
                  <span className="b2c-card-tag">Custom Print</span>
                </div>
              </div>
              <div className="b2c-card-details">
                <h3>Customization Color Print</h3>
                <p className="b2c-card-tagline">Upload your own artwork and customize print side, copies, and discount volume tiers.</p>
                <div className="b2c-card-pricing-row">
                  <div className="b2c-card-price">
                    <span className="b2c-price-lbl">Volume Tiers</span>
                    <strong className="b2c-price-val">Best Rates</strong>
                  </div>
                  <div className="b2c-card-actions">
                    <a href="/b2c/color-print" className="b2c-card-btn" style={{ textDecoration: 'none' }}>
                      Order Color Prints <IconArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </article>
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
              <a href="/portal" className="b2c-btn-secondary b2c-btn-inline">Login as Dealer</a>
              <button type="button" className="b2c-btn-primary b2c-btn-inline" onClick={openCustomerLogin}>
                Login as Customer <IconArrowRight />
              </button>
            </div>
          </div>
        </section>

        <AboutPreviewSection />

        <section id="b2c-login" className="b2c-login-panel-section">
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
  const isContactPage = pathname.startsWith('/contact-us');
  const isColorPrintShop = pathname.startsWith('/b2c/color-print');
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
  return Math.round(baseCost * (1 - discount / 100));
};

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
      return saved ? JSON.parse(saved).map(item => ({ ...item, file: null })) : [];
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
        setProducts(Array.isArray(productData) ? productData : []);
        setCategories(Array.isArray(categoryData) ? categoryData : []);
      }
    }).catch(err => {
      if (isMounted) setError(err.message);
    }).finally(() => {
      if (isMounted) setLoading(false);
    });

    return () => { isMounted = false; };
  }, [api]);

  const addToCart = (product, copies, printSide) => {
    const amount = getB2CTierPrice(product, copies, printSide);
    setCart(current => {
      const exists = current.find(item => item.id === product.id && item.print_copy === copies && item.print_side === printSide);
      if (exists) {
        return current.map(item => item.id === product.id && item.print_copy === copies && item.print_side === printSide
          ? { ...item, packs: item.packs + 1 }
          : item
        );
      }
      return [...current, {
        cartId: `${product.id}-${copies}-${printSide}-${Date.now()}`,
        id: product.id,
        name: product.name,
        category: product.category,
        print_copy: copies,
        print_side: printSide,
        amount: amount,
        packs: 1,
        file: null
      }];
    });
    setNotice(`${product.name} (${copies} copies, ${printSide === 'both' ? 'Front & Back' : 'Front Only'}) added to cart.`);
  };

  const updateCart = (cartId, values) => {
    setCart(current => current.map(item => item.cartId === cartId ? { ...item, ...values } : item));
  };

  const removeCart = (cartId) => {
    setCart(current => {
      const next = current.filter(item => item.cartId !== cartId);
      if (next.length === 0) setCartStep(1);
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
        packs: i.packs,
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

  const cartTotal = cart.reduce((sum, item) => sum + Number(item.amount) * item.packs, 0);

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
        onOpenCart={() => setCartStep(1)}
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkNotificationRead={onMarkNotificationRead}
        onMarkAllNotificationsRead={onMarkAllNotificationsRead}
      />

      <main className="b2c-store-main b2c-color-print-container">
        <div className="b2c-color-print-products">
          <div className="b2c-shop-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff', padding: '30px', borderRadius: '16px', marginBottom: '30px' }}>
            <span className="b2c-pill" style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 'bold' }}>Customization Color Print</span>
            <h1 style={{ marginTop: '10px', fontSize: '28px' }}>Custom printing with best volume discounts</h1>
            <p style={{ opacity: 0.8, fontSize: '14px', marginTop: '5px' }}>Upload your print designs, choose print copies and double-sided preferences, and see instant volume discounts.</p>
          </div>

          {notice && <div className="b2c-alert success">{notice}</div>}
          {error && <div className="b2c-alert error">{error}</div>}

          {/* Categories Tab Filter */}
          <div className="b2c-categories-tabs" style={{ marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <button className={`b2c-filter-tab ${selectedCatFilter === 'All' ? 'active' : ''}`} onClick={() => setSelectedCatFilter('All')}>All Categories</button>
            {categories.map(cat => (
              <button key={cat.id} className={`b2c-filter-tab ${selectedCatFilter === cat.name ? 'active' : ''}`} onClick={() => setSelectedCatFilter(cat.name)}>{cat.name}</button>
            ))}
          </div>

          {activeCategories.map(cat => {
            const catProducts = groupedProducts[cat.name] || [];
            if (!catProducts.length) return null;
            return (
              <section key={cat.id} className="b2c-admin-card" style={{ marginBottom: '30px' }}>
                <div className="b2c-admin-card-head" style={{ borderBottom: '1px solid var(--line)', paddingBottom: '12px', marginBottom: '15px' }}>
                  <h2 style={{ fontSize: '20px', color: 'var(--navy)' }}>{cat.name}</h2>
                </div>
                <div className="b2c-color-print-desktop-table" style={{ overflowX: 'auto' }}>
                  <table className="b2c-admin-table" style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Print Side</th>
                        <th>Base Price</th>
                        <th>Select Copies</th>
                        <th style={{ textAlign: 'right' }}>Total Price</th>
                        <th style={{ textAlign: 'right' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {catProducts.map(product => {
                        const currentCopies = chosenCopies[product.id] ?? product.print_copy;
                        const currentSide = chosenSides[product.id] ?? 'front';
                        const totalPrice = getB2CTierPrice(product, currentCopies, currentSide);
                        const perCopyPrice = currentCopies > 0 ? (totalPrice / currentCopies) : 0;
                        const basePriceDisplay = currentSide === 'both' ? product.front_back_amount : product.amount;
                        const hasBoth = product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0;

                        return (
                          <tr key={product.id}>
                            <td>
                              <strong style={{ color: 'var(--navy)', fontSize: '15px' }}>{product.name}</strong>
                            </td>
                            <td>
                              <select
                                value={currentSide}
                                onChange={e => setChosenSides(prev => ({ ...prev, [product.id]: e.target.value }))}
                                style={{ padding: '6px 10px', fontSize: '13px', borderRadius: '6px', border: '1px solid var(--line)', outline: 'none' }}
                              >
                                <option value="front">Front Only</option>
                                {hasBoth && <option value="both">Front & Back</option>}
                              </select>
                            </td>
                            <td>
                              {money(basePriceDisplay)} / copy
                            </td>
                            <td>
                              <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
                                <button
                                  type="button"
                                  style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', cursor: 'pointer' }}
                                  onClick={() => setChosenCopies(prev => ({ ...prev, [product.id]: Math.max(1, currentCopies - 1) }))}
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={currentCopies}
                                  onChange={e => setChosenCopies(prev => ({ ...prev, [product.id]: Math.max(1, Number(e.target.value) || 1) }))}
                                  style={{ width: '60px', textAlign: 'center', border: 'none', outline: 'none', padding: '6px' }}
                                />
                                <button
                                  type="button"
                                  style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', cursor: 'pointer' }}
                                  onClick={() => setChosenCopies(prev => ({ ...prev, [product.id]: currentCopies + 1 }))}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td style={{ textAlign: 'right' }}>
                              <strong style={{ fontSize: '16px', color: 'var(--blue)' }}>{money(totalPrice)}</strong>
                              <div style={{ color: 'var(--muted)', fontSize: '11px' }}>{currentCopies} copies · {money(perCopyPrice)} / copy</div>
                            </td>
                            <td style={{ textAlign: 'right' }}>
                              <button
                                className="b2c-btn-primary"
                                style={{ padding: '8px 12px', fontSize: '12px' }}
                                onClick={() => addToCart(product, currentCopies, currentSide)}
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

                {/* Mobile view cards */}
                <div className="b2c-color-print-mobile-cards">
                  {catProducts.map(product => {
                    const currentCopies = chosenCopies[product.id] ?? product.print_copy;
                    const currentSide = chosenSides[product.id] ?? 'front';
                    const totalPrice = getB2CTierPrice(product, currentCopies, currentSide);
                    const perCopyPrice = currentCopies > 0 ? (totalPrice / currentCopies) : 0;
                    const basePriceDisplay = currentSide === 'both' ? product.front_back_amount : product.amount;
                    const hasBoth = product.front_back_amount !== null && product.front_back_amount !== undefined && product.front_back_amount !== '' && Number(product.front_back_amount) > 0;

                    return (
                      <div key={product.id} className="b2c-color-print-card-item">
                        <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px', marginBottom: '4px' }}>
                          <strong style={{ color: 'var(--navy)', fontSize: '16px' }}>{product.name}</strong>
                          <span style={{ fontSize: '11px', display: 'block', color: 'var(--muted)', marginTop: '2px' }}>Base price: {money(basePriceDisplay)} / copy</span>
                        </div>

                        <div className="b2c-color-print-card-row">
                          <span className="b2c-color-print-card-label">Print Side</span>
                          <select
                            value={currentSide}
                            onChange={e => setChosenSides(prev => ({ ...prev, [product.id]: e.target.value }))}
                            style={{ padding: '6px 10px', fontSize: '13px', borderRadius: '6px', border: '1px solid var(--line)', outline: 'none' }}
                          >
                            <option value="front">Front Only</option>
                            {hasBoth && <option value="both">Front & Back</option>}
                          </select>
                        </div>

                        <div className="b2c-color-print-card-row">
                          <span className="b2c-color-print-card-label">Select Copies</span>
                          <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
                            <button
                              type="button"
                              style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', cursor: 'pointer' }}
                              onClick={() => setChosenCopies(prev => ({ ...prev, [product.id]: Math.max(1, currentCopies - 1) }))}
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={currentCopies}
                              onChange={e => setChosenCopies(prev => ({ ...prev, [product.id]: Math.max(1, Number(e.target.value) || 1) }))}
                              style={{ width: '50px', textAlign: 'center', border: 'none', outline: 'none', padding: '6px', fontSize: '13px' }}
                            />
                            <button
                              type="button"
                              style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', cursor: 'pointer' }}
                              onClick={() => setChosenCopies(prev => ({ ...prev, [product.id]: currentCopies + 1 }))}
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
                            className="b2c-btn-primary"
                            style={{ padding: '8px 14px', fontSize: '12px' }}
                            onClick={() => addToCart(product, currentCopies, currentSide)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Sidebar Cart panel */}
        <aside className="b2c-color-print-aside">
          {cart.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => setCartStep(1)}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  background: 'var(--blue)',
                  color: '#fff'
                }}>1</span>
                <span style={{ fontSize: '13px', fontWeight: cartStep === 1 ? 'bold' : 'normal', color: 'var(--navy)' }}>Cart</span>
              </div>
              <div style={{ flex: 1, height: '2px', background: cartStep === 2 ? 'var(--blue)' : 'var(--line)', margin: '0 10px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  background: cartStep === 2 ? 'var(--blue)' : 'var(--line)',
                  color: cartStep === 2 ? '#fff' : 'var(--muted)'
                }}>2</span>
                <span style={{ fontSize: '13px', fontWeight: cartStep === 2 ? 'bold' : 'normal', color: cartStep === 2 ? 'var(--navy)' : 'var(--muted)' }}>Artwork</span>
              </div>
            </div>
          )}

          {cartStep === 1 ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--navy)', margin: 0 }}>Shopping Cart</h3>
                <span style={{ fontSize: '12px', background: 'var(--blue-bg)', color: 'var(--blue)', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold' }}>{cart.length} items</span>
              </div>

              {!cart.length ? (
                <div style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px 0' }}>Add custom products from the list.</div>
              ) : (
                <>
                  <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {cart.map(item => (
                      <div key={item.cartId} style={{ display: 'flex', gap: '10px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9', position: 'relative' }}>
                        <button
                          style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#f1f5f9',
                            border: 'none',
                            color: '#64748b',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '11px',
                            transition: 'all 0.2s'
                          }}
                          onClick={() => removeCart(item.cartId)}
                          onMouseEnter={(e) => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.color = '#ef4444'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#64748b'; }}
                          title="Remove item"
                        >
                          ×
                        </button>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--navy)', paddingRight: '22px' }}>{item.name}</h4>
                          <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '2px' }}>
                            {item.print_copy} copies · {item.print_side === 'both' ? 'Double Sided' : 'Single Sided'}
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span style={{ fontSize: '11px', color: 'var(--muted)', marginRight: '4px' }}>Packs:</span>
                              <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '4px', overflow: 'hidden', height: '24px' }}>
                                <button
                                  type="button"
                                  style={{ padding: '0 8px', background: '#f8fafc', border: 'none', cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center' }}
                                  onClick={() => updateCart(item.cartId, { packs: Math.max(1, item.packs - 1) })}
                                >
                                  −
                                </button>
                                <span style={{ width: '30px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>{item.packs}</span>
                                <button
                                  type="button"
                                  style={{ padding: '0 8px', background: '#f8fafc', border: 'none', cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center' }}
                                  onClick={() => updateCart(item.cartId, { packs: item.packs + 1 })}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <strong style={{ fontSize: '14px', color: 'var(--blue)' }}>{money(item.amount * item.packs)}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '20px', borderTop: '1px solid var(--line)', paddingTop: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                      <span>Subtotal:</span>
                      <strong style={{ fontSize: '18px', color: 'var(--blue)' }}>{money(cartTotal)}</strong>
                    </div>
                    <button className="b2c-btn-primary" style={{ width: '100%' }} onClick={() => setCartStep(2)}>
                      Next Step (Uploads)
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
                <button
                  type="button"
                  style={{ background: 'none', border: 'none', color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
                  onClick={() => setCartStep(1)}
                >
                  ← Back to Cart
                </button>
                <h3 style={{ fontSize: '16px', color: 'var(--navy)' }}>Upload Artwork</h3>
              </div>

              <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px', paddingRight: '4px' }}>
                {cart.map((item, index) => (
                  <div key={item.cartId} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid var(--line)', transition: 'border-color 0.2s' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '3px' }}>{item.name}</h4>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '10px' }}>{item.print_copy} copies · {item.print_side === 'both' ? 'F&B' : 'Front'} · {item.packs} pack(s)</div>
                    
                    <label style={{
                      display: 'block',
                      padding: '12px 8px',
                      border: item.file ? '1px solid #22c55e' : '1px dashed #38bdf8',
                      borderRadius: '8px',
                      textAlign: 'center',
                      background: item.file ? '#f0fdf4' : '#fff',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', color: item.file ? '#16a34a' : 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        {item.file ? '✓ File Selected' : '📁 Upload Artwork File'}
                      </div>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Accepts .cdr, .zip, .png, .jpg, .jpeg</span>
                      <input
                        type="file"
                        accept={acceptedArtworkTypes}
                        onChange={e => updateCart(item.cartId, { file: e.target.files?.[0] || null })}
                        style={{ display: 'none' }}
                      />
                    </label>
                    
                    {item.file && (
                      <div style={{ fontSize: '11px', color: 'var(--navy)', marginTop: '8px', padding: '6px', background: '#fff', border: '1px solid var(--line)', borderRadius: '4px', wordBreak: 'break-all', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>{item.file.name}</span>
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

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span>Total amount:</span>
                  <strong style={{ fontSize: '18px', color: 'var(--blue)' }}>{money(cartTotal)}</strong>
                </div>

                <button
                  className="b2c-btn-primary"
                  style={{ width: '100%' }}
                  onClick={handleCheckout}
                  disabled={checkoutLoading}
                >
                  {checkoutLoading ? 'Submitting Order...' : 'Place B2C Order'}
                </button>
              </div>
            </div>
          )}
        </aside>
      </main>

      {cart.length > 0 && (
        <button
          type="button"
          className="b2c-mobile-floating-cart-bar"
          onClick={() => {
            const asideElement = document.querySelector('.b2c-color-print-aside');
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
