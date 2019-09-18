import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Header from './components/Header'
import Table from './components/Table'
import Login from './components/Login'
import Register from './components/Register'
import Expenses from './components/Expenses'
import Products from './components/Products'
import NewProduct from './components/NewProduct'

const main = document.querySelector("#main")

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/> 
                <Route exact path="/register" component={Register}/> 
                <Route exact path="/new-product" component={NewProduct}/> 
                <Route exact path="/products" render={(props) => 
                        <React.Fragment>
                            <Products {...props}/>
                            <Table {...props}/>
                        </React.Fragment>
                    }/> 
                <Route exact path="/expenses" render={(props) => 
                        <React.Fragment>
                            <Expenses {...props}/>
                            <Table {...props}/>
                        </React.Fragment>
                    }/> 
            </Switch>
        </Router>
    )
}

// const Main = () => {
//     return(
//         <React.Fragment>
//             <Header/>
//             <NewProduct/>
//         </React.Fragment>
//     )
// }

ReactDOM.render(<Routes/>, main)