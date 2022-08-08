import items from "../items";
import { useParams } from "react-router-dom";

const Item = () => {
    const params = useParams()
    const matchIem = items.find(item => item.id == params.itemId)

    return (
        <div>
            <h1>{matchIem.name}</h1>
            <p>Power : {matchIem.power}</p>
        </div>
    )
}

export default Item;