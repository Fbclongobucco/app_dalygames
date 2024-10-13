import { Container } from "@/components/container";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";

export default function Profile(){
    return(
        <Container>
            <section className="mt-8 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
                    <Image
                    src="/api/dalygames/assets/user.png"
                    alt="imagem do perfil do usuário"
                    className="rounded-full h-56 object-cover"
                    width={224}
                    height={224}
                    />
                    <h1 className="font-bold text-2xl">Bucco Dev</h1>
                </div>
    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">            
    <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
        Configurações
    </button>

    <button className="bg-gray-700 px-4 py-3 rounded-lg">
        <FaShareAlt size={24} color="#fff"/>
    </button>
    </div>
            </section>
        </Container>
    )
}