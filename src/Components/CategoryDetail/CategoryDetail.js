import React from 'react'


const CategoryDetail = ({product : {name}}) => {
    
   
    return (
        <div>
            <h1>This is your category detail  </h1>
            <h4>This is your selected product {name} </h4>
        </div>
    )
}

export default CategoryDetail;
