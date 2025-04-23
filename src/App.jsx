import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/cart' element={<CartPage />} />
			</Routes>
		</>
	);
}

export default App;
