
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaTimes,
  FaTrash
} from "react-icons/fa";
import { Link } from "react-router-dom";

// 50 different real flower photographs
const flowerList = [
  {
    name: "Eucalyptus Floral Bouquet",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/annie-spratt-hX_hf2lPpUU-unsplash-700x1050.jpg"
  },
  {
    name: "California Poppy",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/sergey-shmidt-koy6FlCCy5s-unsplash-700x467.jpg"
  },
  {
    name: "Pink Gerbera",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/andrew-small-EfhCUc_fjrU-unsplash-700x467.jpg"
  },
  {
    name: "Orange Marigold",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/repentand-seekchristjesus-nqSUnXINsp4-unsplash-700x933.jpg"
  },
  {
    name: "Cherry Blossom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/masaaki-komori-NoXUQ54pDac-unsplash-700x1049.jpg"
  },
  {
    name: "White Rose",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/annie-spratt-pDGNBK9A0sk-unsplash-700x933.jpg"
  },
  {
    name: "Pink Tulip",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/roonz-nl-ATgfRqpFfFI-unsplash-700x394.jpg"
  },
  {
    name: "Blue Hydrangea",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/annie-spratt-vs6a4EHj_Ro-unsplash-700x1050.jpg"
  },
  {
    name: "White Lilac",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/veri-ivanova-whOkVvf0_hU-unsplash-700x467.jpg"
  },
  {
    name: "Purple Flowers",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/artiom-vallat-mFrLqRZMx7o-unsplash-700x1050.jpg"
  },
  {
    name: "Pink Rose",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/providence-doucet-FjwtL3YSZ9U-unsplash-700x771.jpg"
  },
  {
    name: "Pink Lily",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/tanalee-youngblood-kkJuQhp9Kw0-unsplash-700x700.jpg"
  },
  {
    name: "Dried Flower Bouquet",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/12/annie-spratt-Q8ZHvLRTdns-unsplash.jpg"
  },
  {
    name: "White Cherry Blossom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/j-lee-yRXuXvy4sQ4-unsplash-700x1050.jpg"
  },
  {
    name: "Blue Iris",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/erda-estremera-6ZyLeconAsg-unsplash-700x1049.jpg"
  },
  {
    name: "Pink Dahlia",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/phillip-larking-G7zQ_y2cSGk-unsplash-700x467.jpg"
  },
  {
    name: "Pink Orchid",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/zoltan-tasi-PN8Un1ywbE8-unsplash-700x945.jpg"
  },
  {
    name: "Calla Lily",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/allec-gomes-kXqHIpoM6Zg-unsplash-700x980.jpg"
  },
  {
    name: "Yellow Hypericum",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/roonz-nl-vjDbHCjHlEY-unsplash-700x394.jpg"
  },
  {
    name: "Sakura Blossom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/kristine-tanne-GKMng7uwpMY-unsplash-700x1050.jpg"
  },
  {
    name: "Bird of Paradise",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/david-brooke-martin-0DLKy4IPoc8-unsplash-700x467.jpg"
  },
  {
    name: "Apple Blossom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/marivi-pazos-4kX1uoAAohY-unsplash-700x467.jpg"
  },
  {
    name: "Orange Poppy",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/susanne-schwarz-qUACwpVjwoM-unsplash-700x452.jpg"
  },
  {
    name: "Red Poppy Bouquet",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/larisa-birta-G-L2T7t3kkU-unsplash-700x1049.jpg"
  },
  {
    name: "White Daisy",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/william-warby-Jhz41Hjix8w-unsplash-700x933.jpg"
  },
  {
    name: "Grape Hyacinth",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/annie-spratt-wnd7te34T-0-unsplash-700x1050.jpg"
  },
  {
    name: "Yellow Mimosa",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/tomoko-uji-MUPCSMPgh6k-unsplash-700x1050.jpg"
  },
  {
    name: "Blue Nemophila",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/sora-sagano-F6ZzivdSQ5k-unsplash-700x467.jpg"
  },
  {
    name: "Wildflower Bouquet",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/nature-uninterrupted-photography-v-3NQ3pmWkY-unsplash-700x467.jpg"
  },
  {
    name: "Pink Amaryllis",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/saffu-NawY_lNtshQ-unsplash-700x875.jpg"
  },
  {
    name: "Lavender",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/sharon-mccutcheon-SavQfLRm4Do-unsplash-700x1050.jpg"
  },
  {
    name: "Pink Peonies",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/cristiane-teston-y-5pd18ETbg-unsplash-700x700.jpg"
  },
  {
    name: "Garden Rose Bouquet",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/annie-spratt-01Wa3tPoQQ8-unsplash-700x700.jpg"
  },
  {
    name: "Red Geranium",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/amir-esrafili-X8Cao0DbiDg-unsplash-700x1038.jpg"
  },
  {
    name: "Purple Iris",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/flavia-bon-Sw-tMGNlU3o-unsplash-700x933.jpg"
  },
  {
    name: "Heather Flowers",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/daiga-ellaby-ClWvcrkBhMY-unsplash-700x467.jpg"
  },
  {
    name: "Blue Hydrangea Garden",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/karina-vorozheeva-gXriuz3PG5I-unsplash-700x1050.jpg"
  },
  {
    name: "Lavender Field",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/leonard-cotte-bIHJ4oxQlYs-unsplash-700x467.jpg"
  },
  {
    name: "Orange Tulip",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/wai-siew-zIWt4CuUGK4-unsplash-700x1050.jpg"
  },
  {
    name: "Mixed Carnations",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/fly-d-juIZpdEqb2k-unsplash-700x1050.jpg"
  },
  {
    name: "Pink Rose Bloom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/siora-photography-P8rPP_AllZw-unsplash-700x1050.jpg"
  },
  {
    name: "Lilac Blossom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/monika-grabkowska-tv-d1R3FItE-unsplash-700x1050.jpg"
  },
  {
    name: "Pink Gerbera Garden",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/yousef-espanioly-w11m2Fy_FXY-unsplash-700x466.jpg"
  },
  {
    name: "Pink Chrysanthemum",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/elizabeth-kay-stLtvg_x2HQ-unsplash-700x525.jpg"
  },
  {
    name: "Pink Flower Blossom",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/patrick-fore-NBLh33lL6Ts-unsplash-700x467.jpg"
  },
  {
    name: "Red Flower Macro",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/soumalya-mandal-nYONHVuUBrw-unsplash-700x1065.jpg"
  },
  {
    name: "Deep Red Flower",
    img: "https://www.jotform.com/blog/wp-content/uploads/2022/02/john-thomas-C8eNzgBXzYs-unsplash-700x1050.jpg"
  },
  {
    name: "Colorful Mixed Bouquet",
    img: "https://images.unsplash.com/photo-1650561958721-d5fdc4331cd4?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Red Rose Macro",
    img: "https://images.unsplash.com/photo-1667851816897-e776481490ac?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Yellow Sunflower",
    img: "https://images.unsplash.com/photo-1566669086984-077347c1f4bb?auto=format&fit=crop&w=700&q=80"
  }
];

