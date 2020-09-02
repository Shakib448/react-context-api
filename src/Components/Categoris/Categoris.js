import React, { useEffect, useState } from 'react'
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import {useContext} from 'react'
import {CategoryContext} from '../../App'

const Categoris = () => {

    const AllProducts = [
        {
            name: 'Lenevo',
            category: 'laptop'
        }, {
            name: 'Dell',
            category: 'laptop'
        }, {
            name: 'Asus',
            category: 'laptop'
        }, {
            name: 'Samsung',
            category: 'mobile'
        }, {
            name: 'One plus',
            category: 'mobile'
        }, {
            name: 'Iphone',
            category: 'mobile'
        }, {
            name: 'Cannon',
            category: 'camera'
        }, {
            name: 'Nikkon',
            category: 'camera'
        }, {
            name: 'Sony',
            category: 'camera'
        }
    ]
    const [category] = useContext(CategoryContext);

    useEffect(() => {
        console.log({category});
        const matchProduct = AllProducts.filter(pd => pd.category === category.toLowerCase()) //Must use toLowerCase for filter
        setProducts(matchProduct);
    }, [category])

    const [prodcuts, setProducts] = useState([]);
    
    return (
        <div>
            <h1>Select your category : {category}
            </h1>
            {
                prodcuts.map((pd , id) => <CategoryDetail key={id} product={pd}/>)
            
            }
        </div>
    )
}

export default Categoris;
