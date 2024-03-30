import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/add", element: <AddUser /> },
    { path: "/edit/:id", element: <EditUser /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
