import { Redirect, Route } from "react-router-dom";

const createRoute = (condition) => {
  return (props) => {
    const { path, component, redirectPath } = props;
    if (condition()) {
      return <Route path={path} component={component} />;
    }
    return <Redirect to={redirectPath} />;
  };
};

const checkAuth = () => {
  if (!localStorage.getItem("token")) {
    return true;
  }
  return false;
  //check nếu localstorage chưa có token => chưa login => vào
  // localstorage có token => login => đẩy đi qua home
};

export const AuthRoute = createRoute(checkAuth);

const checkLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

export const PrivateRoute = createRoute(checkLogin);

// export const AdminRoute = createRoute(checkAdmin)
