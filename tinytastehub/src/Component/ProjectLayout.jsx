import Header from './Header'
import Footer from './Footer'
import Hero from "./Hero";
import FoodData from './FoodData';
import Guides from './Guides';



export function ProjectLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
                <Hero />
                <FoodData />
                {/* <Guides /> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
