import React from 'react'
import TitleRender from './TitleRender'

const DropdownList = (props) => {

    const displayList = props.menu_list.map((sub, index) => {

        const displayTitle = TitleRender(sub.title)

        return (
            <h6 key={index}>{displayTitle}</h6>
        )
    })

    const dropdown_title = TitleRender(props.title)

    return (
        <>
            {dropdown_title}
            <div className="nav-sub-menu">
                {displayList}
            </div>
        </>
    )
  }

export default DropdownList