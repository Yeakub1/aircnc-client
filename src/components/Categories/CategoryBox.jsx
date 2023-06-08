import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'

const CategoryBox = ({ label, icon: Icon }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery,
            category: label,
        }
        const url = qs.stringifyUrl(
          {
            url: "/",
            query: updatedQuery,
          },
          { skipNull: true }
        );

        navigate(url);
    };
    
    return <div onClick={handleClick} className='flex flex-col justify-center items-center gap p-3 broder-b-2 hover:text-neutral-800 broder-transparent text-neutral-500'>
        <Icon size={26} />
        <div className="text-sm font-medium">
            {label}
        </div>
  </div>;
};

export default CategoryBox;