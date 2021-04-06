import React,{ useState } from 'react'
// DATA
import SmallScreenMenuList from './SmallScreenMenuList'

const SmallScreenMenu = () => {

    const [menuList, setMenuList] = useState(false)

    const handleMenuList = () => menuList === false ? setMenuList(true) : setMenuList(false)

    return (
        <>
        <div className="small-menu-screen">
            <button onClick={handleMenuList}>Small Menu</button>
        </div>
        {menuList && (
            <div className="small-menu-block">
                <SmallScreenMenuList />
            </div>
        )}
        </>
    )
}

export default SmallScreenMenu