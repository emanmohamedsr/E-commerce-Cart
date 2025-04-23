import img1 from "../assets/carousel-1.jpg?url";
import img2 from "../assets/carousel-2.jpg?url";
import img3 from "../assets/carousel-3.jpg?url";

export default function Carousel() {
	return (
		<div
			className='container-fluid p-0'
			style={{ height: "calc(100vh - 56px)" }}>
			<div
				id='carouselExampleCaptions'
				className='carousel slide h-100'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='1'
						aria-label='Slide 2'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='2'
						aria-label='Slide 3'></button>
				</div>
				<div className='carousel-inner h-100'>
					<div className='carousel-item active h-100'>
						<img
							src={img1}
							className='d-block w-100 h-100 object-fit-cover'
							alt='Summer Collection'
						/>
						<div className='carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-4'>
							<h3 className='display-5 fw-bold'>Summer Collection</h3>
							<p className='fs-4'>
								Discover our vibrant summer styles - Up to 50% OFF!
							</p>
						</div>
					</div>
					<div className='carousel-item h-100'>
						<img
							src={img2}
							className='d-block w-100 h-100 object-fit-cover'
							alt='New Arrivals'
						/>
						<div className='carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-4'>
							<h3 className='display-5 fw-bold'>New Arrivals</h3>
							<p className='fs-4'>
								Fresh styles just landed! Limited stock available.
							</p>
						</div>
					</div>
					<div className='carousel-item h-100'>
						<img
							src={img3}
							className='d-block w-100 h-100 object-fit-cover'
							alt='Flash Sale'
						/>
						<div className='carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-4'>
							<h3 className='display-5 fw-bold'>Flash Sale</h3>
							<p className='fs-4'>
								24 hours only! 70% OFF selected items. Hurry!
							</p>
						</div>
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
}
