import React from 'react'
import '../assets/styles/header.css'
const Header = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="nav">
                    <div className="buttons">
                        <a href="../Products/Products.html"><button className="main-buttons" id="products-btn">Products</button></a>
                        <a href="Expenses.html"><button className="main-buttons" id="expenses-btn">Expenses</button></a>
                    </div>
                    <div className="right-side">              
                            <img id="profile-image" src="../../assets/images/small_profile.png" alt="profile-image"/><p>Gal Gadot</p>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header