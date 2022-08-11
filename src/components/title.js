import React from  'react'
import { signInWithGoogle } from "../firebase";
export default function Title(){
    return(
        <>
            <div className='title'>
                <h1>TO DO APP</h1>

            </div>

            <div class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" alt='sorry' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><button onClick={signInWithGoogle}>Sign in with google</button></p>
</div>
        </>
    )
}