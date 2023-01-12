import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  Header,
  LoadingDots,
  ScrollToTopButton,
  ScrollToTop,
} from "components";
import { withScroll } from "hocs";

import classes from "./App.module.css";

const Home = React.lazy(() => import("routes/home"));
const Movies = React.lazy(() => import("routes/movies"));
const Movie = React.lazy(() => import("routes/movie"));

const App = ({ showScrollToTopButton, scrollToTop }) => (
  <div className="App">
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense
        fallback={
          <div className={classes.loadingContainer}>
            <LoadingDots />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    </BrowserRouter>
  </div>
);

export default withScroll(App);
