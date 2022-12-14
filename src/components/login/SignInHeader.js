import { Heading, useTheme } from '@aws-amplify/ui-react';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function SignInHeader() {
    const { tokens } = useTheme();

    return (
        <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
            Sign in to your Account
        </Heading>
    );
}
