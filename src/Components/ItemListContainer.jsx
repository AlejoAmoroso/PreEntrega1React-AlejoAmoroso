import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"
import arrayProducts from "../products/json/products.json"
import ItemDetailContainer from './ItemDetailContainer'

const fetchItems = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(arrayProducts)
        }, 2000)
    }) 
}

const ItemListContainer = ({greeting}) => {    
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fecthData = async () => {
            const data = await fetchItems(id)
            setItems(id ? data.filter(i => i.category == id) : data)
        }

        fecthData()
    }, [id])

    return(
        <section className="bg-white"> 
            <h2 className="text-5xl font-body text-black pt-5 text-center mt-0">{greeting}</h2>
            <ItemList items={ items } />
        </section>
    )
}
export default ItemListContainer