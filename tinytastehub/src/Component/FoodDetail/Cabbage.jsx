import Header from "../Header";
import '../CSS/FoodDetail.css'
export default function Cabbage() {
    return (
        <>
            <Header />
            <img src='/img/pink background.png'
                alt="service"
                width='100%'
                height='200%'
                className='FoodimgBack'
            />
            <div>
                <img src='/img/Food/Cabbage.jpg'
                    alt="solidStart"
                    width='30%'
                    height='30%'
                    className="FoodimageStyle"
                />
                <h2 className="Foodh2">Food Name: Cabbage</h2>
                <label className="Foodlabel">Food Details:</label>
                <p className="Foodp">
                    Food Type: Vegetable<br></br>
                    Age Suggestion : 6 months<br></br>
                    Iron-Rich: No<br></br>
                    Common Allergen: No
                </p>
                <h3 className="Foodh3">When can babies have cabbage?</h3>
                <p className="Foodp1">cabbage can be introduced as soon as baby is ready to start solids, which is generally around 6 months of age.
                    <br></br><br></br>Humans learned to cultivate cabbage from wild varieties growing in the fertile lands around the Mediterranean Sea. Some modern types have smooth, waxy leaves that are tightly clustered, like brussels sprouts and red cabbage. Others are crinkly and easier to peel away from the head, like the leaves of napa cabbage and savoy cabbage. There are also cabbages with dark leafy greens on sturdy stems, like bok choy, collard greens, and kale.
                </p>

                <h3 className="Foodh3">Is cabbage healthy for babies?</h3>
                <p className="Foodp1">Yes. Cabbage is a good source of fiber to support the gut and vitamin B6 for energy, plus folate for nervous system development. It also contains a wide range of other beneficial nutrients: vitamin C to support baby’s immune system and help with iron absorption; vitamin K for healthy blood; carotenoids that convert into vitamin A for healthy skin and vision; and even calcium to build healthy bones. Red and purple cabbages also contain potent levels of anthocyanins, a heart-healthy nutrient also found in berries and grapes.
                </p>
                <h3 className="Foodh3">Is cabbage a common allergen?</h3>
                <p className="Foodp1">No. Allergies to cabbage are rare, but not unheard of.5 6 Individuals who are allergic or sensitive to other members of the cruciferous family, such as mustard greens and broccoli, may also be sensitive to cabbage.
                    <br></br><br></br>Individuals with Oral Allergy Syndrome (also known as pollen food allergy syndrome), and in particular, those with sensitivities to mugwort pollen, may also be sensitive to cruciferous vegetables such as cabbage.9 Oral Allergy Syndrome typically results in short-lived itching, tingling, or burning in the mouth and is unlikely to result in a dangerous reaction.
                    <br></br><br></br>As you would when introducing any new food, start by offering a small quantity for the first few servings. If there is no adverse reaction, gradually increase the quantity over future meals.
                </p>

                <h3 className="Foodh3">Is cabbage a choking hazard for babies?</h3>
                <p className="Foodp1">Yes, thick pieces of raw cabbage are firm and hard to chew, qualities that can increase choking risk. To reduce the risk, prepare and serve cabbage in an age-appropriate way.

                </p>


            </div>
        </>

    )
}