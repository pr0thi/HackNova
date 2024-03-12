import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "../App";
import Hello from "./Hello";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
        path:"/hello", 
        element:<Hello/>
    },
    {
      path:"/", 
      element:<App/>
    }
    
  ]);


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body