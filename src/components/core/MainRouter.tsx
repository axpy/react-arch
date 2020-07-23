import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainFrame from "./MainFrame";
import MainLoader from "../MainLoader";
import ApprovedItems from "../pages/ApprovedItems";

type RouterRoute = {
  path: string,
  component: React.ReactNode
}

const authRoutes: Array<RouterRoute> = [
  {
    path: '/about',
    component: <About/>
  },
  {
    path: '/',
    component: <Home/>
  },
  {
    path: '/approved-items',
    component: <ApprovedItems/>
  },
];

const generateRoute = (route: RouterRoute) => {
  return (
    <Route
      path={route.path}
      key={route.path}
      exact={route.path === '/'}
    >
      {route.component}
    </Route>
  )
}

function MainRouter() {
  const {isAuth, isAuthCheckInProcess, isAuthChecked} = useAuth()!;

  return (
    <BrowserRouter>
    {
      isAuthCheckInProcess && <MainLoader/>
    }
    {
      (isAuth && isAuthChecked) &&
      <MainFrame>
        <Switch>
          {authRoutes.map(route => generateRoute(route))}
          <Redirect from="/" to="/"/>
        </Switch>
      </MainFrame>
    }
    {
      (!isAuth && isAuthChecked) &&
      <Switch>
        <Route path="/login" component={Login}/>
        <Redirect from="/" to="/login"/>
      </Switch>
    }
    </BrowserRouter>
  );
}

export default MainRouter;