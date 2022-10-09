import { useAuthenticator } from '@aws-amplify/ui-react';
import { Typography } from '@mui/material';
import React from 'react';

function Home() {
    const { user } = useAuthenticator();
    return (
        <Typography>
            Welcome,
            {' '}
            {user.username}
        </Typography>
    );
}

export default Home;
