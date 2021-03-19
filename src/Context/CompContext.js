import React from 'react'

const CompContext = React.createContext()

const CompProvider = CompContext.Provider
const CompConsumer = CompContext.Consumer 

export { CompProvider, CompConsumer } 