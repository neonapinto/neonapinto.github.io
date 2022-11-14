import {FC} from 'react';

const Heading:FC<any> = (props) =>{
    return(
        <p className='text-heading'>{props.children}</p>
    )
}

export default Heading;