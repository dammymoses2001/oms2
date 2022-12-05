import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { SideBar } from '../sideBar'

export  const OffcanvasComp =({show,handleClose})=> {
  return (
    <div >
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideBar/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
