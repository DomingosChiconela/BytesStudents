import { createBrowserRouter } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { Studentes } from "./components/pages/Studentes";





 export const  route =   createBrowserRouter([
    {
        path:"/", 
        element :<Home/>
    },
    {
        path:"/contact", 
        element :<Contact/>
    },
    {
        path:"/student", 
        element :<Studentes/>
    },
   
 ])