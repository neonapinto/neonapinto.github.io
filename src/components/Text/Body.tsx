import { FC } from 'react';

const Body: FC<{children: string}> = (props) => {
    return (
        <p className='text-body'>{props.children}</p>
    )
}

export default Body;