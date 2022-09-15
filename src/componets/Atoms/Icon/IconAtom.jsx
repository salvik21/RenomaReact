function Icon(props) {
    return (
    <img src={props.src} alt={props.alt} onClick={props.onClick} />
    )
}

export default Icon;