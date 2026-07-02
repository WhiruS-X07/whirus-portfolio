import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Projects, ContactMe, About, Skills } from "./component/index.jsx";
import Layout from "./HOC/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;