import React from 'react';
import "./style/membership.css";

export default function Membership()
{

    function getselection(e)
    {
        console.log(e.target.value)
    }

    return (
        <div className='py-20'>
            <div>
                <div>
                    <div>
                        <p className='SubFormT'>Subscription Form</p>
                    </div>
                    <form className='SubForm text-center bg-yellow-600'>
                        <div className='formRow'>
                            <label>Phone</label>
                            <input type="tel" required />
                        </div>
                        <div className='formRow'>
                            <label>Email</label>
                            <input type="email" placeholder='optional' />
                        </div>
                        <div className='formRow'>
                            <label>Subscribtion</label>
                            <select name="qqqq" id="subType" onChange={getselection} required>
                                <option value=""></option>
                                <option id='monthlySub' value="month">Month</option>
                                <option id='yearlySub' value="year">Year</option>
                            </select>
                        </div>
                        <div className='formRow'>
                            <label>Discount Code</label>
                            <input type="text" placeholder='optional' />
                        </div>
                        <div>
                            <button id='BtnSubSub' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


