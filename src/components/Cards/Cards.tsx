import {FC} from 'react'
import SubHeading from './../../components/Text/SubHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Cards:FC<any> = (props:any) => {
    return (props.children.map( (item:any) =>{
        return (
            <AnimationOnScroll animateIn='animate__fadeInLeftBig'  key={item.img_src}>
                {/* <div className='cards-container' key={item.img_src} onClick={() => {window.open(item.link,'_blank')}}> */}
                <div className='cards-container' key={item.img_src}>
                    <div className='cards-img-container'>
                        <img src={`/img/projects/${item.img_src}.png`} alt={item.name} className='cards-img' loading='lazy'/>
                    </div>
                    <div className='cards-content'>
                        <SubHeading>{item.name}</SubHeading>
                        <p className='cards-content-text'>{item.text}</p>
                    </div>
                </div>
            </AnimationOnScroll>
        )
}))
}

export default Cards;