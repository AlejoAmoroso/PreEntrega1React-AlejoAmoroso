import { useState, useEffect } from "react"
import arrayProdcuts from "../products/json/products.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const fetchItems = () => {
    return new Promise(res => {
        setTimeout(() => {
            res(arrayProdcuts)
        }, 2000);
    })
}

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems()
            setItem(id ? data.find(i => i.productId == id) : {})
        }

        fetchData()
    }, [id])

    return(
        <ItemDetail item={item}/>
    )

}

export default ItemDetailContainer
