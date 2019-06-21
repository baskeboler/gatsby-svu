import React from "react"
import { Link } from "gatsby"
import "./layout.scss"
import { Navbar, NavDropdown, NavItem, Nav } from "react-bootstrap"
const Submenu = ({ title, items }) => {
  return (
    <NavDropdown title={title}>
      {items.map(i => (
        <NavDropdown.Item key={`${i.label}-${i.url}`}>
          <Link to={i.url}>{i.label}</Link>
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  )
}
const item = (label, url) => ({ label, url })
const MenuBar = () => {
  const serviciosMenuItems = [
    item("monitoreo", "/"),
    item("respuesta movil", "/"),
    item("video verificacion", "/"),
    item("rastreo satelital", "/"),
  ]
  const serviciosMenu = <Submenu items={serviciosMenuItems} title="servicios" />
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand className="brand-logo" />
      <Navbar.Toggle aria-controls="the-navs" />
      <Navbar.Collapse id="the-navs">
        <Nav className="mr-auto navbar-nav">
          <NavItem className="nav-item">
            <Link to="/">la empresa</Link>
          </NavItem>
          {serviciosMenu}
          <NavItem className="nav-item">
            <Link to="/contacto">contacto</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MenuBar
