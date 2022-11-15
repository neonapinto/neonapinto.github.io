import {FC} from 'react'; 
import SubHeading from './../components/Text/SubHeading';
import Tagline from './../components/Text/Tagline';
import Body from './../components/Text/Body';
import TwoColumns from './../layouts/TwoColumns';
import Avatar from './../components/Avatar/Avatar';
import { TypeAnimation } from 'react-type-animation';

const Home:FC = () =>{ 
    return(
          <TwoColumns 
          left={
            <>
              <Tagline>Hello I'm</Tagline>
              <TypeAnimation
                sequence={[
                  'Neona Pinto.', 
                  1000,
                  ''
                ]}
                wrapper="h1"
                deletionSpeed={1}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: 'clamp(40px, 8vw, 80px)', color:  'white', margin:0 }}
              />
              <SubHeading>Front End Developer</SubHeading>
              <Body>I design and code beautifully simple things, and I love what I do. Interested in the front-end spectrum and working on ambitious projects with positive people.</Body>
            </>
          } 
          right={
              <>
              <Avatar/>
              </> }
          />
    );
}

export default Home;