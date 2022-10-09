module.exports = {
    // (required)- Amazon Cognito Region
    region: '',
    // (optional) - Amazon Cognito User Pool ID
    userPoolId: '',
    // eslint-disable-next-line max-len
    // (optional) - Amazon Cognito Web Client ID (26-char alphanumeric string, App client secret needs to be disabled)
    userPoolWebClientId: '',
    // (optional) - Hosted UI configuration
    oauth: {
        domain: '',
        scope: ['openid', 'profile', 'email', 'aws.cognito.signin.user.admin'],
        redirectSignIn: `${window.location.origin}/`,
        redirectSignOut: `${window.location.origin}/`,
        clientId: '',
        responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
};
