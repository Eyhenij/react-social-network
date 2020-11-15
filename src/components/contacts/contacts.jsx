import React from 'react';
import s from './contacts.module.css';
import CommunityItem from "./communityItem/communityItem";

const Contacts = (state) => {
    let communityList = state.contactsPage.arrMyContacts.map(c =>
        <CommunityItem name={c.name} id={c.id} avatar={c.avatar} key={c.id}/>
    )

    const onAddContact = () => {
        state.addContact()
    }

    let onContactChange = (event) => {
        let contactText = event.target.value;
        state.updateNewContactText(contactText);
    }

    return (
        <div className={s.community}>
            <div>
                {communityList}
            </div>
            <textarea
                value={state.contactsPage.newContactName}
                placeholder='please, enter name of a new contact'
                onChange={onContactChange}
            />
            <div>
                <button onClick={onAddContact}>New contact</button>
            </div>
        </div>
    )
}


export default Contacts;