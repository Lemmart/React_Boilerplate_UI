import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const logErrorToMyService = (error, errorInfo) => {
    console.log('An error occurred!', error, errorInfo);
};

export default class ErrorBoundary extends React.Component {
    // source: https://reactjs.org/docs/error-boundaries.html
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }

    render() {
        const { state, props } = this;
        if (state.hasError) {
            // Render any custom fallback UI
            return (
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography variant="body1" color="red">Something went wrong.</Typography>
                    </Grid>
                </Grid>
            );
        }

        // eslint-disable-next-line react/prop-types
        return props.children;
    }
}
