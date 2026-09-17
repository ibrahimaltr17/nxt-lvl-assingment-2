import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import AllMovies from "../pages/AllMovies/AllMovies";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/all-movies",
            Component: AllMovies
        }
    ]
  },
]);