import { X } from "@phosphor-icons/react"
import { useState } from "react"
import { useForm } from "react-hook-form"


const StylesError = "text-red-600"
const StylesDivForm = "flex flex-col  gap-1"
const StylesInput= "border border-gray-500 rounded-lg  p-1 focus:outline-blue-400"
const StylesLabel= "after:content-['*'] after:ml-0.5 after:text-red-500"
const StylesDialogDiv= "felx felx-col "


export const ContactForm =  () =>{
const  {register,handleSubmit,formState:{errors}} =  useForm()
  const [contentForm ,SetcontentForm] = useState({})
  const [showDialog, setShowDialog] = useState(false);

    function onSubmit (data){
      
        SetcontentForm({name:data.Name,email:data.email,contact:data.contact})
        setShowDialog(true)
        
    }

    return (
       
       <div className=" lg:w-96 m-auto">

     

            <div className={` transition-all duration-700 ${showDialog?"flex flex-col gap-4  relative bg-white  my-8   lg:h-[15rem] lg:w-[30rem] rounded-lg px-5 pt-10":"hidden  transition-all duration-1000"}`}>
            <div className={`${StylesDialogDiv}`}>
                <p>Nome:</p>
                <p>{contentForm.name} </p>
            </div>
                
          
            <div className={`${StylesDialogDiv}`}>
                <p>Email:</p>
                <p>{ contentForm.email}</p>
            </div>
            <div className={`${StylesDialogDiv}`}>
                <p>Contacto :</p>
                 <p>{contentForm.contact}</p>
            </div>
           

            <X   className =  " absolute right-2 top-2 hover:border border-black  p-2 rounded" size={36} onClick={()=>setShowDialog(!showDialog)}/>



            </div>


            <form className={`${!showDialog? "flex flex-col gap-3 bg-white rounded-lg shadow-md  lg:min-h-[25rem] lg:w-[30rem] p-10 pt-11" :"hidden"}`} onSubmit={handleSubmit(onSubmit)}>


                <div className={`${StylesDivForm}`}>
                    <label className={`${StylesLabel}`} htmlFor="Name" >Nome</label>
                    <input type="text" name="Name" id="Name"  className={`${StylesInput}`} {...register('Name',{required:"O nome é obrigatório",
                    pattern :{
                        value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                        message:' O nome não pode conter numeros ou caracteres especiais'
                    },
                    validate: value =>value.trim() !== '' ||"O nome não pode ser apenas espaços em branco"

                    })} />
                    {errors.Name && <p className={`${StylesError}`} >{errors.Name.message}</p>}
                </div>

                <div className={`${StylesDivForm}`}>
                    <label className={`${StylesLabel}`} htmlFor="">Email</label>
                    <input type="email" name="email" id="email" className={`${StylesInput}`} {...register('email',{
                        required:"O email é obrigatório",
                        pattern:{

                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "O e-mail deve estar no formato correto"
                        },

                        validate: value =>value.trim() !== '' ||"O email não pode ser apenas espaços em branco"
                    })} />
                    {errors.email && <p className={`${StylesError}`} >{errors.email.message}</p>}
                </div>
                
                <div className={`${StylesDivForm}`}>
                    <label className={`${StylesLabel}`} htmlFor="">Contacto</label>
                    <input type="text" name="contact" id="contact" className={`${StylesInput}`} {...register('contact', {
                        required: "O contacto é obrigatório",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "O contacto deve conter apenas números inteiros"
                        },
                        maxLength: {
                            value: 9,
                            message: "O contacto deve ter no máximo 9 caracteres"
                        },
                        
                        validate: value =>value.trim() !== '' ||"O email não pode ser apenas espaços em branco"

                    })} />
                    {errors.contact && <p className={`${StylesError}`} >{errors.contact.message}</p>}
                </div>
            

                <button type="submit" className="py-2 px-4 bg-blue-600  hover:bg-blue-600/85 active:bg-blue-600/50 rounded-xl font-medium text-white mt-6 "> Enviar</button>
    


            </form>  
            
        </div>
         
    )
}