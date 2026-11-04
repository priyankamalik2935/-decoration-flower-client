import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Shop from './pages/Shop'; // Naya page import kiya

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} /> {/* Naya route add kiya */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;