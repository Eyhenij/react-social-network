import React from 'react';
import s from './myPosts.module.css';


const MyPosts = (props) => {
    let onPostChange = (event) => {
        props.updateNewPostText(event.target.value);
    }

    return (
        <div>
            <div>
                <textarea
                    value={props.newPostText}
                    placeholder='please, enter your message'
                    onChange={onPostChange}
                />
            </div>
            <div>
                <button className={s.button} onClick={() => props.addPost()}>Add post</button>
            </div>
            <div>
                {props.arrPosts.map(p =>
                    <div key={p.id} >
                        <span className={s.post__item}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrsa7JI0Kur9LTDnCQ-N3ctRlKSJ9zzbOFw&usqp=CAU'
                                alt='аватарка'/>
                            <span className={s.post__text}>{p.post}</span>
                        </span>
                        <span>
                            <button className={s.button} name='like'>
                                {`Like (${p.likesCounte})`}
                            </button>
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyPosts;