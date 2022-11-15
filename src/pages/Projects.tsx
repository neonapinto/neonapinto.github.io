import {FC} from 'react';
import Cards from './../components/Cards/Cards';
import Heading from './../components/Text/Heading';

export interface IProjects{
    img_src: number;
    name: string;
    text: string;
    link: string
};


export const data:IProjects[] = [
    {   
        img_src: 1, 
        name: "Master Chef",
        text: "An user-friendly web-based cooking game, that lets a user choose a combination of the right ingredients and cooking methods in order to cook the dish.",
        link: "https://github.com/neonapinto/"
    },
        
    {   
        img_src: 2, 
        name: "Food Lens API",
        text: "An API that predicts food or beverage from images and provides all the information including calories, macro nutrition levels, and delivers the recipe of the dish.",
        link: "https://github.com/neonapinto/"
    },
    {   
        img_src: 3,
        name: "Emoji Chat API",
        text: "A fun chat-based web app that makes sending texts much more fun. The user can send texts which get converted into emojis on sending in the chat.",
        link : "https://github.com/neonapinto/"
    }
];

const Projects:FC = () =>{
    return(
        <div className='two-column project-container'>
            <div className='one-column'>
                <Heading>My Projects.</Heading>
                <p className='text-body project-link'>Here are some of my personal projects I have worked on. Check out my other projects in my <a href="https://github.com/neonapinto/" rel="noopener noreferrer" target={"_blank"}>github</a> account.</p>
                <div className='project-cards'>
                    <Cards>{data}</Cards>
                </div>
            </div>
        </div>
    );
}

export default Projects;