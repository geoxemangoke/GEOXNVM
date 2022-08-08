import { useParams } from "react-router-dom"

const Member = () => {
    const params = useParams()

    return(
        <>
            <h3>{params.memberName}</h3>
            <h3>Hi i'm {params.memberName}</h3>
        </>
    )
}

export default Member;