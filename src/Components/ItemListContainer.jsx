function ItemListContainer(greeting) {
  return (
    <div className="relative font-body">
        <img src="./landing-image.jpg" alt="imagen del landing" className="w-[100%] h-[85vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black from-1% via-transparent to-transparent flex flex-row justify-center">
            <h2 className="text-white uppercase m-auto text-7xl text-stroke-1 font-semibold">{greeting.text}</h2>
        </div>
    </div>
  )
}

export default ItemListContainer