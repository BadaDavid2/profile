import React, { useState } from 'react'
import Drawer from './Drawer'
import Navbar from './Navbar'
import { Links } from './Links'
const Navigate = () => {
    const [open, setOpen] = useState(false)
    const toggle = ()=>{
        setOpen(!open)
        console.log("Opened")
    }
  return (
    <>
      <Navbar toggle={toggle} Links={Links}/>
      <Drawer open={open} toggle={toggle} Links={Links}/>
    </>
  )
}

export default Navigate
