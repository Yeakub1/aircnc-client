import React from 'react';
import Heading from '../Shard/Heading/Heading';

const Header = () => {
    return (
      <>
        <Heading
          title={"No Room Avable the Category"}
          subtitle={"Please Select The Others Category"}
        ></Heading>

        <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img draggable='false'
                    className='object-cover w-full'
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""
          />
        </div>
      </>
    );
};

export default Header;