import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/landingPages"
import DetailProduct from "./pages/detailProduct"
import AddProduct from "./pages/addProduct"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/detail-product/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
