import ItemListContainer from "./Components/ItemListContainer"
import LandingBrand from "./Components/LandingBrand"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Error404 from "./Components/Error404"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path={"/"} element={<><LandingBrand text={"Reminiscence"}/><ItemListContainer greeting={"Bienvenido"}/></>} />
          <Route exact path={"category/:id"} element={<ItemListContainer greeting={"Bienvenido"}/>} />
          <Route exact path={"item/:id"} element={<ItemDetailContainer/>} />
          <Route exact path={"*"} element={<Error404/>} />
      </Routes>
    </>
  )
}

export default App