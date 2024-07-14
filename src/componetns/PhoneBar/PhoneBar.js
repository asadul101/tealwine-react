import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar,XAxis,YAxis,Tooltip, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phone, setPhone] = useState([]);
    useEffect(() => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>console.log(data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneLoad = data.data.data;
                const phoneData = phoneLoad.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone
                })
                console.log(phoneData)
                setPhone(phoneData)
            });
    }, []);

    return (
      
        <div>
            <h1 className='text-5xl font-bold mt-5 ml-5 text-purple-500 '>This is a BarChart.</h1>
            <BarChart width={500} height={400} data={phone}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </BarChart>
        </div>
    );
};

export default PhoneBar;