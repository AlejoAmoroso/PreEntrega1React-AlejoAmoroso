import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="font-body">
        <nav className="flex flex-row justify-between gap-0 w-[100%] h-36 bg-black">
            <ul className="flex flex-row justify-center gap-5 uppercase text-white text-s w-[100%] items-center">
                <li><NavLink to={"category/hxcfeelings"}>hxc feelings</NavLink></li>
                <li><NavLink to={"category/torturedsouls"}>tortured souls</NavLink></li>
                {/* <li><a href="#">categories</a></li>
                <li><a href="#">explore</a></li> */}
            </ul>
            <Link to={"/"}><img src="https://lh3.googleusercontent.com/fife/ALs6j_G6HGFftfT1pNoXqY7xvsr6bGJhvJky7fiqoWYo3STRQTRG5K06ULif_m8auiY8h3eWwQaJMOZMxNq9kCWGiw6r__4EC44ZChbHSeC2pj_ozZhHyQv6a1ZSEBnkb8-fMrYKjDLl2lBOnjvZ6-hhUHoRJe8y68dIY6Mcj3gXfvHpxN_kBm0pQJZ7023pC5xW8s0skkuYVEoFQ_NXlq7lxvzViymcNWMdqZH9-Pb3i0RflfQI8PtpF6EgLuJCMACaZyGpB-vp13Ttbhah68ro5YFeGSavuRyDhp3X7BPiztKcOxc9NxICFpbFKuo-aTkC6QZ60cbeYCXvugtpEf0NOuXWblfAaumWFph2RPJ31WpU_5ix51tx38oO7ObyPpl_-wDr9OZvAGXwhZp3OGa5ai0TvogR-UAvgUQSujmikVaJLWpWwX5jE86XpWPLEbEbJcGb_qUUQRbR7qbOpJfAXSWtgtVxyJ_qLWfMo49UHlR0w4KyRepUjAyXMp2ql72LbiAITuGs8TUUAvf2Y69_N0WpWtdEKzCMLuOs_JKIo8GVQldbQDXfPJ2_cWcWK_PQe7OBFm8IvF072NrTRtyqz5slckeMpSrQqZSCJIGsqBKGzKc24DNFnKSambKE4Ejqj90buWg2_a5kduPqjsaegIEmBRVWJekknySRcYJC6ckS-sRTjdtN5Nxu1EJUaGTvK_Qc-fd8FNG9jGeU_zbkKGxaw7zbJXBG3Itf4fGzdwttDz97EGLiHSMlRYVjUFppQz8Nn9HmNUG-HaZ45wlPbFskAFUpu78gHP3bA_Ydp3sWH7eeMltXmzunAjSTrDa6a9eR283xTpNQuEk36E70Xk6NnFW1okJAGIpZIj0OCAPagBqX2uugX_OgXZ3ShJd_eMa7dDqRXRh0F2LQ8AiPfoQWe49X-D1BZ-g_s4lhG2eYLRVfjO4_LiHx3v86AqDPIgLcm6iH5P1VLnYhjkK9iv3dIGREMJFckjaG6PfuD9tV2Xsp3v1OTNwUu4PzIMIqz5guzyTPF2NiZoLKg5gLTrNo2WaJSQeo_h1JOktSBWQIuBIEkQ9TnEBTsxmwTR-CPgpbkK0-42GnUmwJDMmGSSZpgJWUMPFd2Kuv-l95ysTAXJzsaEbagHmyxVvhdI64AtNopqBuqc6Eq7Z7KcjcZ7uKuorXdNjp6kP70snaT0swC4qn0ttfkFmrIl5bPmDkwB-aifkbh2ojhIV2aXQH3gDnZpp_jZ_ckW-HgSW87CfumsIqzei2Is9JXPFbqnf1QM0qdTOgTpe3qM5DkWUPoc_1Wy-U-mXt7oXFQljFmOkykNfCOmuOVbabiC3he_bXX-KYsHtFiLGxrZ5TKnWw-Z05gV4Z7luNwuG4z8lXdTJMrzqTc7I7JqCtqtBUMnpACTqetVrvF65TVsP2lm8mTs4BREkZPCmRivpbaJGLB5aIbxhTrbJ0g5rIK_fFco1fbjiJ6bS5bi-ilzNRQz2Qhn2-E2aWn0r1jniPz7nTPndqeox1WDLe8K57JOVTS8NlcjFtNSvwTvUcYaQq3lgMe5qycpUglAtpTrleIgMlpyVpJtbuDOxDbykFg9aOt7cXK_U65wslbZKbvmSAC5Z2ucHNMvvK0UaZ-paJu2dx0N2X0v6DumF4sD3YtDsWAd_TT-vKLnIOPz2ZtMpHzhcS4eYRXEf8j2Hqc1EJQXjcL8pGhPPIhcVH8tBWpQ=w1598-h1298" alt="logo" className="h-20 m-8"/></Link>
            <ul className="text-white flex flex-row justify-center items-center w-[100%] uppercase gap-5 text-s">
                {/* <li><a href="#">wishlist</a></li> */}
                <CartWidget />
            </ul>
        </nav>
    </div>
    
    </>
  )
}

export default Navbar