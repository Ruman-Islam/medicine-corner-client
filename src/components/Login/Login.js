import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const user = result.user;
                const { email, photoURL, displayName } = user;
                const signIn = {
                    isSignIn: true,
                    name: displayName,
                    photo: photoURL,
                    email: email,
                }
                setLoggedInUser(signIn);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }

    return (
        <div className="container">
            <div style={{width: '50%', margin: '200px auto'}} className="show-area">
                <button className="btn btn-success form-control" onClick={handleGoogle}>Google</button>
            </div>
        </div>
    );
};

export default Login;