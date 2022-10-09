import { Flex, useAuthenticator, useTheme } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function SignInFooter() {
    const { toResetPassword } = useAuthenticator();
    const { tokens } = useTheme();

    return (
        <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
            <Button onClick={toResetPassword}>Reset your password</Button>
        </Flex>
    );
}
