import React from 'react'
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className='sidebar bg-light'>
        <Nav className='flex-column sidebar-menu'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#budget">Add / Update Budget</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
    </div>
  )
}

export default Sidebar