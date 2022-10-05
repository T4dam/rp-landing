import React, { useState } from 'react';
import styles from '/styles/Home.module.scss';
import { navLinks } from '../../constants';
// import Image from 'next/image';
import logo from './../../public/logo.svg';

const Navbar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	return (
		<nav className="navigation">
			{/* <img src={logo} className="brand-name" alt="logo" /> */}
			<div src={logo} className="brand-name" alt="logo">
				LOGO
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
						stroke-width="1.5"
						stroke="#1F343E"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
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
		</nav>
		// <nav className={styles.header__wrapper}>
		// 	<h1 className="brand-name">LOGO</h1>
		// 	{/* <Image src={logo} alt="logo" width={100} height={100} /> */}
		// 	<ul className={styles.header__list}>
		// 		{navLinks.map((item, index) => (
		// 			<li
		// 				key={item.id}
		// 				className={`${
		// 					index === navLinks.length - 1 ? '' : styles.header__item
		// 				}`}
		// 			>
		// 				<a href={`#${item.id}`}>{item.title}</a>
		// 			</li>
		// 		))}
		// 	</ul>

		// 	<button onClick={() => setToggle((prev) => !prev)} className="hamburger">
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			fill="none"
		// 			viewBox="0 0 24 24"
		// 			strokeWidth={1.5}
		// 			stroke="currentColor"
		// 			className="w-6 h-6"
		// 		>
		// 			<path
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		// 			/>
		// 		</svg>
		// 	</button>

		// 	<div className={styles.dropdown}>
		// 		<div className={`${toggle ? 'flex' : 'hidden'}`}>
		// 			<ul className="flex flex-col list-none justify-end items-center flex-1">
		// 				{navLinks.map((item, index) => (
		// 					<li
		// 						key={item.id}
		// 						className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
		// 							index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
		// 						}`}
		// 					>
		// 						<a href={`#${item.id}`}>{item.title}</a>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};

export default Navbar;
