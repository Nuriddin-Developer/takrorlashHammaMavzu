import React, { createContext, useState } from 'react';
export const ContextData = createContext()
export default function Context({children}) {
  const [abdulazizbek,setAbdulazizbek] = useState()
  const [data,setData] = useState([
    {id:1,name:"Abdulazizbek",status:"Midlle",key:"boy"},
    {id:2,name:"Shoxida",status:"O'qivchi",key:"girl"},
    {id:3,name:"Xondamir",status:"O'qivchi",key:"boy"},
    {id:4,name:"Nuriddin",status:"Dangasa",key:"boy"},
    {id:5,name:"SaidaOpa",status:"Ceo",key:"girl"},
    {id:6,name:"MargubaOpa",status:"English",key:"girl"},
  ])
return(
  <ContextData.Provider value={{data,setData,abdulazizbek,setAbdulazizbek}}>
    {children}
  </ContextData.Provider>
)
}
