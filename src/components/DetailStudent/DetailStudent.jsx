import { X } from "@phosphor-icons/react"


export const DetailStudent = ({name,age,description,style,close})=>{
    return(
        <>


        <div  className={`${style?style:"hidden"}`}>
            <div className="bg-slate-600 w-40 h-40 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="/perfil.jpg" alt="Profile" />
                
            </div>
                
           

            <div className="flex flex-col gap-2 items-center">
                 <p> {name}</p>
                <p >{age} Anos</p>
            </div>
            <p  className="border border-dashed ">{description}</p>

            <X className = " absolute right-2 top-2 hover:border border-black  p-2 rounded cursor-pointer" size={32} onClick={close}/>
            
            
        </div>
        
        
        </>
    )
}