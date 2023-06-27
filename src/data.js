// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/react-joke-app.png";
import Logo2 from "./images/github-user-search.png";
import Logo3 from "./images/movie-search.png";
import Logo4 from "./images/memory-game.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "wrp90";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = "A web developer who recently graduated from a bootcamp with Digital Crafts, specializing in JavaScript, React, React-Redux, PostgreSQL, Sequelize, and Node.js. With a strong foundation in JavaScript, I excel at building dynamic web applications. I'm proficient in React and React-Redux, enabling me to create scalable front-end solutions. I also have experience with PostgreSQL and Sequelize for efficient database management. As a full-stack developer, I'm skilled in Node.js, allowing me to develop server-side applications and APIs. I'm passionate about continuously expanding my skill set and keeping up with the latest technologies. I thrive on challenges and enjoy finding innovative solutions. I'm eager to apply my newly acquired skills and collaborate with forward-thinking teams to create impactful web applications. With strong problem-solving abilities and attention to detail, I can work both independently and as part of a team.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = 'https://docs.google.com/document/d/1TIZJnJuMaNQALroJE4THzBkc7vSGY-3MgnVDdSqS2ME/edit?usp=sharing';

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["memory-game", "github-user-search", "movie-search"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "react-joke-app",
    image: Logo,
  },
  {
    name: "github-user-search",
    image: Logo2,
  },
  {
    name: "movie-search",
    image: Logo3,
  },
  {
    name: "memory-game",
    image: Logo4,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
