import React from 'react';
import '../comments_css/Comments.css'

function Comments(props){
    return(
        <div className='container'>
            <img className='imgCommet' src={require(`../img/img_${props.imgName}.jpg`)} alt = {`${props.name}`}/>
            <div className='containerComment'>
                <p className='nameComment'><strong>{props.name}</strong></p>
                <p className='postComment'>{props.charge}</p>
                <p className='textComment'>{props.comment}</p>
            </div>
        </div>
    );
}

export default Comments;