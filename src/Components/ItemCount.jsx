import {useState} from "react"

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    const [itemStock, setItemStock] = useState(stock)

    const handleIncrement = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        if(count <= itemStock){
            setItemStock(itemStock - count)
            setCount(1)
            console.log("Agregaste " + count + " productos al carrito")
        }
    }

    return( 
        <div className="container">
            <div className="flex flex-row justify-center items-center gap-x-2">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-0 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleDecrement}>-</button>
                <span className="text-gray px-2">{count}</span>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-0 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleIncrement}>+</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-0 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount