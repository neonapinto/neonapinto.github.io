import { FC } from 'react';

const SubHeading:FC<any> = (props) =>{
    return(
        <p className='text-sub-heading'>{props.children}</p>
    )
}

export default SubHeading;