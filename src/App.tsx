import { Routes, Route } from "react-router-dom";
import { Games, PageNotFound } from "./pages";

export const App = () => {
  return (    
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
};