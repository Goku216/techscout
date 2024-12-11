import { Route, Routes } from "react-router-dom";
import { HomePage, Blog, About, PageNotFound, ReviewPage } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
