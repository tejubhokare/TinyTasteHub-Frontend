import Header from "../Header";
import '../CSS/FoodDetail.css'
export default function FoodDetail() {
    return (
        <>
            <Header />
            <img src='/img/pink background.png'
                alt="service"
                width='100%'
                height='210%'
                className='FoodimgBack'
            />
            <div>
                <img src='/img/Food/avocado.jpg'
                    alt="solidStart"
                    width='30%'
                    height='30%'
                    className="FoodimageStyle"
                />
                <h2 className="Foodh2">Food Name: Avocado</h2>
                <label className="Foodlabel">Food Details:</label>
                <p className="Foodp">
                    Food Type: Fruit<br></br>
                    Age Suggestion : 6 months<br></br>
                    Iron-Rich: No<br></br>
                    Common Allergen: No
                </p>
                <h3 className="Foodh3">When can babies have avocado?</h3>
                <p className="Foodp1">Avocado can be introduced as soon as baby is ready to start solids, which is generally around 6 months of age.
                    <br></br><br></br>The avocado originated in Mesoamerica, where it was prepared and eaten by the Aztecs in a variety of forms, including the now-world-famous guacamole (originally called ahuaca-mulli). Colonizers brought the crop back to Europe with them, and it has since spread across the globe.
                </p>

                <h3 className="Foodh3">Is avocado healthy for babies?</h3>
                <p className="Foodp1">Yes. Avocado is rich in fiber and the healthy fats that babies need to support digestion and brain development.1 Avocados are also a rich source of growth-supportive B-vitamins like folate and B6, and contain vitamin E as well as zinc to fuel immune health. The healthy fats in avocado also make it a good oil option, though occasional use may be preferred because it tends to be expensive.
                    <br></br><br></br>Tip: If you need a rock-hard avocado to ripen quickly, place it in a brown paper bag with an apple or banana, which will release ethylene gas that speeds up the ripening process. Conversely, if you have an avocado that is already ripe that you need to keep for a little longer, popping it in the refrigerator will slow the ripening process.
                </p>
                <h3 className="Foodh3">Is avocado a common allergen?</h3>
                <p className="Foodp1">No. Allergies to avocado are rare but have been reported.2 Avocado allergy is more likely to occur in individuals who are already allergic to banana, chestnut, or kiwi. Those who are allergic to latex or certain pollens may be allergic to avocado or experience Oral Allergy Syndrome (also known as pollen-food allergy).3 4  Oral Allergy Syndrome typically results in short-lived itching or burning in the mouth and is unlikely to result in a dangerous reaction.
                    <br></br><br></br>As you would when introducing any new food, start by offering a small quantity for the first few servings. If there is no adverse reaction, gradually increase the quantity over future meals.
                </p>

                <h3 className="Foodh3">Is avocado a choking hazard for babies?</h3>
                <p className="Foodp1">No. Avocado presents a low risk when safely prepared for a child’s age and developmental ability, though, in theory, an individual could choke on any food. To reduce the risk, prepare and serve avocado in an age-appropriate way. As always, make sure you create a safe eating enviroment and stay within an arm’s reach of baby during meals.

                </p>


            </div>
        </>

    )
}