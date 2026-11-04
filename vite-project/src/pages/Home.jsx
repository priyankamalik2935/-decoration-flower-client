import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaTruck, FaGift, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  // Sample Flowers Data (Aage chal kar yeh database se aayega)
  const flowers = [
    { id: 1, name: 'Pink Roses Bouquet', price: 499, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Sunflower Smile', price: 399, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'White Lily Basket', price: 699, image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop' },
    { id: 4, name: 'Tulip Love', price: 549, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="relative overflow-hidden bg-blush min-h-screen">
      {/* Floating Emojis */}
      <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce">🌸</div>
      <div className="absolute top-40 right-20 text-5xl opacity-30 animate-pulse">🌷</div>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center z-10 relative">
        <h1 className="font-display text-6xl md:text-7xl text-rose-dark mb-6">
          Bloom with Love 💐
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-body">
          Fresh flowers, handpicked with love. Chat with our florists & order your perfect bouquet!
        </p>
        
      </section>
              <div className="flex justify-center gap-4">
          {/* Button ko Link se replace kiya */}
          <Link to="/shop" className="btn-cute text-lg flex items-center gap-2">
            🌷 Shop Flowers
          </Link>
          
          <Link to="/chat" className="bg-white text-rose-dark border-2 border-rose font-semibold px-6 py-3 rounded-full hover:bg-rose hover:text-white transition-all">
            💬 Chat with Florist
          </Link>
        </div>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-12 max-w-6xl mx-auto z-10 relative">
        {[
          { icon: <FaTruck />, title: 'Free Delivery', desc: 'On orders above ₹500' },
          { icon: <FaHeart />, title: 'Made with Love', desc: 'Fresh daily flowers' },
          { icon: <FaGift />, title: 'Gift Wrapping', desc: 'Cute packaging free' }
        ].map((f, i) => (
          <div key={i} className="card-cute p-8 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-4xl text-rose mb-4 flex justify-center">{f.icon}</div>
            <h3 className="font-display text-xl mb-2 text-gray-800">{f.title}</h3>
            <p className="text-gray-500 text-sm font-body">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* --- NEW: FLOWER SHOP SECTION --- */}
      <section className="px-10 pb-20 max-w-7xl mx-auto z-10 relative">
        <h2 className="font-display text-4xl text-center text-rose-dark mb-10">
          🌸 Our Beautiful Bouquets
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {flowers.map((flower) => (
            <div key={flower.id} className="card-cute overflow-hidden group">
              <div className="overflow-hidden h-56">
                <img 
                  src={flower.image} 
                  alt={flower.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-5 text-center bg-white">
                <h3 className="font-display text-lg text-gray-800 mb-1">{flower.name}</h3>
                <p className="text-rose-dark font-bold text-xl mb-4">₹{flower.price}</p>
                <button className="w-full bg-rose hover:bg-rose-dark text-white py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-md">
                  <FaShoppingCart /> Add to Cart 💕
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;