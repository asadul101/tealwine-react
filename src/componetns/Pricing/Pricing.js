import React from 'react';
import PricingOption from '../PricingOpiton/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, features:[
            'Every think on Free',
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use Features',
            'Hudiesa features',
            'Ajaira features'
        ] },
        { id: 2, name: 'Medium', price: 99.05 ,features:[
            'Every think on Medium',
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use Features',
            'Hudiesa features',
            'Ajaira features'
        ] },
        { id: 3, name: 'Premium', price: 56.3,features:[
            'Every think on Premium',
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use Features',
            'Hudiesa features',
            'Ajaira features'
        ] },
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-red-500 p-12 text-white mt-10'>Best Deal of the Town.</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
           
        </div>
    );
};

export default Pricing;