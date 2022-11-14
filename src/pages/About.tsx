import {FC} from 'react';
import ProgressBar from './../components/Progressbar/ProgressBar';
import TwoColumns from './../layouts/TwoColumns';
import Heading from './../components/Text/Heading';
import Body from './../components/Text/Body';
import SubHeading from '../components/Text/SubHeading';
import Tagline from '../components/Text/Tagline';

export interface Experience{
    type: string;
    percentage: number;
};


export const data:Experience[] = [
    {type: "HTML / CSS", percentage: 90},
    {type: "Javascript", percentage: 94},
    {type: "ReactJs", percentage: 82},
    {type: "NodeJs", percentage: 75},

];

const About:FC = () =>{
    return(
        <>
        
            <TwoColumns 
            left={
            <>
                <Heading>About me.</Heading>
                <Body>Hello, I'm Neona and I enjoy creating things that live on the internet. My love for the web development started back in 2017 when I started working on an Alumni website back in the University. Fast-forward to today, I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, and JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                 </Body>
                 <p className='text-body about-contact'>
                    Visit my <a href="https://www.linkedin.com/in/neona-pinto/" target={"_blank"}>LinkedIn</a>profile for more details.
                 </p>
            </>
            } 
            right={
                <>
                    <ProgressBar>{data}</ProgressBar>
                    <div className='experience-container' onClick={() => {window.open('./resume/resume.pdf', '_blank')}}>
                        <div>
                            <SubHeading>Frontend Developer</SubHeading>
                            <Tagline>Access Research Labs</Tagline>
                            <Body>2018 - 2021</Body>
                            <Body>Software and service providers with cutting-edge technology to provide effective software development, network communication, business and operations, and IT infrastructure services</Body>

                        </div>
                    </div>
                </>
            } 
            />
        </>
    );
}

export default About;

// "start": "webpack-dev-server --open --mode development --hot",
// "build": "webpack --mode production",