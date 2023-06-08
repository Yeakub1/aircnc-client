import React from 'react';

const CategoryBox = ({ label , icon: Icon}) => {
    return <div className='flex flex-col justify-center items-center gap p-3 broder-b-2 hover:text-neutral-800 broder-transparent text-neutral-500'>
        <Icon size={26} />
        <div className="text-sm font-medium">
            {label}
        </div>
  </div>;
};

export default CategoryBox;