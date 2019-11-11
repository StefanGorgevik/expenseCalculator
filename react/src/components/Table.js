import React from 'react'
import '../assets/styles/table.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, fa } from '@fortawesome/free-solid-svg-icons'

const Table = () => {
    return (
        <React.Fragment>
            <main className="main-box">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Purchase Date</th>
                            <th>Product Price</th>
                            <th>Product Options</th>
                        </tr>
                    </thead>
                    <tr>
                        <td id="emptyTd"></td>
                    </tr>
                    <tbody>
                        <tr id="first-tr" className="body-tr">
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>21.08.2019</td>
                            <td>75</td>
                            <td>
                                <Link to=""><FontAwesomeIcon icon={faEdit} /></Link>
                                <Link to=""><i className="far fa-trash-alt"></i></Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </main>
        </React.Fragment>
    )
}

export default Table