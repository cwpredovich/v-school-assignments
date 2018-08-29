import React from 'react';

const Navbar = () => {
    const styles = {
        navbarStyle: {
            marginBottom: '50px'
        },
        title: {
            display: 'inline-block',
            margin: 'auto',
            position: 'absolute',
            height: '61px',
            top: '4%',
            left: '12%',
        }
       
    }

    return(
        <div style={styles.navbarStyle}>
            <img src="https://wallpapercave.com/wp/hgnYsca.jpg" width="85px"/>
            <div style={styles.title}>Don Corleone's Hit List</div>
        </div>
    )
}

export default Navbar;