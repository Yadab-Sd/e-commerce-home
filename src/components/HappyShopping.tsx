import React, {ReactElement, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

interface FeatureItem {
	icon: string;
	title: string;
	subtitle: string;
	link: string;
}

const HappyShopping = (): ReactElement => {
	let list = [
		{
			icon: 'gamepad-line',
			title: 'Game<br />Land',
			subtitle: 'Play, Earn and Shop on<br />Gameland',
			link: '/'
		},
		{
			icon: 'coupon-3-line-black',
			title: 'Offer<br />Zone',
			subtitle: 'Stay Turned for Special<br />Offers & Deals',
			link: '/'
		},
		{
			icon: 'emotion-happy-line',
			title: 'Mighty<br />Deals',
			subtitle: 'Get Mighty Deals<br />Beyound Limit',
			link: '/'
		},
		{
			icon: 'store-2-line',
			title: 'Z<br />Mall',
			subtitle: 'For International <br /> Brand Lovers',
			link: '/'
		},
		{
			icon: 'dvd-line',
			title: 'Z<br />Pay',
			subtitle: 'Bill Payment <br />and Recharge',
			link: '/'
		},
		{
			icon: 'earth-line',
			title: 'Z<br />Digital',
			subtitle: 'Enjoy Your Favourite<br />Digital Services',
			link: '/'
		}
	]

	const [features, setFeatures] = useState<FeatureItem[]>(list || [])

	useEffect(() => {
		setFeatures(list)
	},[])

	return (
	    <div className='popular-categories happy-shopping py-40'>
			<h2 className='heading'>Happy Shopping</h2>
			<p className=''>Enjoy unique online shopping enperience that makes you smile</p>
			<div className='happy-shopping-inner my-15'>
				<div className='row'>
					{
						features.length ? (
							features.map((feature, index) => (
								<div className='col-12 col-sm-6 col-md-4 col-lg-2' key={index}>
									<div
										className='feature-item box-shadow radius-7 my-10 featureItem p-15 pb-10 pr-10'
									>
										<img
											className='feature-item-icon mb-5'
											src={require(`../assets/icons/${feature.icon}.svg`)}
											alt='img'
										/>
										<h4 
											className='feature-item-title title'
											dangerouslySetInnerHTML={{__html: feature.title}}
										/>
										<p 
											className='feature-item-subtitle sub-title mb-0 grey'
											dangerouslySetInnerHTML={{__html: feature.subtitle}}
										/>
										<Link to={feature.link} className='feature-item-link'>
											<img
												className='feature-item-link-icon'
												src={require(`../assets/icons/external-link-line.svg`)}
												alt='>'
											/>
										</Link>
									</div>
								</div>
							))
						):(
							<b>No Features</b>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default HappyShopping;
