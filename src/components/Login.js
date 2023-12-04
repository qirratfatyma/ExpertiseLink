import React, { useState } from 'react';

export default function login() {
    return (
    <div className='login'>
      <form className='form-container' >
                <div class="form-group">
                    <label for="email"><b>Email:</b></label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                </div>
                <div class="form-group">
                    <label for="password"><b>Password</b></label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                </div>

            <p class="terms-message">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input"/>

                    Creating an account means you're okay with our <b>Terms of Service</b>,
                    <b>Policy</b>, and <b>Notification Settings</b></div></p>
                    <button type="submit" class="btn btn-block login-button ">Sign Up</button>
                
        </form>
    </div>
  )
}
