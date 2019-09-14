import React from 'react'
import '../assets/styles/expenses.css'
const Expenses = () => {
    return (
        <React.Fragment>
                    <h3 id="expenses-h3">Expenses</h3>

<div className="expenses-div">
        <a href="#"><button id="monthly-btn">Monthly</button></a>
        <a href="#"><button id="yearly-btn">Yearly</button></a>
        <div className="select-div">
            <label for="month-select">Choose month:</label>
                <select name="month-select" id="month-select">
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option selected value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </select>

        </div>
    
</div>
        </React.Fragment>
    )
}

export default Expenses