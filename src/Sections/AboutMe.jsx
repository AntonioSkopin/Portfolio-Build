// Components
import OrangeButton from "../Components/Buttons/OrangeButton";

const AboutMe = () => {
    return (
        <div id="about" className="container mx-auto px-4 py-24">
            <h1 className="text-2xl md:text-5xl font-light leading-loose md:leading-relaxed">
                A fullstack webdeveloper driven by ideas and
                enthusiasm. My goal is to build user friendly websites
                and help businesses grow. My design style is simplistic yet effective and I design with a purpose! 
                I'm well-versed in producing mobile/desktop applications and websites which satisfy 
                clients and keep users happy.
            </h1>
            <div className="text-center py-8">
                <OrangeButton 
                    text="Download CV"
                    textColor="button-text-black"
                    width="15rem" />
            </div>
        </div>
    );
};

export default AboutMe;