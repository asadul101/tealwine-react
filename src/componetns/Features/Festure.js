import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Festure = ({feature}) => {
    return (
        <div className='flex items-center'>
        <CheckCircleIcon className="size-6 text-green-600" />
        <p className='ml-2'>{feature}</p>
       
        </div>
       
    );
};

export default Festure;