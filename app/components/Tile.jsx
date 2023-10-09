import React from 'react'

export default function Tile({isDarkMode}) {
  return (
    <div className={"p-4 bg-slate-800 flex gap-3 items-center"} style={isDarkMode? {background: "rgb(30 41 59 )"} : {background:"#e9e9e9", border: "1px solid #777"}}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className='h-[35px]'/>
        <p>Photoshop</p>
    </div>
  )
}
