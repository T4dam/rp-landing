import React, { useState } from 'react';
import styles from '/styles/Home.module.scss';
import { navLinks } from '../../constants';
import Image from 'next/image';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className={styles.header__wrapper}>
			<h1>LOGO</h1>
			{/* <Image src={logo} alt="logo" width={100} height={100} /> */}
			<ul className={styles.header__list}>
				{navLinks.map((item, index) => (
					<li
						key={item.id}
						className={`${
							index === navLinks.length - 1 ? '' : styles.header__item
						}`}
					>
						<a href={`#${item.id}`}>{item.title}</a>
					</li>
				))}
			</ul>

			<div className={styles.drop}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className={styles.hamburger}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>

				{/* <div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient z-[99] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="flex flex-col list-none justify-end items-center flex-1">
						{navLinks.map((item, index) => (
							<li
								key={item.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
									index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
								}`}
							>
								<a href={`#${item.id}`}>{item.title}</a>
							</li>
						))}
					</ul>
				</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
