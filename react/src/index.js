import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Table from './components/Table'
import Login from './components/Login'
import Register from './components/Register'
import Expenses from './components/Expenses'
import Products from './components/Products'
import NewProduct from './components/NewProduct'

const main = document.querySelector("#main")

const Main = () => {
    return(
        <React.Fragment>
            <Header/>
            <Products/>
            <Table/>
        </React.Fragment>
    )
}

ReactDOM.render(<Main/>, main)