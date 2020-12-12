import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'pages/not-found/not-found';
import Issues from 'pages/issues/issues';
import GlobalMenu from 'components/global-menu/global-menu';

const routes = [
    {
        path: '/',
        component: () => <Issues />,
        private: true,
    }
];

const MainRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path={routes.map((route) => route.path)}>
                    <GlobalMenu>
                    {routes.map((route, i) => {
                            return (
                                <Route
                                    exact
                                    key={i}
                                    path={route.path}
                                    component={route.component}
                                />
                            );
                        })}
                        </GlobalMenu>
            </Route>
            
            <Route component={NotFound} />
        </Switch>
    );
};

export default MainRoutes;
