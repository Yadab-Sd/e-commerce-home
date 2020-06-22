import React, {ReactElement, useEffect, useState, useRef} from 'react';

interface CategoryItem {
	name: string;
	image: string;
}

const PopularCategories = (): ReactElement => {
	let list = [
		{
			name: 'Women\'s<br />Fashion',
			image: 'dress'
		},
		{
			name: 'Man\'s<br />Fashion',
			image: 'fashion'
		},
		{
			name: 'Baby & Kids',
			image: 'baby-clothes'
		},
		{
			name: 'Electronics',
			image: 'responsive'
		},
		{
			name: 'Home &<br />Furniture',
			image: 'chair'
		},
		{
			name: 'TVs &<br />Appliances',
			image: 'curved'
		},
		{
			name: 'Smartphones',
			image: 'vibrate'
		},
		{
			name: 'Beauty &<br />Health',
			image: 'shampoo'
		},
		{
			name: 'Shoes',
			image: 'high-heels'
		},
		{
			name: 'Women\'s<br />Fashion',
			image: 'dress'
		},
		{
			name: 'Man\'s<br />Fashion',
			image: 'fashion'
		}
	]

	const [categories, setCategories] = useState<CategoryItem[]>(list || [])
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
				setView(9)
				setStyles({width: `${getWidth()/view}px`})
			}
			if (getWidth() <= 768) {
				setView(4)
				setStyles({width: `${getWidth()/view}px`})
			}
			if (getWidth() <= 320) {
				setView(2)
				setStyles({width: `${getWidth()/view}px`})
			}
			if (getWidth() <= 150) {
				setView(1)
				setStyles({width: `${getWidth()/view}px`})
			}
		}
	},[view])

	return (
	    <div className='popular-categories py-20'>
			<h2 className='heading'>Popular Categories</h2>
			<p className=''>Shop from hundreds of categories</p>
			<div className='popular-categories-carousal my-15'>
	        	<img src={require('../assets/icons/ribbon-top-right.svg')} alt='img' className='pattern-tr' />
				<div className='popular-categories-carousal-inner box-shadow radius-7 py-40 px-20'>
					<div className='popular-categories-carousal-inner-fixed'>
						<div className='category-item' style={styles}>
							<div className='mx-20 d-flex-column'>
								<img className='category-item-img' src={require('../assets/icons/dots-menu.svg')} alt='img' />
								<h4 className='category-item-txt sub-title'>All<br />Categories</h4>
							</div>
						</div>
					</div>
					<div className='popular-categories-carousal-inner-move' ref={categoryContainerRef}>
						{
							index > 0 ? (
								<img
									src={require('../assets/icons/arrow-left-s-line-white.svg')}
									alt='img'
									className='arrow-l g-bg'
									onClick={() => ribbonMove('l')}
								/>
							):undefined
						}
						<div className='popular-categories-carousal-inner-move-ribbon' ref={categoryRibbonRef}>
							{
								categories.length ? (
									categories.map((category, index) => (
										<div className='category-item' key={index} style={styles}>
											<img
												className='category-item-img'
												src={require(`../assets/icons/categories/${category.image}.svg`)}
												alt='img'
											/>
											<h4 
												className='category-item-txt sub-title'
												dangerouslySetInnerHTML={{__html: category.name}}
											/>
										</div>
									))
								):(
									<b>No Categories</b>
								)
							}
						</div>
						{
							index + view < categories.length ? (
								<img
									src={require('../assets/icons/arrow-right-s-line-white.svg')}
									alt='img'
									className='arrow-r g-bg'
									onClick={() => ribbonMove('r')}
								/>
							):undefined
						}
					</div>
				</div>
				<img src={require('../assets/icons/ribbon-down-left.svg')} alt='img' className='pattern-bl' />
				<div className='category-search box-shadow radius-5'>
					<input type='text' placeholder='Search for category' className='category-search-input' />
					<img src={require('../assets/icons/loupe-for-cat.svg')} alt='img' className='category-search-icon' />
				</div>
			</div>
			<div className='view-more-category'>
				<button className='title upper'>VIEW MORE</button>
			</div>
		</div>
	)
}

export default PopularCategories;
