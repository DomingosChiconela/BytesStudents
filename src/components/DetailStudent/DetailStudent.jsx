import { X } from "@phosphor-icons/react"


export const DetailStudent = ({name,age,description,style,close})=>{
    return(
        <>


        <div  className={`text-slate-50 ${style?style:"hidden"}`}>
            <div className="bg-slate-600 w-40 h-40 rounded-full overflow-hidden shadow-md shadow-blue-500">
                <img className="w-full h-full object-cover  " src="/perfil.jpg" alt="Profile" />
                
            </div>
                
           

            <div className="flex flex-col gap-2 items-center">
                 <p className="font-bold text-blue-600 text-lg"> {name}</p>
                <p className="font-semibold text-white text-md" >{age} Anos</p>
            </div>
            <p  className="text-justify ">{description}</p>

            <X className = " absolute right-2 top-2 hover:border border-white  p-2 rounded cursor-pointer" size={32} onClick={close}/>
            
            
        </div>
        
        
        </>
    )
}