import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../ReduxToolkit/Slices/CartSlice";

export default function CartPage() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const calculateTotal = () => {
		return cart
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	const handleDeleteFromCart = (product) => {
		dispatch(deleteFromCart(product));
	};

	return (
		<div className='table-responsive'>
			<table className='table table-hover align-middle'>
				<thead className='table-light'>
					<tr>
						<th scope='col' style={{ width: "50%" }}>
							Product
						</th>
						<th scope='col' className='text-center'>
							Price
						</th>
						<th scope='col' className='text-center'>
							Quantity
						</th>
						<th scope='col' className='text-end'>
							Total
						</th>
						<th scope='col'></th>
					</tr>
				</thead>
				<tbody>
					{cart.length === 0 ? (
						<tr>
							<td colSpan='5' className='text-center py-4'>
								<div className='text-muted'>Your cart is empty</div>
							</td>
						</tr>
					) : (
						cart.map((item) => (
							<tr key={item.id}>
								<td>
									<div className='d-flex align-items-center'>
										<img
											src={item.image}
											alt={item.title}
											className='rounded me-3'
											style={{
												width: "60px",
												height: "60px",
												objectFit: "contain",
											}}
										/>
										<div>
											<h6 className='mb-0'>{item.title}</h6>
											<small className='text-muted'>{item.category}</small>
										</div>
									</div>
								</td>
								<td className='text-center'>${item.price.toFixed(2)}</td>
								<td className='text-center'>
									<div className='d-flex justify-content-center align-items-center'>
										<span className='mx-2'>{item.quantity}</span>
									</div>
								</td>
								<td className='text-end'>
									${(item.price * item.quantity).toFixed(2)}
								</td>
								<td className='text-end'>
									<button
										onClick={() => handleDeleteFromCart(item)}
										className='btn btn-sm btn-outline-danger'>
										<i className='bi bi-trash'></i>
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
				{cart.length > 0 && (
					<tfoot>
						<tr>
							<td colSpan='3'></td>
							<td className='text-end fw-bold'>Grand Total:</td>
							<td className='text-end fw-bold'>${calculateTotal()}</td>
						</tr>
					</tfoot>
				)}
			</table>
		</div>
	);
}
