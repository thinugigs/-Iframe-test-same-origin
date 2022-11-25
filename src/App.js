import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Parent from "./components/Parent";
import Child from "./components/Child";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Parent/>,
    },
    {
        path: "/child",
        element: <Child/>,
    }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
