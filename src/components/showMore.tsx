'use client'
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"
import { ShowMoreProp } from "@/types"
import { updateSearchParams } from "@/utils"

const ShowMore = ({pageNumber, isNext} : ShowMoreProp) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams("limit", `${newLimit}`)
        router.push(newPathName)
    }
    return(
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNext && (
                    <CustomButton
                    title="Seguir viendo"
                    btnType="button"
                    handleClick={handleNavigation}
                    />
                )
            }
        </div>
    )
}

export default ShowMore