import FormSubscribe from "../components/FormSubscribe";
import { Logo } from "../components/Logo";


export function Subscribe() {
    
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <img className="absolute mt-2" src="/src/assets/ReactJS-icon.png" alt="ReactJS icon" />
            
            <div className="w-full max-w-[1200px] flex items-center flex-wrap justify-between mt-20 mx-auto">

                <div className="max-w-[640px] mb-5">
                    <Logo />
                    <h1 className=" mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>,
                        do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <FormSubscribe />
                
            </div>
            <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
        </div>
    )
}