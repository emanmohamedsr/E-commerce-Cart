import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ReduxToolkit/Slices/ProductsSlice";
import Product from "../Components/Product";
import ProductSkeleton from "../Components/ProductSkeleton";

export default function ProductsPage() {
	const { products, loading, error } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	if (error)
		return <div className='alert alert-danger'>Error loading products</div>;

	return (
		<div className='container mt-4'>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'>
				{loading
					? Array(6)
							.fill(0)
							.map((_, index) => (
								<div
									className='col d-flex justify-content-center'
									key={`skeleton-${index}`}>
									<ProductSkeleton />
								</div>
							))
					: products.map((product) => (
							<div
								className='col d-flex justify-content-center'
								key={product.id}>
								<Product product={product} />
							</div>
					  ))}
			</div>
		</div>
	);
}
