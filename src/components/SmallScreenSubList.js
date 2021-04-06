import React from 'react'
import TitleRender from './TitleRender'

const SmallScreenSubList = (props) => {

    const displaySubList = props.menu_list.map((sub, index) => {
        const displaySub = TitleRender(sub.title)
        return <h4>{displaySub}</h4>
    })

    const displayTitle = TitleRender(props.title)
    return (
        <>
            <h4>{displayTitle}</h4>
            {displaySubList}
        </>
    )
}

export default SmallScreenSubList
