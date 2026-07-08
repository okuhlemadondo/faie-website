export const products = [
  {
    id: 'bucket-occasional',
    name: 'Bucket Occasional Chair',
    price: 'R4,500.00',
    numericPrice: 4500,
    category: 'Seating',
    image: '/images/products/bucket-occasional.png',
    altImage: '/images/products/bucket-occasional-alt.png',
    description: 'A striking blend of form and function. The Bucket Occasional Chair features an enveloping curved backrest that offers exceptional comfort without compromising its sculptural silhouette. Upholstered in premium textured fabric with a solid wood base, it is the perfect statement piece for a living room, bedroom, or boutique office space.',
    details: [
      'Premium textured upholstery',
      'Ergonomic curved backrest',
      'Solid oak base with natural finish',
      'High-density foam cushioning'
    ]
  },
  {
    id: 'dining-chair',
    name: 'Classic Dining Chair',
    price: 'R2,200.00',
    numericPrice: 2200,
    category: 'Seating',
    image: '/images/products/dining-chair.png',
    altImage: '/images/products/dining-chair-alt.png',
    description: 'Elegance at the dining table. This Classic Dining Chair combines a refined minimalist profile with everyday comfort. The subtly tapered legs and perfectly pitched backrest ensure hours of comfortable seating, while the stain-resistant fabric makes it as practical as it is beautiful.',
    details: [
      'Stain-resistant luxury fabric',
      'Tapered powder-coated steel legs',
      'Ergonomic support',
      'Available in multiple neutral shades'
    ]
  },
  {
    id: 'custom-stool',
    name: 'Bespoke Bar Stool',
    price: 'R1,800.00',
    numericPrice: 1800,
    category: 'Seating',
    image: '/images/products/custom-stool.png',
    description: 'Elevate your kitchen island or bar counter. The Bespoke Bar Stool offers a sleek, architectural presence. The meticulously crafted wooden seat features a subtle contour for comfort, resting atop a minimalist matte-black metal frame with a perfectly placed footrest.',
    details: [
      'Solid walnut contoured seat',
      'Matte-black powder-coated frame',
      'Integrated footrest',
      'Non-slip floor protectors'
    ]
  },
  {
    id: 'custom-sofa',
    name: 'Signature Modular Sofa',
    price: 'R24,000.00',
    numericPrice: 24000,
    category: 'Sofas',
    image: '/images/products/custom-sofa.png',
    description: 'The anchor of any luxurious living space. The Signature Modular Sofa offers deep, lounge-worthy seating with a low, contemporary profile. Constructed with a kiln-dried hardwood frame and layered with memory foam and feather-down blends, it provides unparalleled comfort and enduring shape.',
    details: [
      'Modular configuration options',
      'Memory foam and down blend cushions',
      'Kiln-dried hardwood frame',
      'Removable, dry-cleanable slipcovers'
    ]
  },
  {
    id: 'storage-ottoman',
    name: 'Tailored Storage Ottoman',
    price: 'R3,200.00',
    numericPrice: 3200,
    category: 'Accessories',
    image: '/images/products/storage-ottoman.png',
    description: 'Versatility meets elegance. This Tailored Storage Ottoman serves as a comfortable footrest, extra seating, or a surface for a tray, all while hiding generous storage space inside. Featuring tailored piping and a smooth hydraulic lift mechanism.',
    details: [
      'Concealed storage compartment',
      'Hydraulic lift hinge',
      'Tailored piping detail',
      'Multi-functional design'
    ]
  },
  {
    id: 'patio-lounge',
    name: 'Oasis Patio Lounge',
    price: 'R18,500.00',
    numericPrice: 18500,
    category: 'Outdoor',
    image: '/images/products/patio-lounge.png',
    description: 'Bring luxury outdoors. The Oasis Patio Lounge is designed to withstand the elements while offering the comfort of indoor furniture. The weather-resistant teak frame silvers beautifully over time, paired with quick-dry foam cushions upholstered in premium outdoor performance fabric.',
    details: [
      'Grade-A sustainably sourced teak',
      'Quick-dry reticulated foam',
      'UV and fade-resistant performance fabric',
      'Modular end tables included'
    ]
  }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category) {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
}

export function getAllCategories() {
  const categories = new Set(products.map(p => p.category));
  return ['All', ...Array.from(categories)];
}
