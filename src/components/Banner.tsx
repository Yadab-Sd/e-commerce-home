import React, {ReactElement} from 'react';

const Banner = (): ReactElement => {
  return (
    <div className='banner'>
      <div className='py-20'>
        <img src={require('../assets/images/image52.png')} alt='img' className='banner-img' />
      </div>
    </div>
  );
};

export default Banner;