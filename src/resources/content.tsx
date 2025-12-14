import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {About, NavItem, Person, Social} from "@/types/types";

export const navBarLinks: NavItem[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: AccountCircleIcon },
    { name: "Projects", href: "/projects", icon: LightbulbIcon },
    { name: "Work", href: "/work", icon: WorkIcon },
];

export const person : Person = {
    firstName: "Alwin",
    lastName: "Zawadzki",
    name: "Alwin Zawadzki",
    email: "alwin.zawadzki@gmail.com",
    role: "Software Engineer",
    languages: ["French", "English"],
    avatar: "/images/avatar.png",
    cv: "/documents/alwin_zawadzki_cv.pdf",
};

export const social: Social = [
    {
        name: "GitHub",
        icon: GitHubIcon,
        link: "https://github.com/AlwinZwdzk",
    },
    {
        name: "LinkedIn",
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/alwin-zawadzki/",
    },
    {
        name: "Email",
        icon: EmailIcon,
        link: `mailto:${person.email}`,
    },
];

export const about: About = {
    intro: {
        title: "Introduction",
        description: (
            <>
            My adventure in computer science started about seven years ago when I discovered Scratch in middle school.
            I immediately knew I wanted to work in this field. I really enjoy combining mathematical logic with the practical side of building applications.<br/>
            Today, I am studying for a Bachelor of Technology in Computer Science at the University of Lens. My training focuses on software and web development,
            as well as Continuous Integration to ensure code quality. My goal is to use these skills for innovative projects and to keep learning every day.
            </>
        ),
    },
    studies: {
        title: "Studies",
        institutions: [
            {
                name: "Lens Institute of Technology",
                description: (
                    <>I am currently in my final year of a Bachelor of Technology in Computer Science.
                    I have learned to build software and web applications (front-end and back-end), and I also have some experience with mobile development.
                    My technical skills include setting up tests and Continuous Integration to ensure quality, as well as managing databases.
                    I am used to working with Agile methods and tools like Git and GitLab to manage projects efficiently. Additionally,
                    I have basic knowledge of Artificial Intelligence, including machine learning and the use of AI agents.
                    </>
                ),
            },
            {
                name: "School of Computer and Industrial Engineering - IG2I Centrale Lille",
                description: <>After the first year, I transferred to a program with a stronger focus on IT.</>,
            },
            {
                name: "Anatole France High School - Lillers",
                description: <>Graduated for  with honors, specializing in Mathematics and Computer Science.</>,
            },
        ],
    },
    technicalSkills: {
        title: "Technical skills",
        types: [
            {
                title: "Languages",
                skills: [
                    { name: "Java", icon: "java" },
                    { name: "PHP", icon: "php" },
                    { name: "Python", icon: "python" },
                    { name: "JavaScript", icon: "javascript" },
                    { name: "C", icon: "c" },
                    { name: "SQL", icon: "sql" },
                    { name: "NoSQL", icon: "nosql" },
                    { name: "Bash", icon: "bash" },
                ],
            },
            {
                title: "Frameworks",
                skills: [
                    { name: "Angular", icon: "angular" },
                    { name: "React", icon: "react" },
                    { name: "Flask", icon: "flask" },
                    { name: "Django", icon: "django" },
                    { name: "Bootstrap", icon: "bootstrap" },
                    { name: "Laravel", icon: "laravel" },
                    { name: "Spring", icon: "spring" },
                ],
            },
            {
                title: "Tools",
                skills: [
                    { name: "JetBrains", icon: "jetbrains" },
                    { name: "Git / GitLab", icon: "git" },
                    { name: "Docker", icon: "docker" },
                ],
            },
        ],
    },
}



