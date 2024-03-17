import React from 'react';
import '../comments_css/TextReference.css';

function TextReference(props){
    return(
        <div className = 'container_text_reference'>
            <p className='text_reference'>
                {props.view}
            </p>
        </div>
    )
}

export default TextReference;