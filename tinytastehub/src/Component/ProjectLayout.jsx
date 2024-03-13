import Header from './Header'
import Footer from './Footer'

import Hero from "./Hero";
import FoodData from './FoodData';
// import FoodData from './FoodData';

export function ProjectLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
                <Hero />
                <FoodData />
            </div>
            <Footer />
        </div>
    )
}
