import { Link } from "react-router-dom"

const Item = ({ item }) => {

    return(
        <>
            <div className="bg-white">
                <div className="mx-0 max-w-2xl py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-10">
                    <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-1 xl:gap-x-8 lg:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 xs:py-0 xs:w-full">
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
                                <img src={item.albumImg} alt={item.alt} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="mt-4 flex flex-col justify-center lg:flex-row lg:justify-between lg:opacity-0 hover:opacity-100">
                                <div>
                                    <h3 className="text-xl text-gray-900">
                                        <Link to={"/item/" + item.productId}>
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {item.productName}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 lg:text-l text-gray-500 text-xl">
                                        {item.bandName}
                                    </p>
                                </div>
                                <p className="lg:text-l lg:font-medium text-gray-900">${item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Item