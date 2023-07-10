import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
    return(
        <footer className="flex flex-col text-gray-800 mt-[10%] border-t border-2">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6"> 
                    <div className="flex flex-row gap-2">
                        <Image alt="logo" src={"/logo.png"} height={50} width={50}/>
                        <span className="text-2xl font-extrabold text-[#3b3c98]">RentalCar</span>
                    </div>
                    <div className="flex flex-col">
                        <small className="font-light text-gray-500">RentalCar 2023</small>
                        <small className="font-light text-gray-500">Todos los derechos reservados.</small>
                    </div>
                </div>
                <div className="footer__links">
                    {
                        footerLinks.map((link) => (
                            <div key={link.title} className="footer__link">
                                    <h3 className="font-bold">{link.title}</h3>
                                    {
                                        link.links.map((link) => (
                                            <Link key={link.title} href={link.url}>
                                                <small>{link.title}</small>
                                            </Link>
                                        ))
                                    }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-berween place-items-center mt-10 border-t border-2 sm:px-16 px-6 py-4 font-bold">
                <small className="text-gray-500">
                    @2023 RentalCar. Todos los derechos reservados.
                </small>
                    <div className="footer__copyrights-link">
                        <Link href='/'>
                            Politica de privacidad
                        </Link>
                        <Link href='/'>
                            Términos de uso
                        </Link>
                    </div>
                </div>
        </footer>
    )
}

export default Footer