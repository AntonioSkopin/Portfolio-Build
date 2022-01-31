// Components
import InputText from "../Components/Forms/InputText";
import TextArea from "../Components/Forms/TextArea";
import OrangeButton from "../Components/Buttons/OrangeButton";

const Contact = () => {
    return (
        <div id="contact" className="w-screen" style={{ backgroundColor: "#1b1b1e" }}>
            <div className="container mx-auto px-4 py-20 text-white">
                <div className="flex flex-col md:flex-row">
                    <div>
                        <h1 className="text-3xl md:text-5xl xl:text-7xl py-4 font-semibold w-3/4 leading-normal">
                            Let's discuss
                            your project
                        </h1>
                        <form action="https://formspree.io/f/mknyjowr" method="POST" className="py-4 md:py-12 flex flex-col w-max">
                            <InputText placeholder="Name*" name="name" />
                            <InputText placeholder="Email*" name="email" />
                            <TextArea placeholder="Your message" name="message" />
                            <OrangeButton 
                                text="Send"
                                textColor="button-text-white" />
                        </form>
                    </div>
                    <div className="py-8">
                        <p className="text-2xl font-light leading-relaxed">
                            Besides, there's a
                            bunch of other ways to
                            contact me
                        </p>
                        <div className="py-20 pr-4 grid grid-cols-2 gap-20">
                            <div>
                                <div>
                                    <small className="text-gray-400">Email</small>
                                    <p className="text-lg md:text-xl">a_skopin@icloud.com</p>
                                </div>
                                <div className="py-8">
                                    <small className="text-gray-400">Phone</small>
                                    <p className="text-lg md:text-xl">+31 6 18317710</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <small className="text-gray-400">Based in</small>
                                    <p className="text-lg md:text-xl">Rotterdam, the Netherlands</p>
                                </div>
                                <div className="py-8">
                                    <small className="text-gray-400">Messengers</small>
                                    <p className="text-lg md:text-xl">INSTAGRAM</p>
                                    <p className="text-lg md:text-xl">LINKEDIN</p>
                                    <p className="text-lg md:text-xl">FACEBOOK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;