import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index />
    </Route>
  )
);

export default router;
