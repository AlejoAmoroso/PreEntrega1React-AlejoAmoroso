import Item from "./Item"

const ItemList = ({ items }) => {

    return(
        <>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full h-full justify-center px-2">
                {items.map((i) => {
                    return <Item key={i.key} item={i}/>
                })}
            </div>
        </>
    )

}

export default ItemList