import React from 'react';
import invite_friends from '../../public/images/invite_friends.svg';
import collect_coins from '../../public/images/collect_coins.svg';
import get_voucher from '../../public/images/get_voucher.svg';
import Image from 'next/image';

const Tutorial = () => {
	return (
		<div className="tutorial__container">
			<div className="tutorial__item">
				<div>
					<Image src={invite_friends} alt="Open mail with a RatePunk letter" />
				</div>

				<div className="tutorial__text">
					<p className="subtitle">STEP 1</p>
					<h2>INVITE FRIENDS</h2>
					<p>Refer friends with your unique referral link.</p>
				</div>
			</div>
			<div className="tutorial__item">
				<div>
					<Image src={collect_coins} alt="Hand holding a coin" />
				</div>

				<div className="tutorial__text reverse">
					<p className="subtitle">STEP 2</p>
					<h2>COLLECT COINS</h2>
					<p>
						Get 1 coin for each friend that installs our extension using your
						referral link.
					</p>
				</div>
			</div>
			<div className="tutorial__item">
				<div>
					<Image src={get_voucher} alt="Open mail with a RatePunk letter" />
				</div>

				<div className="tutorial__text">
					<p className="subtitle">STEP 3</p>
					<h2>GET VOUCHER</h2>
					<p>
						Redeem for a $20 hotel booking voucher once you collect 20 coins.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tutorial;
