import { MagnifyingGlass, Plus,X } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"


import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { ItemList } from "../ItemList/ItemList"
import { Students } from "../../data/BdStudentes"
import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { StudentListContext } from "../../contexts/StudentListContext"
import { DetailStudent } from "../DetailStudent/DetailStudent"




const StylesError = "text-red-600"
const StylesDivForm = "flex flex-col  gap-1"
const StylesInput= "border border-gray-500 rounded-lg  p-1 focus:outline-blue-400"
const StylesLabel= "after:content-['*'] after:ml-0.5 after:text-red-500"




export const Studentes =()=>{

    const  {register,handleSubmit,formState:{errors}} =  useForm()
    const {studentesList,addStudent, editStudent,removeStudent} = useContext( StudentListContext)
    const [filter,setFilter] = useState('')
    const [isAdd,setIsAdd] = useState(false)
    const [studentEdit,setStudentEdit] = useState([])
    const [studentDetail,setStudentDetail] = useState([])

  


    
    function handelInput(e){
        setFilter((e.target.value).trim())
    }

    function handelRemove(index){


        removeStudent(index)

    }
    function onSubmitAdd(data){
        const {name,age, description} = data

        
        addStudent({id:studentesList.length+1,name, age:Number(age),description})
        setIsAdd(!isAdd)
     

    }

    function onSubmitEdit (e){

        e.preventDefault()
        const  formData  =  new FormData(e.currentTarget)
        
      
        setStudentEdit({})

        editStudent(studentEdit.index,{id:studentEdit.id,name:formData.get('nameEdit'),age:formData.get('ageEdit'),description:formData.get('descriptionEdit')})

     }



    return (
        <>
         <Header/>
         <main  className="mt-10 px-8  pl-14">
            <div className="flex flex-col justify-center ">
                <div className={`flex items-center gap-4  m-auto mb-10 ${Object.keys(studentEdit).length>0 ||Object.keys(studentDetail).length>0 ||isAdd ?"pointer-events-none opacity-80":""}`}>
                    <div className="flex items-center gap-2  m-auto h-10 rounded-full p-5 transition-all duration-1000 ease-in-out group hover:w-96 hover:bg-white hover:shadow-md">
                       
                        
                        <MagnifyingGlass className="cursor-pointer transition-all duration-500 ease-in-out group-hover:transform group-hover:scale-75" size={32} />
                        <input type="search" className="outline-none bg-transparent w-0 group-hover:w-full transition-all duration-1000 ease-in-out" placeholder="Search..."  onChange={handelInput}/>
                            
                    </div> 
                 
                          <div  className="py-2 px-4 bg-blue-600 rounded-xl font-medium text-white flex items-center  cursor-pointer"  onClick={()=>{setIsAdd(true)}}> <Plus size={20}/>Adicionar</div>
                </div>


                <div className="flex   justify-center gap-12">
                    <div className={`${Object.keys(studentEdit).length>0 ||Object.keys(studentDetail).length>0 ||isAdd ?"pointer-events-none opacity-80":""}  ${isAdd?"overflow-auto lg:w-[45rem] lg:h-[30rem]":""}`} >
                        { filter?
                    
                        
                        studentesList.map((element,index)=>{
                            
                            if( element.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
                               
                                return(
                                < ItemList  key={index} name={element.name} clickDelete={()=>handelRemove(index)} clickEdite={()=>setStudentEdit({index,id:element.id,name:element.name,description:element.description,age:element.age})} clickDetail={()=>setStudentDetail({index,id:element.id,name:element.name,description:element.description,age:element.age})}/> 
                            )  
                        }
                            
                    } )
                    
                    : studentesList.map((element,index)=>{
                            return(
                            < ItemList  key={index} name={element.name}  clickDelete={()=>handelRemove(index)} clickEdite={()=>setStudentEdit({index,id:element.id,name:element.name,description:element.description,age:element.age})}    clickDetail={()=>setStudentDetail({index,id:element.id,name:element.name,description:element.description,age:element.age})} /> 
                        )
                    
                })
                    }
                    </div>

                    <div  className={`${isAdd?"block relative":"hidden"}`}>
                        <form className="flex flex-col gap-3 bg-white rounded-lg shadow-md  lg:min-h-[25rem] lg:w-[30rem] p-10 pt-11"  onSubmit={handleSubmit(onSubmitAdd)}>
                        <div className={`${StylesDivForm}`}>
                            
                        <label className={`${StylesLabel}`}  htmlFor="name">Nome</label>
                        <input className={`${StylesInput}`} type="text" name="name" id="name" {...register('name',{required:"O nome é obrigatório",
                                pattern :{
                                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                                    message:' O nome não pode conter numeros ou caracteres especiais'
                                },
                                validate: value =>value.trim() !== '' ||"O nome não pode ser apenas espaços em branco"

                                })} />
                                {errors.name && <p className={`${StylesError}`} >{errors.name.message}</p>}

                        </div>

                            <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`}  htmlFor="age">Idade</label>
                                <input className={`${StylesInput}`} type="number"   name="age" id="age"{...register('age',{required:"A idade é obrigatório",
                            min:{
                                value:0,
                                message:'A Idade deve ser maior que 0'

                            },
                            max:{
                                value:120,
                                message:'A Idade deve ser menor que 120'

                            },
                                validate: value =>value.trim() !== '' ||"O nome não pode ser apenas espaços em branco"

                                })} />
                                {errors.age && <p className={`${StylesError}`} >{errors.age.message}</p>}
                            </div>

                            <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`}  htmlFor="description">Descrição</label>
                                <textarea  className={`${StylesInput} p-10`} name="description" id="description"{...register('description',{required:"A Descrição é obrigatório",
                            
                                validate: value =>value.trim() !== '' ||"O nome não pode ser apenas espaços em branco"

                                })} 
                                ></textarea>
                        {errors.description && <p className={`${StylesError}`} >{errors.description.message}</p>}
                            </div>


                            <button type="submit" className="py-2 px-4 bg-blue-600 rounded-xl font-medium text-white mt-6 "> Criar</button> 
                            <X className = " absolute right-2 top-2 hover:border border-black  p-2 rounded cursor-pointer" size={32} onClick={()=>setIsAdd(!isAdd)}/>
                       
                        </form>
                        
                  
                    </div>


                    <div className={`${Object.keys(studentEdit).length===0?"hidden":"block relative"}`}>
                    <form className="flex flex-col gap-3 bg-white rounded-lg shadow-md  lg:min-h-[25rem] lg:w-[30rem] p-10 pt-11"  onSubmit={onSubmitEdit}>
                        <div className={`${StylesDivForm}`}>
                            
                        <label className={`${StylesLabel}`}  htmlFor="name">Nome</label>
                        <input className={`${StylesInput}`} type="text" name="nameEdit" defaultValue={studentEdit.name}  id="name"/>
                               
                        </div>

                            <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`}  htmlFor="age">Idade</label>
                                <input className={`${StylesInput}`} type="number"  name="age" id="ageEdit" defaultValue={studentEdit.age} />
    
                            </div>

                            <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`}  htmlFor="description">Descrição</label>
                                <textarea  className={`${StylesInput} p-10`} name="descriptionEdit" id="description"
                               defaultValue={studentEdit.description} ></textarea>
                            </div>


                            <button type="submit" className="py-2 px-4 bg-blue-600 rounded-xl font-medium text-white mt-6 "> Editar</button> 
                            <X className = " absolute right-2 top-2 hover:border border-black  p-2 rounded  cursor-pointer  shadow-lg" size={32} onClick={()=>setStudentEdit({})} /> 
                        </form>
                    </div>

                    <DetailStudent style={`${Object.keys(studentDetail).length>0?"bg-zinc-900 shadow-lg pt-6 px-8 lg:max-h-[25rem] lg:w-[29rem] flex flex-col items-center rounded-md gap-3 relative":""}`}  name={studentDetail.name} age={studentDetail.age} description={studentDetail.description} close={()=>setStudentDetail({})}/>

               
                </div>

               
                

            </div>

        </main>
        <Footer/>
  
        </>
    )
}