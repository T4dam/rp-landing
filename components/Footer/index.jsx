import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import { footerContacts, footerLinks } from '../../constants';
import Link from 'next/link';

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
				<nav className="footer__links__container">
					<div className="footer__links-block">
						{footerLinks.map((item, index) => {
							return (
								<div key={item.title + index} className="footer__links__item">
									<h2 className="font-noto-sans">{item.title}</h2>
									<ul>
										{item.links.map((link, index) => {
											return (
												<li key={link.title + index}>
													<Link href={link.href}>
														<a>{link.title}</a>
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
					<div className="footer__contacts">
						{footerContacts.map((item, index) => {
							return (
								<div key={item.title + index}>
									<h2 className="font-noto-sans">{item.title}</h2>

									{item.type === 'social_block' && (
										<div className="social__icons">
											{item.links.map((link, index) => {
												return (
													<Link key={link.title + index} href={link.href}>
														<a className="social-icon">
															<Image
																src={'/images/instagram.svg'}
																width={16}
																height={16}
															/>
														</a>
													</Link>
												);
											})}
										</div>
									)}
									{item.type === 'contact_block' && (
										<ul className={item.type === 'social_block' ? '' : ''}>
											{item.links.map((link, index) => {
												return (
													<li key={link.title + index}>
														<Link href={link.href}>
															<a>{link.title}</a>
														</Link>
													</li>
												);
											})}
										</ul>
									)}
								</div>
							);
						})}
					</div>
				</nav>
				<p className="footer__copy__mobile">
					&copy; 2021 Ratepunk. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
