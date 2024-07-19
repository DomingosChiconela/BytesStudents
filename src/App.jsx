import { RouterProvider } from "react-router-dom"

import { route } from "./routes"
import { StudentListContextProvider } from "./contexts/StudentListContext"




function App() {


  return (
    <StudentListContextProvider>
    <RouterProvider  router={route}/>
    </StudentListContextProvider>
  )
}

export default App
