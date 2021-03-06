import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app'
import 'firebaseui/dist/firebaseui.css'
import '../../firebase'

function SignIn() {


    useEffect(() => {
        const ui = 
            firebaseui.auth.AuthUI.getInstance() ||
            new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('.firebase_ui__container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false
                },
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    requireDisplayName: false
                }
            ],
            // signInSuccessUrl: '/authenticated'

        })
    }, [])
  return (
    <div className='firebase_ui__container'>
    </div>
  );
}

export default SignIn;