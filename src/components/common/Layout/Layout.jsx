import { useLocation } from "react-router-dom"
import Anniversary from "../../Anniversary/Anniversary"
import Footer from "../../Footer/Footer"
import Hero from "../../Hero/Hero"
import Header from "../Header/Header"

function Layout({ children }) {
    const currentLocation = useLocation()
    const path = currentLocation?.pathname

    return (
        <>
            {
                path === '/' && <Anniversary />
            }
            <Header />
            <Hero />
            {
                children
            }
            <Footer />
        </>
    )
}

export default Layout