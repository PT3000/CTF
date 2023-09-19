import React from 'react';

const Footer = () => {

    const footer = {
        backgroundColor:"#22262c",
        height:"15vh",
        color:"white",
        textAlign:"center",
    }

    return (
        <footer style={footer}>
            <pre style={{paddingTop:"5vh"}}>
            © 2023 Undefined. All Rights Reserved.
            <br />
            github : https://github.com/PT3000
            </pre>
        </footer>
    )
}

export default Footer;