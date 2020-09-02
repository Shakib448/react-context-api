import React from 'react'
import Categoris from '../Categoris/Categoris';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {

    const count = useContext(CategoryContext);

    return (
        <div style={{border: '1px solid red'}}>
            <h1>I am home {count} </h1>
            <Categoris/>
        </div>
    )
}

export default Home;
