import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FallbackPage from "./pages/Fallback";

const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackPage />}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
