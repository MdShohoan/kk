import Footer from "../../Footer/Footer"
import Hero from "../../Hero/Hero"

function Layout({ children }) {
    return (
        <>
            <Hero />
            {
                children
            }
            <Footer/>
        </>
    )
}

export default Layout