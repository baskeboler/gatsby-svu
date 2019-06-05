import React from "react"
import { Link } from "gatsby"
import "./layout.scss"
import { Navbar, NavDropdown, NavItem, NavbarBrand, Nav } from "react-bootstrap"
import NavbarToggle from "react-bootstrap/NavbarToggle"
const Submenu = ({ title, items }) => {
  return (
    <NavDropdown title={title}>
      {items.map(i => (
        <Nav key={`${i.label}-${i.url}`}>
          <NavItem>
            <Link to={i.url} className="dropdown-item">
              {i.label}
            </Link>
          </NavItem>
        </Nav>
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
    <Navbar expand="lg" variant="light">
      <NavbarToggle />
      <NavbarBrand className="brand-logo" />
      <Nav className="nav-link">
        <NavItem>
          <Link to="/">la empresa</Link>
        </NavItem>
      </Nav>
      {serviciosMenu}
      <Nav className="nav-link">
        <NavItem>
          <Link to="/contacto">contacto</Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default MenuBar
