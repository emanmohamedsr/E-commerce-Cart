export default function ProductSkeleton() {
	return (
		<div className='card h-100' style={{ width: "18rem" }} aria-hidden='true'>
			<div
				className='d-flex justify-content-center p-3'
				style={{ height: "200px" }}>
				<div
					className='card-img-top h-100 bg-light'
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className='card-body d-flex flex-column'>
				<h5 className='card-title placeholder-glow'>
					<span className='placeholder col-6'></span>
				</h5>
				<p className='card-text flex-grow-1 placeholder-glow'>
					<span className='placeholder col-7'></span>
					<span className='placeholder col-4'></span>
					<span className='placeholder col-4'></span>
					<span className='placeholder col-6'></span>
				</p>
				<div className='mb-3 placeholder-glow'>
					<small className='text-body-secondary'>
						<span className='placeholder col-3'></span>
						<span className='placeholder col-2'></span>
					</small>
				</div>
				<div
					className='btn placeholder align-self-stretch'
					style={{ height: "38px" }}></div>
			</div>
		</div>
	);
}
