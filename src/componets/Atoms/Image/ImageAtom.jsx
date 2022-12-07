function ImageAtom({ imageSrc, imageAlt, imageClass, imageOnClick, refImage }) {
    return (
        <img ref={refImage} className={imageClass} src={imageSrc} alt={imageAlt} onClick={imageOnClick} />
    );
}

export default ImageAtom;