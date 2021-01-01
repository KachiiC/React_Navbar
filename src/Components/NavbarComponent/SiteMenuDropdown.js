import React, { useState } from 'react'

const SiteMenuDropdown = (props) => {

    const [showDropdown, setShowDropdown] = useState(false)

    const displaySubMenu = props.submenu.map((menu) => <p>{menu.title}</p>)

    const handleShowMenu = () => {
        showDropdown === false ? setShowDropdown(true): setShowDropdown(false)
    }

    return (
        <>
            <div className="site-nav-dropdown-block" 
                onClick={handleShowMenu} 
            >
                {props.title}
            {
                showDropdown && (
                    <div className="site-nav-dropdown-link">
                        {displaySubMenu}
                    </div>
                )
            }
            </div>
        </>
    )
}

export default SiteMenuDropdown