import {FC} from 'react';

const Tagline:FC<any> = (props) =>{
    return(
       <p className='text-tagline'>{props.children}</p> 
    )
}

export default Tagline;