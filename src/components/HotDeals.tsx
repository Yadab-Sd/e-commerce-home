import React, {ReactElement, useEffect, useState, useRef} from 'react';

interface HotDealsItem {
	image: string;
}

const HotDeals = (): ReactElement => {
	let list = [
		{
			image: 'Image 28'
		},
		{
			image: 'Image 65'
		},
		{
			image: 'Image 29'
		},
		{
			image: '26810607763486'
		},
		{
			image: '26810604716062'
		},
		{
			image: '26810604552222@2x'
		}
	]

	const [categories, setCategories] = useState<HotDealsItem[]>(list || [])
	const [index, setIndex] = useState(0)
	const [styles, setStyles] = useState({width: '100px'})
	const [view, setView] = useState(9)
	const categoryContainerRef = useRef(null)
	const categoryRibbonRef = useRef(null)

	useEffect(() => (
		setCategories(list)
	),[])
	
	const getWidth = () => {
		if(categoryContainerRef.current) {
			return (categoryContainerRef.current as any).offsetWidth;
		}
		return 0;
	}

	const ribbonMove = (dir: string) => {
		if(dir === 'r') {
			(categoryRibbonRef.current as any).style.transform = `translateX(-${parseInt(styles.width)*(index+1)}px)`;
			setIndex(index+1)
		}
		else if(dir === 'l') {
			(categoryRibbonRef.current as any).style.transform = `translateX(${-parseInt(styles.width)*(index) + parseInt(styles.width)}px)`;
			setIndex(index-1)
		}
	}
	
	useEffect(() => {
		if (getWidth()) {
			if(getWidth() > 768) {
				setView(4)
				setStyles({width: `${getWidth()/view}px`})
			}
			if (getWidth() <= 768) {
				setView(2)
				setStyles({width: `${getWidth()/view}px`})
			}
			if (getWidth() <= 320) {
				setView(1)
				setStyles({width: `${getWidth()/view}px`})
			}
		}
	},[view])

	return (
	    <div className='hot-deals py-40'>
	    	<div className='hot-deals-top mb-15'>
	    		<h2 className='heading'>Hot Deals</h2>
	    		<div className='hot-deals-top-r d-flex-sb'>
	    			<button className='title'>VIEW MORE</button>
    				<div className='hot-deals-top-r-buttons'>
								<img
									src={require('../assets/icons/arrow-left-s-line-white.svg')}
									alt='img'
									className={index > 0 ? 'arrow-l g-bg': 'arrow-l disabled'}
									onClick={() => index > 0 ? ribbonMove('l'):undefined}
								/>
								<img
									src={require('../assets/icons/arrow-right-s-line-white.svg')}
									alt='img'
									className={index + view < categories.length ? 'arrow-r g-bg': 'arrow-r disabled'}
									onClick={() => index + view < categories.length ? ribbonMove('r'): undefined}
								/>
    				</div>
	    		</div>
	    	</div>
			<div className='hot-deals-carousal'>
				<div className='hot-deals-carousal-inner'>
					<div className='hot-deals-carousal-inner-move' ref={categoryContainerRef}>
						<div className='hot-deals-carousal-inner-move-ribbon' ref={categoryRibbonRef}>
							{
								categories.length ? (
									categories.map((categorie, i) => (
										<div className='category-item' key={i} style={styles}>
											<img
											className={
												index === i
												? (i === index + view -1 ? 'category-item-img pr-0 pl-0':'category-item-img pl-0')
												:(i === index + view -1 ? 'category-item-img pr-0':'category-item-img')
											}
												src={require(`../assets/images/${categorie.image}.png`)}
												alt='img'
											/>
										</div>
									))
								):(
									<b>No Hot Deals</b>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HotDeals;
