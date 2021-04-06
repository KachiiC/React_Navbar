const TitleRender = (props) => {

    const outputTitle = props.split("-").map((word) => word.toUpperCase()).join(" ")

    return outputTitle
}

export default TitleRender