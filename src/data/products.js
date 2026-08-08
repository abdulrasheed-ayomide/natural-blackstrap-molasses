export const categories = ['All', 'Classic', 'Gift Sets', 'Bulk'];

export const products = [
  {
    id: 'p1',
    name: 'Blackstrap Molasses',
    category: 'Classic',
    weight: '350g Jar',
    price: 3500,
    rating: 4.8,
    description:
      'Our signature 100% natural, unsulphured blackstrap molasses. Slow-simmered and bottled at the peak of purity, with no additives or refined sugar.',
    visual: 'jar',
    tags: ['Best Seller'],
  },
  {
    id: 'p2',
    name: 'Blackstrap Molasses',
    category: 'Classic',
    weight: '750g Jar',
    price: 6500,
    rating: 4.9,
    description:
      'The family-size jar of our classic blackstrap molasses. Deep, rich, and thick — perfect for daily use in tea, baking and cooking.',
    visual: 'jar',
    tags: ['Family Size'],
  },
  {
    id: 'p3',
    name: 'Blackstrap Molasses',
    category: 'Bulk',
    weight: '1.5kg Jug',
    price: 11500,
    rating: 4.7,
    description:
      'A generous 1.5kg refill jug for households and small businesses who go through molasses fast. Same natural, unsulphured quality.',
    visual: 'jug',
    tags: ['Best Value'],
  },
  {
    id: 'p4',
    name: 'Molasses Gift Set',
    category: 'Gift Sets',
    weight: '2 x 350g Jars',
    price: 7200,
    rating: 5.0,
    description:
      'Two 350g jars in a keepsake box, wrapped and ready to gift. A thoughtful, wellness-forward present for family or friends.',
    visual: 'jar',
    tags: ['Gift Ready'],
  },
  {
    id: 'p5',
    name: 'Travel Molasses Pouch',
    category: 'Classic',
    weight: '120g Pouch',
    price: 1800,
    rating: 4.6,
    description:
      'A compact, spill-proof pouch for travel, your desk drawer or your gym bag. The same pure molasses in a portable format.',
    visual: 'pouch',
    tags: ['New'],
  },
  {
    id: 'p6',
    name: 'Blackstrap Molasses',
    category: 'Bulk',
    weight: '5kg Bulk Pail',
    price: 32000,
    rating: 4.8,
    description:
      'Our large 5kg pail, built for restaurants, bakeries and bulk household use. Wholesale pricing available on request.',
    visual: 'jug',
    tags: ['Wholesale'],
  },
];

export const nutritionFacts = {
  servingSize: '1 tablespoon (20g)',
  perServing: [
    { label: 'Calories', value: '47 kcal' },
    { label: 'Total Sugars', value: '11 g' },
    { label: 'Iron', value: '1.8 mg (10% DV)' },
    { label: 'Calcium', value: '41 mg (3% DV)' },
    { label: 'Magnesium', value: '48 mg (11% DV)' },
    { label: 'Potassium', value: '293 mg (6% DV)' },
  ],
  ingredients: 'Pure sugarcane blackstrap molasses. Nothing added. Nothing removed.',
};

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product, count = 3) {
  return products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, count).length
    ? products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, count)
    : products.filter((p) => p.id !== product.id).slice(0, count);
}
