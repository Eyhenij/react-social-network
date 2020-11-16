import React from 'react';
import s from './contacts.module.css';
import CommunityList from "./communityList/communityList";

const Contacts = (props) => {

    // const onShowContacts = () => {
    //     state.showContacts()
    // }

    return (
        <div>
            <div>
                <CommunityList arrUsers={props.arrUsers}/>
            </div>
            {/*<div>*/}
            {/*    <button onClick={onShowContacts}>Show more</button>*/}
            {/*</div>*/}
        </div>
    )
}


export default Contacts;