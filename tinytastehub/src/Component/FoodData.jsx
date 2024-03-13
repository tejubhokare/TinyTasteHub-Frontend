import './CSS/FoodData.css'
import Filter from './Filter'
export default function FoodData() {

    return (
        <>
            <img src='/img/FoodHome.jpg'
                alt="service"
                width='100%'
                height='135%'
                className='imgBack'
            />
            <div className="mainDiv">
                {/* <div className='filter'></div> */}
                <Filter />
                <div className="subDivStyle">
                    <div className="divStyle">
                        <img src='/img/Food/eggs.jpg' alt="visa" className="imageStyle" />
                        {/* <img src='/img/visa1.png' alt="visa" className="logoStyle" /> */}
                        <h3 className="h3">Egg </h3>
                        <p className='p'>Protein</p>
                        {/* <button className="button">Get Started</button> */}
                    </div>

                    <div className="divStyle">
                        <img src='/img/Food/Blueberries.jpg' alt="work" className="imageStyle" />
                        {/* <img src='/img/worklogo3.png' alt="work" className="logoStyle" /> */}
                        <h3 className="h3"> Blueberries </h3>
                        <p className='p'>Fruit</p>
                        {/* <button className="button">Get Started</button> */}
                    </div>

                    <div className="divStyle">
                        <img src='/img/Food/Cabbage.jpg' alt="express" className="imageStyle" />
                        {/* <img src='/img/leaf2.jpg' alt="express" className="logoStyle" /> */}
                        <h3 className="h3">Cabbage </h3>
                        <p className='p'> Vegetables </p>
                        {/* <button className="button">Get Started</button> */}
                    </div>
                </div>







            </div>
        </>
    )
}