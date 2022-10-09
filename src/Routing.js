import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router, Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const ResponsiveAppBar = lazy(() => import('./components/responsiveAppBar'));
const Account = lazy(() => import('./pages/Account'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const New = lazy(() => import('./pages/New'));

function Layout() {
    // wrap the app bar in a separate error boundary from the general page components being rendered
    return (
        <div>
            <ErrorBoundary component="responsiveAppBar">
                <ResponsiveAppBar />
            </ErrorBoundary>
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
        </div>
    );
}

// eslint-disable-next-line import/prefer-default-export
export function Routing() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={(<Layout />)}>
                        <Route
                            path="/"
                            element={(<Home />)}
                        />
                        <Route
                            path="/profile"
                            element={(<Profile />)}
                        />
                        <Route
                            path="/account"
                            element={(<Account />)}
                        />
                        <Route
                            path="/dashboard"
                            element={(<Dashboard />)}
                        />
                        <Route
                            path="/new"
                            element={(<New />)}
                        />
                    </Route>
                    <Route path="*" element={(<Navigate to="/" />)} />
                </Routes>
            </Suspense>
        </Router>
    );
}
