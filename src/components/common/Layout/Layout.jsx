import Footer from "../../Footer/Footer"
import Hero from "../../Hero/Hero"
import Header from "../Header/Header"

function Layout({ children }) {
    return (
        <>
            <Header/>
            <Hero />
            {
                children
            }
            <Footer/>
        </>
    )
}

export default Layout