import "./Styles/project.css";

const ProjectItem = props => {
    return (
        <div className="menu__item py-4">
            <a href={props.link} className="menu__item-link font-bold text-5xl md:text-9xl">{props.projectTitle}</a>
            <img className="menu__item-img" src={props.projectIMG} alt="Project image"/>
            <div className="marquee font-bold text-7xl md:text-9xl">
                <div className="marquee__inner" aria-hidden="true">
                    <span>{props.projectTitle}</span>
                    <span>{props.projectTitle}</span>
                    <span>{props.projectTitle}</span>
                    <span>{props.projectTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;