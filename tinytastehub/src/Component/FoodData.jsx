import './CSS/FoodData.css'
import Filter from './Filter'


export default function FoodData() {

    return (
        <>
            <img src='/img/FoodHome1.jpg'
                alt="service"
                width='100%'
                height='175%'
                className='imgBack'
            />
            <div className="mainDiv">
                {/* <Filter /> */}
                <div className="subDivStyle">
                    <div className="divStyle" >
                        <a href="/FoodDetail" className="hyperlinkStyle">
                            <img src='/img/Food/avocado.jpg' alt="visa" className="imageStyle" />
                            <h3 className="h3">Avocado </h3>
                            <p className='p'>Fruit</p>
                        </a>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/Cabbage.jpg' alt="express" className="imageStyle" />
                        <h3 className="h3">Cabbage </h3>
                        <p className='p'> Vegetables </p>
                    </div>

                    <div className="divStyle">
                        <img src='/img/Food/Blueberries.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Blueberries </h3>
                        <p className='p'>Fruit</p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/Rice.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Rice </h3>
                        <p className='p'>Grain</p>
                    </div>




                </div>

                <div className="subDivStyle">
                    <div className="divStyle">
                        <img src='/img/Food/Tomato.jpg' alt="express" className="imageStyle" />
                        <h3 className="h3">Tomato </h3>
                        <p className='p'> Vegetables </p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/Corn.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Corn </h3>
                        <p className='p'>Grain</p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/Kiwi.jpg' alt="visa" className="imageStyle" />
                        <h3 className="h3">Kiwi </h3>
                        <p className='p'>Fruit</p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/eggs.jpg' alt="visa" className="imageStyle" />
                        <h3 className="h3">Egg </h3>
                        <p className='p'>Protein</p>
                    </div>


                </div>
                <div className="subDivStyle">
                    <div className="divStyle">
                        <img src='/img/Food/Bread.jpg' alt="visa" className="imageStyle" />
                        <h3 className="h3">Bread </h3>
                        <p className='p'>Grain</p>
                    </div>

                    <div className="divStyle">
                        <img src='/img/Food/Cheese.jpg' alt="express" className="imageStyle" />
                        <h3 className="h3">Cheese </h3>
                        <p className='p'> Dairy </p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/chicken.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Chicken </h3>
                        <p className='p'>Protein</p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/strawberries.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Strawberries </h3>
                        <p className='p'>Fruit</p>
                    </div>

                </div>
                <div className="subDivStyle">
                    <div className="divStyle">
                        <img src='/img/Food/Tilapia.jpg' alt="visa" className="imageStyle" />
                        <h3 className="h3">Tilapia </h3>
                        <p className='p'>Fish</p>
                    </div>

                    <div className="divStyle">
                        <img src='/img/Food/Spinach.jpg' alt="express" className="imageStyle" />
                        <h3 className="h3">Spinach </h3>
                        <p className='p'> Vegetables </p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/Walnut.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Walnut </h3>
                        <p className='p'>Tree Nut</p>
                    </div>
                    <div className="divStyle">
                        <img src='/img/Food/Sour_Cream.jpg' alt="work" className="imageStyle" />
                        <h3 className="h3"> Sour Cream </h3>
                        <p className='p'>Dairy</p>
                    </div>


                </div>


                <Filter />



            </div>

        </>
    )
}