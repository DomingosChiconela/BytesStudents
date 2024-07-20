import { Link, NavLink } from "react-router-dom"


const activeStyles = "text-red-500";
const inactiveStyles = "text-white";
export const Header = ()=>{
 
    return (
        <header   className="flex   items-center px-10  h-20  lg:justify-between font-medium">

        <div className="w-24">
            <img  className="object-cover"   src="/logo.png" alt="logo" />
        </div>
        
         <nav  className="flex flex-col  gap-14 lg:flex-row" >
            <NavLink  to={"/"} className={({isActive })=>`${isActive? activeStyles : inactiveStyles}`}
            >
                Pagina inicial
            </NavLink>
            <NavLink  to={"/student"} className={({isActive })=>`${isActive? activeStyles : inactiveStyles}`}
            >
                Estudantes 
            </NavLink>
            <NavLink  to={"/contact"} className={({isActive })=>`${isActive? activeStyles : inactiveStyles}`}
            >
              Contacto
            </NavLink>
         </nav>
        </header>
    )
}