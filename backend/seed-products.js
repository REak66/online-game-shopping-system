const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');
const Category = require('./models/Category');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping_db';

const products = [
  { name: 'Red Dead Redemption 2', price: 59.99, stock: 45, rating: 4.9, numReviews: 2301, featured: true, cat: 'Action' },
  { name: 'Cyberpunk 2077', price: 49.99, stock: 120, rating: 4.6, numReviews: 1890, featured: true, cat: 'RPG' },
  { name: 'Elden Ring', price: 59.99, stock: 88, rating: 4.8, numReviews: 3140, featured: true, cat: 'RPG' },
  { name: 'God of War Ragnarok', price: 69.99, stock: 67, rating: 4.9, numReviews: 2050, featured: true, cat: 'Action' },
  { name: 'Hollow Knight', price: 14.99, stock: 200, rating: 4.7, numReviews: 4200, featured: true, cat: 'Indie' },
  { name: 'Stardew Valley', price: 14.99, stock: 500, rating: 4.9, numReviews: 8900, featured: false, cat: 'Simulation' },
  { name: 'Among Us', price: 4.99, stock: 9999, rating: 4.3, numReviews: 12000, featured: false, cat: 'Casual' },
  { name: 'Minecraft', price: 26.99, stock: 9999, rating: 4.8, numReviews: 25000, featured: false, cat: 'Simulation' },
  { name: 'The Witcher 3', price: 39.99, stock: 75, rating: 4.9, numReviews: 5600, featured: false, cat: 'RPG' },
  { name: 'Hades', price: 24.99, stock: 300, rating: 4.8, numReviews: 3800, featured: false, cat: 'Indie' },
  { name: 'Apex Legends', price: 0, stock: 9999, rating: 4.5, numReviews: 7800, featured: false, cat: 'Shooter' },
  { name: 'Valorant', price: 0, stock: 9999, rating: 4.4, numReviews: 9200, featured: false, cat: 'Shooter' },
  { name: 'Chess Ultra', price: 9.99, stock: 400, rating: 4.2, numReviews: 560, featured: false, cat: 'Puzzle' },
  { name: 'Celeste', price: 19.99, stock: 340, rating: 4.8, numReviews: 2100, featured: false, cat: 'Indie' },
  { name: 'Civilization VI', price: 44.99, stock: 95, rating: 4.6, numReviews: 3400, featured: false, cat: 'Strategy' },
  { name: 'Disco Elysium', price: 39.99, stock: 88, rating: 4.7, numReviews: 1560, featured: false, cat: 'Adventure' },
  { name: 'Portal 2', price: 9.99, stock: 500, rating: 4.9, numReviews: 6700, featured: false, cat: 'Puzzle' },
  { name: 'Rocket League', price: 0, stock: 9999, rating: 4.5, numReviews: 8900, featured: false, cat: 'Arcade' },
  { name: 'Monster Hunter World', price: 29.99, stock: 56, rating: 4.7, numReviews: 2300, featured: false, cat: 'Action' },
  { name: 'Sekiro: Shadows Die Twice', price: 49.99, stock: 34, rating: 4.8, numReviews: 1900, featured: false, cat: 'Action' },
];

mongoose.connect(MONGO_URI).then(async () => {
  console.log('Connected to MongoDB');
  const cats = await Category.find();
  const catMap = {};
  cats.forEach(c => { catMap[c.name] = c._id; });

  let added = 0;
  for (const pd of products) {
    const exists = await Product.findOne({ name: pd.name });
    if (exists) { console.log('  Skip (exists):', pd.name); continue; }
    await Product.create({
      name: pd.name,
      description: `An epic ${pd.name} experience. Dive into a world of adventure and discovery.`,
      price: pd.price,
      stock: pd.stock,
      rating: pd.rating,
      numReviews: pd.numReviews,
      featured: pd.featured,
      category: catMap[pd.cat] || null,
      image: '/uploads/placeholder.jpg',
    });
    console.log('  Created:', pd.name, pd.featured ? '[FEATURED]' : '');
    added++;
  }
  console.log(`\nDone. Added ${added} products.`);
  process.exit(0);
}).catch(err => { console.error('Error:', err.message); process.exit(1); });
