import React, {ReactElement} from 'react';

const Header = (): ReactElement => {
  return (
    <header className="header">
	    <div className="container">
	      <div className="wrapper">
	      	<div className="logo py-20 d-flex">
	      		<a href='/'><img alt='img' src={require('../../../assets/images/logo.png')} /></a>
	      	</div>
	      	<div className="search-bar d-flex-sb">
	      		<div className="search-bar-l d-flex-sb">
	      			<button className='menu-icon'><img alt='img' src={require('../../../assets/icons/rss-line.svg')} /></button>
	      			<button className='menu-icon'><img alt='img' src={require('../../../assets/icons/customer-service-2-line.svg')} /></button>
	      			<button className='menu-icon'><img alt='img' src={require('../../../assets/icons/menu-line.svg')} /></button>
	      		</div>
	      		<div className="search-bar-m d-flex">
		      		<div className="search-bar-m-whole radius-5 box-shadow d-flex">
		      			<div className="search-bar-m-whole-rest px-15 d-flex">
		      				<div className="search-bar-m-whole-rest-select d-flex d-block">
		      					<select>
		      						<option>All Categories</option>
		      						<option>Categories 1</option>
		      						<option>Categories 2</option>
		      						<option>Categories 3</option>
		      					</select>
		      					<button><img alt='img' className='arrow-below-icon' src={require('../../../assets/icons/arrow-drop-down-line.svg')} /></button>
		      				</div>
		      				<input type='text' className='px-10' placeholder={'I\'m looking for'} />
		      				<img alt='img' className='input-mic' src={require('../../../assets/icons/mic-2-line.svg')} />
		      			</div>
		      			<div className="search-bar-m-whole-icon g-bg d-flex p-10">
		      				<button><img alt='img' src={require('../../../assets/icons/loupe.svg')} /></button>
		      			</div>
		      		</div>
	      		</div>
	      		<div className="search-bar-r d-flex-sb">
	      			<button className='menu-icon'>
	      				<img alt='img' src={require('../../../assets/icons/shopping-bag-3-line.svg')} />
	      				<span className='notification d-flex'>2</span>
	      			</button>
	      			<button className='menu-icon'><img alt='img' src={require('../../../assets/icons/notification-3-line.svg')} /></button>
	      			<button className='menu-icon'><img alt='img' src={require('../../../assets/icons/user-line.svg')} /></button>
	      		</div>
	      	</div>
	      	<div className="menu d-flex">
		      	<div className="py-15 d-flex px-20">
			      	<div className="menu-l d-flex">
				      	<div className="menu-item">
				      		<a href='' className='menu-item-txt bold'>Categories</a>
		      				<button><img alt='img' className='menu-item-icon' src={require('../../../assets/icons/arrow-down-s-line.svg')} /></button>
				      	</div>
				      	<div className="menu-item b-right">
				      		<a href='' className='menu-item-txt bold'>Brands</a>
		      				<button><img alt='img' className='menu-item-icon' src={require('../../../assets/icons/arrow-down-s-line.svg')} /></button>
				      	</div>
				      	<div className="menu-item">
				      		<a href='' className='menu-item-txt bold'>Deals!</a>
				      	</div>
			      	</div>
			      	<div className="menu-r d-flex">
			      		<div className="menu-item">
				      		<a href='' className='menu-item-txt grey'>Community</a>
				      	</div>
				      	<div className="menu-item">
				      		<a href='' className='menu-item-txt grey'>Blog</a>
				      	</div>
			      	</div>
		      	</div>
	      	</div>
	      </div>
	    </div>
    </header>
  );
};

export default Header;