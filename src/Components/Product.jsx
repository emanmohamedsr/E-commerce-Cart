import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolkit/Slices/CartSlice";

export default function Product({ product }) {
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		console.log(`Added ${product.title} to cart`);
		dispatch(addToCart(product));
	};

	return (
		<div className='card h-100' style={{ width: "18rem" }}>
			<div
				className='d-flex justify-content-center p-3'
				style={{ height: "200px" }}>
				<img
					src={product.image}
					className='card-img-top h-100'
					alt={product.title}
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className='card-body d-flex flex-column'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text flex-grow-1'>
					{product.description.length > 100
						? product.description.slice(0, 100) + "..."
						: product.description}
				</p>
				<div className='mb-3'>
					<small className='text-body-secondary'>
						Price: ${product.price} <br />
						Rating: {product.rating.rate} ({product.rating.count} in store)
					</small>
				</div>
				<button
					onClick={handleAddToCart}
					className='btn align-self-stretch'
					style={{ backgroundColor: "#4c5d3b", color: "white" }}>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
