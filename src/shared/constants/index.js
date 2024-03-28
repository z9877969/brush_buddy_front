// routes
export const ROUTES = {
  MAIN: '/',
  ABOUT: '/about',
  BLOG: '/blog/:blogId',
  CART: '/cart',
  NOT_FOUND: '/not-found',
  PRODUCT_CARD: '/products/:productId',
  PRODUCTS: '/products',
  THANK: '/thank',
  CART_EMPTY: '/cart-empty',
  GET_BLOG_ID: (blogId) => `/blog/${blogId}`,
};

export const PRODUCT_TYPES = {
  CHILD: 'child',
  ADULT: 'adult',
  ANIMAL: 'animal',
  HELPER: 'helper',
};

export const WATERMARK_TYPES = {
  SALE: 'sale',
  WOW: 'wow',
};

export const SOCIAL_NETWORKS = {
  INSTAGRAM:
    'https://www.instagram.com/brushbuddy.ua?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
  TELEGRAM: 'https://web.telegram.org/k/#@BrushBuddy',
  VIBER: '#',
  FACEBOOK: 'https://www.facebook.com/profile.php?id=61557426364064',
};

export const DELIVERY_FORM = {
  COMMENT_MAX_LENGTH: 300,
};
