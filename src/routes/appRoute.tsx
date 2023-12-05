import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppLayout } from "../custom/layout/appLayout";
import { Home } from "../components/pages/home/home";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
