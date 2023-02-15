import React from "react"
import { Container } from "react-bootstrap"

document.body.style = 'background: bisque ;';

export default function CenteredContainer({ children }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", minWidth:"100vw",  backgroundColor: "bisque" }}
    >
      <div className="w-100" style={{ maxWidth: "400px"}}>
        {children}
      </div>
    </Container>
  )
}
