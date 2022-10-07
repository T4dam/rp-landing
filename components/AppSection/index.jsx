import React from 'react';
import Image from 'next/image';
import chrome_icon from '../../public/images/chrome_icon.svg';
import apple_store_icon from '../../public/images/apple_store_icon.svg';
import Link from 'next/link';

const AppSection = () => {
	return (
		<div className="apps__container">
			<div className="app_block">
				{/* <div>ImG</div> */}
				<Link href={'/'}>
					<a className="app_box">
						<Image src={chrome_icon} alt="Chrome app" />
						<div className="app__box__text">
							<p>available in the</p>
							<p className="bold">chrome web store</p>
						</div>
					</a>
				</Link>
				<Link href={'/'}>
					<a className="app_box">
						<Image src={apple_store_icon} alt="Apple app" />
						<div className="app__box__text">
							<p>available in the</p>
							<p className="bold">apple app store</p>
						</div>
					</a>
				</Link>
				<div>
					<p className="app_box_rating">
						★★★★★ <span>Chrome Store reviews</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AppSection;
