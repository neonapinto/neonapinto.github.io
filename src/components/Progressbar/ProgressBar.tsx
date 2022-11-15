import {FC} from 'react';

const ProgressBar:FC<any> = (props:any) => {
    return (props.children.map( (item:any) =>{
        return (
            <div className='progress-container' key={item.type}>
                <p>{item.type}</p>
                <div className='progress-bar'>
                    <div className='progress-bar-percentage' style={{width: item.percentage + '%'}}></div>
                </div>
            </div>
        )
}))
}



export default ProgressBar;