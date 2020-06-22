import React, {ReactElement, useEffect} from 'react';
import $ from 'jquery';

const SideMenu = (): ReactElement => {

  const jump = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  }

  const onScroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('#jumpBtn').addClass('visible');
      } 
      else {
        $('#jumpBtn').removeClass('visible');
      }
  }

  useEffect(() => {
    window.onscroll = function(){onScroll()}
  })

  return (
    <div className='side-menu'>
      <div className='side-menu-list g-bg color-shadow'>
      	<ul>
      		<li className='side-menu-list-item notify d-flex'>2</li>
      		<li className='side-menu-list-item'>
      			<img
      				className='side-menu-list-item-icon'
					src={require(`../assets/icons/shopping-white.svg`)}
					alt='img'
				/>
      		</li>
      		<li className='side-menu-list-item divider'></li>
      		<li className='side-menu-list-item'>
      			<img
      				className='side-menu-list-item-icon'
					src={require(`../assets/icons/coupon-line.svg`)}
					alt='img'
				/>
      		</li>
      		<li className='side-menu-list-item'>
      			<img
      				className='side-menu-list-item-icon'
					src={require(`../assets/icons/coupon-line.svg`)}
					alt='img'
				/>
      		</li>
      		<li className='side-menu-list-item'>
      			<img
      				className='side-menu-list-item-icon'
					src={require(`../assets/icons/gift-line.svg`)}
					alt='img'
				/>
      		</li>
      		<li className='side-menu-list-item divider'></li>
      		<li className='side-menu-list-item'>
      			<img
      				className='side-menu-list-item-icon'
					src={require(`../assets/icons/heart-2-line.svg`)}
					alt='img'
				/>
      		</li>
      		<li className='side-menu-list-item'>
      			<img
      				className='side-menu-list-item-icon'
					src={require(`../assets/icons/history-line.svg`)}
					alt='img'
				/>
      		</li>
      	</ul>
      </div>
      <div
        className='side-menu-jump g-bg color-shadow d-flex'
        id='jumpBtn'
        onClick={() => jump()}
      >
      	<img 
    			className='side-menu-jump-icon'
    			src={require(`../assets/icons/arrow-up-s-line.svg`)}
    			alt='img'
    		/>
      </div>
    </div>
  );
};

export default SideMenu;