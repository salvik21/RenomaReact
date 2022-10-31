function ImageAtom({ src, alt, imageClass, onClick, refImage }) {
    return (
        <img ref={refImage} className={imageClass} src={src} alt={alt} onClick={onClick} />
    );
}

export default ImageAtom;