import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Form from './Components/Form.jsx';
import FoodBank from "./Components/FoodBank.jsx";
import appStore from './Components/utils/appStore.jsx'
import { Provider } from 'react-redux';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:"/donar",
    element:<Form/>
  }, 
  {
    path:"/foodbank", 
    element:<FoodBank/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
);
