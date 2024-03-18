import Header from '../Header'
import '../CSS/GuidesCSS/StartingSolid.css'
export default function StartingSolid() {
    return (
        <>
            <Header />
            <img src='/img/FoodHome1.jpg'
                alt="service"
                width='100%'
                height='250%'
                className="StartingSolidimgBack"
            />
            <h1 className='StartingSolidh1'>Starting Solid Guides</h1>
            {/* <div className='SolidDiv1'> */}
            <h3 className='StartingSolidh3'>
                Starting Solid Foods: 6–12 Months</h3>
            <p className='StartingSolidp'>
                Your baby’s nutrition needs are changing! We’ve got the information you need to get off to a good start with solid foods. Learn what foods and textures to offer, when to offer them, and how much to offer.<br></br>

                <br></br>Adjusting to solid foods takes time. Remember, your baby is exploring and learning how to use their mouth, tongue and throat in a new way.
            </p>
            {/* </div> */}

            <img src='/img/SolidStart.jpg'
                alt="solidStart"
                width='50%'
                height='50%'
                className="StartingSolidimageStyle"
            />

            <div>
                <h2 className='StartingSolidh2'>Changes in feeding patterns</h2>
                <h3 style={{
                    marginTop: '3%',
                    marginLeft: '15%'
                }}>Changing nutrition needs</h3>
                <p style={{
                    color: 'black',
                    width: '32%',
                    marginLeft: '8%'
                }}>
                    The nutrition your baby needs will change during their first year. Along with breastmilk or infant formula, most babies are ready to start solid foods when they’re about 6 months old. As your baby eats more solid food, they’ll start to drink less breastmilk or infant formula, although these still remain an important food for them.</p>

                <h3 style={{
                    marginTop: '-15%',
                    marginLeft: '70%'
                }}>Breastfeeding</h3>
                <p style={{
                    color: 'black',
                    width: '32%',
                    marginLeft: '60%'
                }}>After 6 months, your baby will usually breastfeed about 5−6 times a day (24 hours). Continue to breastfeed while you’re starting solid foods. The longer you breastfeed, the more you and your baby will benefit. If you’re breastfeeding, there is no need to give any other milk to your baby.</p>
                <h3 style={{
                    marginTop: '3%',
                    marginLeft: '45%'
                }}>Infant formula</h3>
                <p style={{
                    marginTop: '1%',
                    marginLeft: '22%',
                    width: '55%'
                }}>Between 6−8 months, your baby will formula-feed 4−5 times a day (24 hours), about 120−240 ml (4−8 oz) at each feeding.

                    <br></br>Between 9−12 months, the number of times your baby feeds will go down, but the amount they drink may go up. You can also give your baby pasteurized, homogenized whole (3.25% milk fat) milk at this age.
                </p>
            </div>

            <div>
                <h2 className='StartingSolidh2'>Starting solid foods</h2>
                <h3 className='StartingSolidh3'>
                    Signs your baby is ready</h3>
                <p className='StartingSolidp'>
                    Swallowing solids is different from swallowing milk. Before they are 6 months old, your baby’s mouth is designed to suck and swallow. Around 6 months old, your baby will start to develop the ability to move food from the front of their mouth to the back so they can swallow safely. Solid foods are introduced gradually at this time.
                </p>
                <img src='/img/SolidStart1.jpg'
                    alt="solidStart"
                    width='50%'
                    height='50%'
                    className="StartingSolidimageStyle"
                />
            </div>




        </>
    )
}