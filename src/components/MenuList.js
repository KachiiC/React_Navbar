import React from 'react'
// Data
import menuData from '../data/MenuData'
import DropdownList from './DropdownList'
import TitleRender from './TitleRender';

const displayMenuList = () => {

    const MenuList = menuData.map((menu, index) => {
        
        const menu_column = menuData.length/menuData.length

        const renderMenuType = menu.sub_menu === true ? 
        DropdownList(menu) : TitleRender(menu.title)

        return (
        <div key={index} className={`site-span-${menu_column} nav-heading`}>
            {renderMenuType}
        </div>
        )
        
    })

    return MenuList
}

export default displayMenuList