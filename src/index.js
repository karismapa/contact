import React, { createContext, useState } from 'react'
import Navigation from './navigation'

export const RootContext = createContext()

const ContactApp = () => {
    const [ contacts, setContacts ] = useState([])
    const [ inputName, setInputName ] = useState('')
    const [ inputPhone, setInputPhone ] = useState('')

    handleChangeInputName = (value) => {
        setInputName(value)
    }

    handleChangeInputPhone = (value) => {
        setInputPhone(value)
    }

    addContact = () => {
        const newContact = {
            id: (new Date()).getTime(),
            name: inputName,
            phone: inputPhone,
        }

        setContacts([...contacts, newContact].sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0))
        setInputName('')
        setInputPhone('')
    }

    removeContact = (id) => {
        setContacts(contacts.filter(contact => {
            return contact.id != id
        }))
    }

    return (
        <RootContext.Provider
            value={{
                contacts,
                inputName,
                handleChangeInputName,
                inputPhone,
                handleChangeInputPhone,
                addContact,
                removeContact,
            }}
        >
            <Navigation />
        </RootContext.Provider>
    )
}

export default ContactApp