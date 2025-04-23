import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
	const cart = useSelector((state) => state.cart);
	let cartCount = cart.length;

	return (
		<nav className='mb-5'>
			<ul className='fixed-top bg-white nav nav-tabs align-items-center'>
				<li className='nav-item'>
					<Link
						to='/'
						className='nav-link active'
						aria-current='page'
						style={{ color: "#b56027", fontWeight: "bold" }}>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link'
						to='/products'
						style={{ color: "#4c5d3b", fontWeight: "bold" }}>
						Products
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link position-relative p-2'
						to='/cart'
						style={{ color: "#4c5d3b", fontWeight: "bold" }}>
						<i className='bi bi-cart fs-5'></i>
						<span className='ms-1'>Cart</span>
						{cartCount > 0 && (
							<span
								className='position-absolute top-20 start-100 translate-middle badge rounded-circle bg-danger p-1.25'
								style={{ fontSize: "0.6rem" }}>
								{cartCount}
								<span className='visually-hidden'>cart items</span>
							</span>
						)}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
