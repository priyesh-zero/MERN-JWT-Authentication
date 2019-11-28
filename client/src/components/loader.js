import React from 'react'

function Loader (props) {
    const style = {
        width: props.width,
        height: props.height,
        margin: 'auto',
        top: '50%',
        position: 'relative',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        border: '8px solid #ddd',
        borderBottom: 'transparent',
        borderLeft: 'transparent'
    }
    return (
        <div className='loader' style={style} />
    )
}

export default Loader