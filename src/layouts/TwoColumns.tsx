import { FC, ReactElement } from 'react'

const TwoColumns: FC<{ left: ReactElement, right: ReactElement }> = (props) => {
    return (
        <div className='two-column'>
            <div className='two-column-left'>
                {props.left}
            </div >
            <div className='two-column-right'>
                {props.right}
            </div >
        </div>
    )
}

export default TwoColumns;