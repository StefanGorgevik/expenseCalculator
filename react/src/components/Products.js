import React from 'react'
import '../assets/styles/products.css'

const Products = () => {
    return (
        <React.Fragment>
            <div className="main-div">
                <h3>Products</h3>
                <label htmlFor="sort">Filter by:
            <select name="sort" id="sort">
                        <option>Year</option>
                        <option>Highest Price</option>
                        <option>Lowest Price</option>
                        <option>Latest Purchases</option>
                    </select>
                </label>
            </div>
        </React.Fragment>
    )
}

export default Products