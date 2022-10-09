import { Authenticator, useTheme } from '@aws-amplify/ui-react';
import React from 'react';
import { Routing } from '../../Routing';
import { Footer } from './Footer';
import { Header } from './Header';
import { SignInFooter } from './SignInFooter';
import { SignInHeader } from './SignInHeader';

const components = {
    Header,
    SignIn: {
        Header: SignInHeader,
        Footer: SignInFooter,
    },
    Footer,
};

function Login() {
    const { tokens } = useTheme();

    return (
        <Authenticator components={components} hideSignUp>
            {({ signOut, user }) => (
                <Routing />
            )}
        </Authenticator>
    );
}

export default Login;
