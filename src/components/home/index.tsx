import React, {ReactElement} from 'react';
import PopularCategories from '../PopularCategories';
import HappyShopping from '../HappyShopping';
import HotDeals from '../HotDeals';
import Banner from '../Banner';
import SideMenu from '../SideMenu';

const Home = (): ReactElement => {
  return (
    <div className='home-content'>
	    <div className='container'>
	    	<Banner />
	    	<PopularCategories />
			<HappyShopping />
			<HotDeals />
			<SideMenu />
	    </div>
    </div>
  );
}

export default Home;
