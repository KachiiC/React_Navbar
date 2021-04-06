import React from 'react'
// DATA
import menuData from '../data/MenuData'
import SmallScreenSubList from './SmallScreenSubList'
import TitleRender from './TitleRender'

const SmallScreenMenuList = () => {

    const displayMenuList = menuData.map((menu, index) => {

        const renderMenuType = menu.sub_menu === true ? 
            SmallScreenSubList(menu) : TitleRender(menu.title)

        return <h3>{renderMenuType}</h3>
    })


    return (
        <div className="small-menu-block">
            {displayMenuList}
        </div>
    )
}

export default SmallScreenMenuList