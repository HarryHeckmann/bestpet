import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import SignIn from '../SignIn/SignIn';
import firebase from 'firebase/compat/app'
import {onAuthStateChanged} from 'firebase/auth'

interface UserInterface {
    email: string | null,
    uid: string | null
}

const Header = () => {

    const [user, setUser] = useState<UserInterface>({email: null, uid: null})

    useEffect(() => {
      onAuthStateChanged(firebase.auth() as any, (user) => {
        if(user) {
          console.log(user)
          setUser({email: user.email, uid: user.uid})
        } else {
          setUser({email: null, uid: null})
        }
      })
    }, [])
    
    return (
        <header>
          <NavLink to="/"  className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>
            Home
          </NavLink>
          <NavLink to="/profile"  className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>
            Profile
          </NavLink>
          <NavLink to="/test"  className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>
            Test
          </NavLink>
            {user.email
             ?
                <button onClick={() => firebase.auth().signOut()}>SignOut</button>
             :
                <SignIn />
             
            }
        </header>
    )
}

export default Header