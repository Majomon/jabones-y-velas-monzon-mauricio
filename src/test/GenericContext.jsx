import React, { createContext, useState } from 'react';

export const testContext = createContext();



export default function GenericContext({children}) {
  const [color, setColor] = useState("#E7B3A8 ")

  function addToCart() {

  }
  return (
    <testContext.Provider value={{ color, setColor }}>
      {children}
    </testContext.Provider>
  )
}
