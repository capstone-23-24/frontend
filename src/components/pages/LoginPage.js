// FirebaseUI
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { Row, Col } from 'antd'
import { useNavigate } from 'react-router-dom';

// React stuff
import { useEffect } from 'react';

// Auth service
import auth from '../../config/Auth'


function LoginPage(){

    const navigate = useNavigate();

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    console.log("success")
                    navigate('/home')
                },
                uiShown: function() {
                    // This is what should happen when the form is full loaded. In this example, I hide the loader element.
                    document.getElementById('loader').style.display = 'none'
                }
            },
            signInSuccessUrl: 'localhost:3000/home', // This is where should redirect if the sign in is successful.
            signInOptions: [ // How users can authenticate
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false,
                    redirectUrl: 'localhost:3000/home',
                    disableSignUp: {
                        status: true
                    }
                    
                }
            ],
        });
    }, []);
  
    return (
        <Row span={24} justify={'center'}>
            <Col>
                <h1 className="text-center my-3 title">Login Page</h1>
                <div id="firebaseui-auth-container"></div>
                <div id="loader" className="text-center">Loading form</div>
            </Col>
            
        </Row>
    );
  };
  
export default LoginPage;
  
