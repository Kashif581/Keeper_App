import React from "react"

const date = new Date()


function Footer() {
    return <p>copyright {date.getFullYear()}</p>

}

export default Footer;