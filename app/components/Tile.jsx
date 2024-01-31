import React from 'react'

export default function Tile({isDarkMode, item}) {
  return (
    <div className={"p-3.5 flex gap-3 items-center w-[140px]"} style={isDarkMode? {background: "rgb(30 41 59 )", border: "1px solid transparent", borderRadius: "10px"} : {background:"#e9e9e9", border: "1px solid #777", borderRadius: "10px"}}>
        <img src={item.icon} className='h-[25px]'/>
        <p>{item.title}</p>
    </div>
  )
}
