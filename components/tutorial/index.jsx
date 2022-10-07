import React from 'react';
import Image from 'next/image';
import { tutorial } from '../../constants';

const Tutorial = () => {
	return (
		<div className="tutorial__container">
			{tutorial.map((item, index) => {
				return (
					<div key={item.id} className="tutorial__item">
						<div>
							<Image
								src={item.img}
								width={144}
								height={144}
								alt={item.alt}
								loading={'lazy'}
								placeholder="blur"
								blurDataURL={item.img}
							/>
						</div>

						<div className="tutorial__text">
							<p className="subtitle">{item.id}</p>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Tutorial;
