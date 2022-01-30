// Components
import ProjectItem from "./ProjectItem";

// Styles
import "./Styles/project.css";

// Assets
import Newspaper from "../../Assets/Screenshots/np_ss.png";
import Taxi from "../../Assets/Screenshots/at_ss.png";
import Tb010 from "../../Assets/Screenshots/tb_ss.png";
import Player from "../../Assets/Screenshots/ftp_ss.png";
import HUS from "../../Assets/Screenshots/hus_ss.png";

const ProjectsList = () => {
    return (
        <main>
            <nav className="menu">
                <ProjectItem 
                    projectTitle="Newspaper"
                    projectIMG={Newspaper}
                    link="https://github.com/AntonioSkopin/Newspapr" />
                <ProjectItem 
                    projectTitle="Admin Taxi"
                    projectIMG={Taxi}
                    link="https://administratietaxi.nl" />
                <ProjectItem 
                    projectTitle="Thaiboxing 010"
                    projectIMG={Tb010}
                    link="https://thaiboxing010.com" />
                <ProjectItem 
                    projectTitle="4ThePlayers"
                    projectIMG={Player}
                    link="https://4theplayers.eu" />
                <ProjectItem 
                    projectTitle="HUS Nesselande"
                    projectIMG={HUS}
                    link="" />
            </nav>
        </main>
    );
};

export default ProjectsList;