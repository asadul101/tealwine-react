import React from 'react';
import Festure from '../Features/Festure';

const PricingOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-red-500 m-3 rounded-md p-3'>
            <div>
                <h2><span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-700 font-semibold'>/mon</span></h2>
                <p className='text-3xl  text-blue-300 my-5'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) =>
                    <Festure
                        key={idx}
                        feature={feature}
                    ></Festure>)
            }
            <button className='bg-yellow-500 w-full rounded-md py-2 hover:bg-orange-200 hover:text-black text-white font-bold mt-4'>By Now</button>
        </div>
    );
};
export default PricingOption;