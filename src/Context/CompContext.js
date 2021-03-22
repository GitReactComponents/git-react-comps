import {createContext, useState} from 'react'
import axios from 'axios'


export const CompContext = createContext(null)

export const CompProvider = (props) => {
    const [component, setComponent] = useState({})



    return (
        <CompContext.Provider value={{component, }}>
            {props.children}
        </CompContext.Provider>
    )
}