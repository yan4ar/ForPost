import { Header } from "./main_components/Header";
import { Footer } from "./main_components/Footer";
import { Outlet } from "react-router-dom";
export function Layout () {
    return(
    <>
    <Header/>
        <Outlet/>
    <Footer/>
    </>
)}