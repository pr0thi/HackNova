import { createBrowserRouter } from "react-router-dom";
import Form from "./Form";
import FoodBank from "./FoodBank";
import { RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import Hello from "./Hello";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/", 
      element:<Hello/>
    },
    {
      path:"/donar",
      element:<Form/>
    },
    {
      path:"/foodbank",
      element:<FoodBank/>
    },
    {
      path:"/cart", 
      element:<Cart/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body