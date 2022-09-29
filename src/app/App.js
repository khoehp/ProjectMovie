//absolute path
import PageNotFound from "common/components/404";
import Footer from "common/components/Footer";
import Header from "common/components/Header";
import Loading from 'common/components/Loading/Loading'
import { fetchProfileAction } from "features/authentication/action";
import MovieTheater from "features/booking/pages/MovieTheater";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./Guard";

const Home = lazy(() => import("features/booking/pages/Home"));
const Detail = lazy(() => import("features/booking/pages/Detail"));
const Booking = lazy(() => import("features/booking/pages/Booking"));
const Payment = lazy(() => import("features/booking/pages/Payment"));
const Theater = lazy(() => import("features/booking/pages/MovieTheater"));
const Signin = lazy(() => import("features/authentication/pages/Signin"));
const Signup = lazy(() => import("features/authentication/pages/Signup"));
const MovieManagement = lazy(() =>
  import("features/movies/pages/MovieManagement")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Loading />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/detail/:id" component={Detail} />
          {/* <Booking path="/movies/:id" component={Booking} /> */}
          <Route path="/movies/:id" component={MovieManagement} />
          {/* <MovieTheater path="/theater" exact component={Theater} /> */}
          <Route path="/payment" component={Payment} />
          <AuthRoute path="/signin" component={Signin} redirectPath="/" />
          <AuthRoute path="/signup" component={Signup} redirectPath="/" />

          {/* <Route path="*" component={PageNotFound} /> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
