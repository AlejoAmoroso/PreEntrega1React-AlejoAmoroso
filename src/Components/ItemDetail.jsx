import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    console.log(item.stock)

    return(
        <div className="w-full grid grid-cols-2 lg:px-10 lg:gap-10 my-6">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
                <img src={item.albumImg} alt={item.alt} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <p>{item.description}</p> 
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail