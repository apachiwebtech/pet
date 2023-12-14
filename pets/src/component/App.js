
import '../App.css';
import Dash from './Pages/Dash';
import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Splash from './Pages/Splash';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Register from './Pages/Register';
import MyPet from './Pages/MyPet';

const routing = createBrowserRouter([
  
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Dash />,
        path: '/'
      },
      {
        path:'/splash',
        element:<Splash/>
      },
      {
        path:'/reg',
        element:<Register/>
      },
      {
        path:'/mypet',
        element:<MyPet/>
      },
   
    ]

  }
])



function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      {window.location.pathname !== '/splash' && window.location.pathname !== '/reg' && <Footer />}
    </>

  );
}

export default routing;
