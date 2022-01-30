// Components
import Testimonial from "../Components/Testimonial/Testimonial";

// Assets
import Taxi from "../Assets/taxi.jpg";
import Boxing from "../Assets/boxing.jpg";
import Player from "../Assets/player.jpg";
import Closet from "../Assets/closet.jpg";

const Testimonials = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <Testimonial 
                img={Taxi}
                owner="Nordin"
                business="Administratie Taxi"
            />
            <Testimonial 
                img={Boxing}
                owner="Sabri Boudarra"
                business="Thaiboxing010"
                text="Antonio is een fijne kerel om mee samen te werken. 
                Hij nam vaak contact op om te kijken of alles naar verlangen liep 
                en het eindresultaat mag er zeker zijn!"
            />
            <Testimonial 
                img={Player}
                owner="Clancy Konadu"
                business="4ThePlayers"
            />
            <Testimonial 
                img={Closet}
                owner="Anela Sefer"
                business="Anela's Closet"
                text="Super fijne samenwerking, werkt efficiënt, goede communicatie, levert goed werk 100% aangeraden"
            />
        </div>
    );
};

export default Testimonials;