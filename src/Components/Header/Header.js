import React from 'react'
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = ( ) => {

    const [Product , setProduct] = useContext(CategoryContext)
    return (
        <div>
            <h1>I'm header : {Product} </h1>
            <button onClick={() => setProduct('Laptop')}> Laptop </button>
            <button onClick={() => setProduct('Mobile')}> Mobile </button>
            <button onClick={() => setProduct('Camera')}> Camera </button>
        </div>
    )
}

export default Header;
