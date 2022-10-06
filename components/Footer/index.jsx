import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import { footerMenu } from '../../constants';

const Footer = () => {
	return (
		<footer>
			<div className="container section footer__container">
				<div className="footer__about">
					<div>
						<Image width={125} height={32} src={logo} alt="logo" />
						<p className="footer__text">
							Ratepunk compares hotel room prices across the major online travel
							agencies. When you search for a room, Ratepunk extension scans the
							top booking sites and runs a price comparison, so you can be
							confident in knowing you’re getting the best deal!
						</p>
					</div>
					<p className="footer__copy">
						&copy; 2021 Ratepunk. All Rights Reserved.
					</p>
				</div>
				<nav className="footer__links">
					{footerMenu.map((item, index) => {
						return (
							<div key={item.category + index} className="footer__links__item">
								<h2 className="font-noto-sans">{item.category}</h2>
								<ul>
									{item.links.map((link, index) => {
										return (
											<li key={link.id}>
												<a href={link.id}>{link.title}</a>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
