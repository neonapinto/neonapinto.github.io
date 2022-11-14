import {FC} from 'react';
import Cards from './../components/Cards/Cards';
import Body from './../components/Text/Body';
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
        text: "Designed and implemented a user-friendly cooking game, that lets a user choose a combination of the right ingredients and cooking methods in order to cook the dish.",
        link: "https://github.com/neonapinto/"
    },
        
    {   
        img_src: 2, 
        name: "Food Lens API",
        text: "Developed an API that predicts food or beverage from images and provides all the information including calories, macro nutrition levels, and delivers the recipe of thedish.",
        link: "https://github.com/neonapinto/"
    },
    {   
        img_src: 3,
        name: "Emoji Chat API",
        text: "Developed an API that predicts food or beverage from images and provides all the information including calories, macro nutrition levels, and delivers the recipe.",
        link : "https://github.com/neonapinto/"
    }
];

const Projects:FC = () =>{
    return(
        <div className='two-column project-container'>
            <div className='one-column'>
                <Heading>My Projects.</Heading>
                <Body>Designed and implemented a user-friendly cooking game, that lets a user choose a combination of the right ingredients and cooking methods in order to cook the dish.</Body>
                <div className='project-cards'>
                    <Cards>{data}</Cards>
                </div>
            </div>
        </div>
    );
}

export default Projects;