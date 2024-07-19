import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { StudentListContext } from "../../contexts/StudentListContext"
import { useNavigate } from "react-router-dom"




const StylesError = "text-red-600"
const StylesDivForm = "flex flex-col  gap-1"
const StylesInput= "border border-gray-500 rounded-lg  p-1 focus:outline-blue-400"
const StylesLabel= "after:content-['*'] after:ml-0.5 after:text-red-500"




export const AddStudent = ()=>{
    const {studentesList,addStudent,removeStudent} = useContext( StudentListContext)

    const navegate = useNavigate()
    const  {register,handleSubmit,formState:{errors}} =  useForm()
   
    function onSubmit (data){
        const {name,age, description} = data


        addStudent({id:studentesList.length+1,name, age:Number(age),description})
     

        navegate('/student')
      
   

    }
    
   return (
         <>
        <Header/>
        <main   className="flex justify-center items-center">
            <div>

                <form className="flex flex-col gap-3 bg-white rounded-lg shadow-md  lg:min-h-[25rem] lg:w-[30rem] p-10 pt-11"  onSubmit={handleSubmit(onSubmit)}>
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
                </form>
            </div> 
        </main>
        <Footer/>
            
    
     </>
   )


}