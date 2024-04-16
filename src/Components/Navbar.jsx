import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <>
    <div className="bg-black font-body">
        <nav className="flex flex-row justify-between gap-0 w-[100%] h-36">
            <ul className="flex flex-row justify-center gap-5 uppercase text-white text-s w-[100%] items-center">
                <li><a href="#">hxc feelings</a></li>
                <li><a href="#">tortured souls</a></li>
                <li><a href="#">new in</a></li>
                <li><a href="#">categories</a></li>
                <li><a href="#">explore</a></li>
            </ul>
            <img src="./logo.png" alt="logo" className="h-20 m-8"/>
            <ul className="text-white flex flex-row justify-center items-center w-[100%] uppercase gap-5 text-s">
                <li><a href="#">wishlist</a></li>
                <CartWidget />
            </ul>
        </nav>
    </div>
    
    </>
  )
}

export default Navbar