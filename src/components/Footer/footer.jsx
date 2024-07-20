import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"


export const Footer = ()=>{

    return  (
      <footer className="flex  items-center justify-between text-white bg-gradient-to-r from-indigo-500 to-blue-500 px-10 py-4 ">


        <div className="flex flex-col" >
            <p><span className="text-zinc-900">&copy;2024</span> todos os direitos reservados</p>
            <p>Desenvolvido por <span className="text-zinc-900">Domingos Chiconela</span></p>
        </div>
   
        <div className="flex flex-col">
            <h3 className="font-bold  text-zinc-900 text-center" >Escreve-me</h3>
            <p>azevedodomingos78@gmail.com</p>
        </div>
    
        
        <div className="flex flex-col gap-1" >
        
        <h3 className="font-bold text-md text-black text-center" >siga-me</h3>
         <div className="flex gap-3 ">
        <a href=""> <FacebookLogo size={32}/></a>
        <a href=""> <InstagramLogo size={32}/></a>
        <a href=""> <LinkedinLogo size={32}/></a>
        <a href="https://github.com/DomingosChiconela/"> <GithubLogo size={32}/></a>
         </div>
        

        </div>
    
    </footer>
    )
}