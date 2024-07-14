import React, { useState } from 'react';
import Link from './componetns/Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    // const[open,setOpen]=useState(false);
    const[open,setOpen]=useState((false));
    const routes=[
        {id:1, name:'Home',path:'/home'},
        {id:1, name:'Product',path:'/Product'},
        {id:1, name:'Contract',path:'/Contract'},
        {id:1, name:'Oreades',path:'/Oreades'},
        {id:1, name:'Link',path:'/Link'}
      ];
    return (
        <nav className='bg-purple-200 w-full'>
           <div onClick={()=> setOpen(!open)} className="size-6 w-6 h-6 md:hidden" >
           {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
           </div>
            <ul className={ `bg-purple-200 md:flex w-full md:static justify-center absolute duration-500 ease-in ${open ? 'top-6': 'top-[-1200px]'}`}>
          {
            routes.map(route=><Link key={route.id} route={route}></Link>)
          }
      </ul>
        </nav>
    );
};

// menu bar fabeicon 
// {/* useState declier korer por first part -------------
//              <Bars3Icon onClick={()=>setOpen(!open)} className="size-6"/>
//                <span>{ open ? 'open':'clos'}</span> */}
//                {/* tarpor scend Part ------------
//                 {
//                 open ? 
//                 <XMarkIcon onClick={()=>setOpen(!open)} className="size-6"/>
//                 :<Bars3Icon onClick={()=>setOpen(!open)} className="size-6"/>
//                } */}

export default NavBar;