import  {FC} from 'react';

const Avatar:FC = () =>{
    return(
        <div className='avatar-container'>           
            <div className='hexagon hexagon2 front'>
                <div className='hexagon-in1'>
                    <div className='hexagon-in2'>
                    <img src='/img/avatar.png' alt='This is me!' className='avatar-img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avatar;