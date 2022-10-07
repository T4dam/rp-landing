import React, { useState } from 'react';
import { navLinks } from '../../constants';
import Image from 'next/image';
import logo from './../../public/logo.svg';

const Navbar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	return (
		<nav className="navigation">
			<div className="navigation__container">
				<div className="logo__container">
					<Image
						src={logo}
						width={125}
						height={32}
						className="brand-name"
						alt="logo"
					/>
				</div>

				<button
					className="hamburger"
					onClick={() => {
						setIsNavExpanded(!isNavExpanded);
					}}
				>
					{isNavExpanded && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#BDC1C3"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#1F343E"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
					{!isNavExpanded && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</button>
				<div
					className={
						isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
					}
				>
					<ul>
						<li>
							<a href="">Chrome extention</a>
						</li>
						<li>
							<a href="">Price Comparison</a>
						</li>
						<li>
							<a href="">Blog</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
