import './skills.css'
import { SkillsContainer } from './SkillsContainer'

const front_end_skills = [
  {
    name: "HTML",
    level: "Intermediate",
  },
  {
    name: "CSS",
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    name: "GSAP",
    level: "Basic",
  },
  {
    name: "TailWind",
    level: "Intermediate",
  },
  {
    name: "React",
    level: "Intermediate",
  },
  {
    name: "Angular",
    level: "Basic",
  },
  {
    name: "Vue",
    level: "Intermediate",
  }
];


const back_end_skills = [
  {
    name: "Node.Js",
    level: "Advanced",
  },
  {
    name: "Express.Js",
    level: "Intermediate",
  },
  {
    name: "Sails.Js",
    level: "Intermediate",
  },
  {
    name: "Python",
    level: "Advanced",
  },
  {
    name: "Django",
    level: "Basic",
  },
  {
    name: "Odoo",
    level: "Advanced",
  },
  {
    name: "Go",
    level: "Intermediate",
  }
];

const database_skills = [
  {
    name: "MySQL",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    name: "FireStore",
    level: "Basic",
  },
  {
    name: "CouchDb",
    level: "Intermediate",
  },
  {
    name: "Redis",
    level: "Basic",
  }
];


export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My specialized skills</span>
            <div className="skills-container container grid">
                <SkillsContainer name="FrontEnd" skills={front_end_skills} skills_row={3}/>
                <SkillsContainer name="BackEnd" skills={back_end_skills} skills_row={3}/>
                <SkillsContainer name="Databases" skills={database_skills} skills_row={3}/>
            </div>
        </section>
    )
}
