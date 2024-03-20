import './CSS/Filter.css'
import { useState } from 'react';

export default function Filter() {

    return (
        <div className='filter'>
            <h1 style={{ fontSize: '25px' }}>Filters and Sort</h1>
            <div className='Heading'>
                <label>Sort By:</label><br></br>
                <div className='sortBy'>
                    <input type="radio" id="A-Z" name="Sort" value="A-Z" />
                    <label>             Title A-Z</label><br></br>
                    <input type="radio" id="Z-A" name="Sort" value="Z-A" />
                    <label>             Title Z-A</label><br></br>
                    <input type="radio" id="Default" name="Sort" value="Default" />
                    <label>             Default</label>
                </div>
            </div><br></br>

            <div className='Heading'>
                <label>Age of Child</label><br></br>

                <div className='sortBy'>
                    <input type="radio" id="6 Months +" name="Age" value="6 Months +" />
                    <label>             6 Months +</label><br></br>
                    <input type="radio" id="9 Months +" name="age" value="9 Months +" />
                    <label>             9 Months +</label><br></br>
                    <input type="radio" id="12 Months +" name="age" value="12 Months +" />
                    <label>             12 Months +</label><br></br>
                    <input type="radio" id="12 Months +" name="age" value="12 Months +" />
                    <label>             18 Months +</label><br></br>
                    <input type="radio" id="12 Months +" name="age" value="12 Months +" />
                    <label>             24 Months +</label><br></br>
                    <input type="radio" id="12 Months +" name="age" value="12 Months +" />
                    <label>             3 Years +</label><br></br>
                    <input type="radio" id="12 Months +" name="age" value="12 Months +" />
                    <label>             4 Years +</label>

                </div>
            </div><br></br>
            <div className='Heading'>
                <label>Food Types</label><br></br>
                <div className='sortBy'>
                    <label>
                        <input type="checkbox" name="option1" className="checkbox-hidden" />
                        <span className="checkbox-square"></span> Fruits
                    </label><br></br>
                    <label>
                        <input type="checkbox" name="option1" className="checkbox-hidden" />
                        <span className="checkbox-square"></span> Vegetables
                    </label><br></br>
                    <label>
                        <input type="checkbox" name="option1" className="checkbox-hidden" />
                        <span className="checkbox-square"></span> Protein
                    </label><br></br>
                    <label>
                        <input type="checkbox" name="option1" className="checkbox-hidden" />
                        <span className="checkbox-square"></span> Grain
                    </label><br></br>
                    <label>
                        <input type="checkbox" name="option1" className="checkbox-hidden" />
                        <span className="checkbox-square"></span> Dairy
                    </label><br></br>
                    <label>
                        <input type="checkbox" name="option1" className="checkbox-hidden" />
                        <span className="checkbox-square"></span> Tree Nuts
                    </label><br></br>
                </div>
            </div>

        </div>
    )
}