// Create products
const products = flowerList.map((flower, index) => ({
  id: index + 1,
  name: flower.name,
  price: 399 + (index * 47) % 1000,
  image: flower.img
}));

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="bg-blush min-h-screen py-10 px-4 md:px-6 relative">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <Link
            to="/"
            className="text-rose-dark font-semibold hover:underline"
          >
            ← Back to Home
          </Link>

          <h1 className="font-display text-3xl md:text-4xl text-rose-dark hidden md:block">
            🌸 All Bouquets
          </h1>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-white p-3 rounded-full shadow-md text-rose-dark"
          >
            <FaShoppingCart size={20} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}

          </button>
        </div>

        {/* PRODUCT COUNT */}
        <p className="text-center text-gray-500 mb-6">
          Explore our 50 beautiful flower collections 🌷
        </p>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((flower) => (

            <div
              key={flower.id}
              className="card-cute overflow-hidden group bg-white"
            >

              <div className="overflow-hidden h-56 bg-gray-100">

                <img
                  src={flower.image}
                  alt={flower.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/600x500/fce7f3/9d174d?text=Flower";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>

              <div className="p-5 text-center">

                <h3 className="font-display text-lg text-gray-800 mb-2">
                  {flower.name}
                </h3>

                <p className="text-rose-dark font-bold text-xl mb-4">
                  ₹{flower.price}
                </p>

                <button
                  onClick={() => addToCart(flower)}
                  className="w-full bg-rose hover:bg-rose-dark text-white py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                >
                  <FaShoppingCart />
                  Add to Cart 💕
                </button>

              </div>
            </div>

          ))}

        </div>

      </div>

      {/* CART SIDEBAR */}
      {isCartOpen && (

        <div className="fixed inset-0 z-50 flex justify-end">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">

            {/* Cart Header */}
            <div className="p-5 bg-rose text-white flex justify-between items-center">

              <h2 className="text-xl font-display font-bold">
                Your Cart 🛒 ({cart.length})
              </h2>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full"
              >
                <FaTimes size={20} />
              </button>

            </div>

            {/* Cart Products */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-blush">

              {cart.length === 0 ? (

                <p className="text-center text-gray-500 mt-10">
                  Your cart is empty. Add some flowers! 🌷
                </p>

              ) : (

                cart.map((item, index) => (

                  <div
                    key={`${item.id}-${index}`}
                    className="flex gap-4 bg-white p-3 rounded-xl shadow-sm items-center"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />

                    <div className="flex-1">

                      <h4 className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </h4>

                      <p className="text-rose-dark font-bold">
                        ₹{item.price}
                      </p>

                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <FaTrash />
                    </button>

                  </div>

                ))

              )}

            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (

              <div className="p-5 border-t border-gray-200 bg-white">

                <div className="flex justify-between mb-4 font-semibold text-lg">

                  <span>Total:</span>

                  <span className="text-rose-dark">
                    ₹{total.toLocaleString("en-IN")}
                  </span>

                </div>

                <button className="w-full btn-cute py-4">
                  Proceed to Checkout 💳
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
};

export default Shop;
