import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { routeList } from "./routeList";

export const AppRouter = () => {
    return (
        <Routes>
            {routeList.map((route,index) => {
                const Comp = route.component;
                if (route.children) {
                    return route.protected ? (
                        <Route
                            key={index}
                            path={route.path}
                            element={<ProtectedRoute />}
                        >
                            {route.children.map((childRoute, index) => {
                                const ChildComp = childRoute.component;
                                return (
                                    <Route
                                        key={childRoute.path + index}
                                        index={childRoute.index}
                                        path={childRoute.path}
                                        element={<ChildComp />}
                                    />
                                );
                            })}
                        </Route>
                    ) : (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Comp />}
                        >
                            {route.children.map((childRoute, index) => {
                                const ChildComp = childRoute.component;
                                return (
                                    <Route
                                        key={childRoute.path + index}
                                        index={childRoute.index}
                                        path={childRoute.path}
                                        element={<ChildComp />}
                                    />
                                );
                            })}
                        </Route>
                    );
                } else {
                    return (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            element={<Comp />}
                        />
                    );
                }
            })}
        </Routes>
    );
};
