import { Routes, Route } from "react-router-dom";

// import { useContext } from "react";
// import { CategoriesContext } from "../../../contexts/categories.contexts";
import "./shop.style.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// import CategoryPreview from "../../category-preview/category-preview.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
