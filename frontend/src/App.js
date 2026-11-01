import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SoundProvider } from "@/lib/sound";
import Home from "@/pages/Home";
import Previews from "@/pages/Previews";

function App() {
  return (
    <SoundProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/previews" element={<Previews />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" />
    </SoundProvider>
  );
}

export default App;
