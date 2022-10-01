function Icon({ src, alt, onClick, iconClass }) {
    return (
        <img className={iconClass} src={src} alt={alt} onClick={onClick} />
    )
}

export default Icon;