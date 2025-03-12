import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Products from "./Pages/Products"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/Contact"
import Career from "./Pages/Career"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/career" element={<Career/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}