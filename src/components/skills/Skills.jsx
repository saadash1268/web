import './skills.css';
import SkillsImage from "../../assets/SkillsImage.png";

const Skills = () => {

    return(
        
        <div> 
        <h2 className='heading'>Skills</h2>
        <img src={SkillsImage} alt = "List of skills" className='skills-image'></img>
        </div>

    );
};


export default Skills;