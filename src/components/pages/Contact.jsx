import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"


import { ContactForm } from "../ContactForm/ContactForm"



export const Contact = ()=>{


    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className=" flex-grow   mt-10 mb-14">
            <ContactForm/>
            </main>
            <Footer/>
        </div>
        
    )
}