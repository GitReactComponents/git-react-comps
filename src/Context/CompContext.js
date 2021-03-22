import { createContext, useState } from 'react'
import axios from 'axios'


export const CompContext = createContext()

export const CompProvider = () => {
    const [component, setComponent] = useState({})



    return (
        <CompContext.Provider value={{component, }}>
            {props.children}
        </CompContext.Provider>
    )
}

const CompProvider = CompContext.Provider
const CompConsumer = CompContext.Consumer 

export { CompProvider, CompConsumer } 