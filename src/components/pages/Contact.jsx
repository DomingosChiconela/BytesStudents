import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"


import { ContactForm } from "../ContactForm/ContactForm"



export const Contact = ()=>{


    return (
        <>
         <Header/>
         <main className="mt-8">
        <ContactForm/>
         </main>
         <Footer/>
      
        </>
    )
}