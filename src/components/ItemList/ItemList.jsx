import { Info, Trash } from "@phosphor-icons/react"
import { NotePencil } from "@phosphor-icons/react/dist/ssr"
const StyleIcon = "cursor-pointer"

export const ItemList = ({name,clickEdite,clickDelete,clickDetail}) => {

    return(
        <div className="  flex  items-center justify-between lg:h-20  lg:w-[40rem] mx-auto mb-5 bg-white shadow-md hover:shadow-lg rounded-md px-5  ">
            <p className="font-medium"> {name}</p>
            <div className="flex gap-3">
            
            <NotePencil  className={`${StyleIcon}`}  fill="green" size={24}  onClick={clickEdite}/>
            <Trash className={`${StyleIcon}`} fill="red"   size={24} onClick={clickDelete}/>
            <Info  className={`${StyleIcon}`} fill="gray" size={24}  onClick={clickDetail}/>
            </div>
           
        </div>
    )
}