import React from 'react';

import './style.css'

function Form() {
    return (
        <div className="form">

            <div className="form__field-input">
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Your Name" />
            </div>

            <div className="form__field-input">
                <span>Email address</span>
                <input type="text" name="name" placeholder="Your Email" />
            </div>

            <div className="form__field-option">
                <span>Gender</span>

                <div className="checkbox">
                    <div className="checkbox__field">
                        <input type="radio" name="gender" id="M" className="radio" />
                        <label htmlFor="M">Male</label>
                    </div>

                    <div className="checkbox__field">
                        <input type="radio" name="gender" id="F" className="radio" />
                        <label htmlFor="F">Female</label>
                    </div>
                    
                </div>
                
            </div>

            <div className="form__field-input">
                <span>Date of birth</span>
                <input type="date" name="name" placeholder="DD/MM/AAAA" />
            </div>

            <div className="form__field-term">
                <input id="term" type="checkbox" />
                <label htmlFor="term">I accept the terms and conditions</label>
            </div>

            <button>Create Account</button>
        </div>
    );
}

export default Form;