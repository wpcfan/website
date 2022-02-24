import React from "react"

const Logo = props => (
  <div className="site-logo">
    <img src={props.src} alt={props.title} width="128" height="64" style={{ "objectFit": "cover" }} />
  </div>
)

export default Logo
