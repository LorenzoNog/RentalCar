import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

const Navbar = () => {
    return(
        <div className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href={'/'} className="flex justify-center items-center">
                    <Image
                        alt="logo"
                        src={'/logo.png'}
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <span className="text-[45px] font-extrabold text-[#3b3c98] ml-2">RentalCar</span>
                </Link>
                <div>
                    <span className="font-light text-gray-400 text-xl">
                        Iniciar sesión
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar