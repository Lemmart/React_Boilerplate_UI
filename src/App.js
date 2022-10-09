import './App.css';
import { Amplify, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './amplifyStyles.css';
import { Routing } from './Routing';
import awsExports from './aws-exports';
import Login from './components/login';

Amplify.configure(awsExports);

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        Auth.currentAuthenticatedUser().then((authUser) => {
            setUser(authUser);
        }).catch(() => {
            console.log('Not signed in');
        });
    }, []);

    return (
        user
            ? <Routing /> : <Login />
    );
}

export default App;
