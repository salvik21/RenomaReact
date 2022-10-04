function ImageAtom({ src, alt, imageClass, onClick }) {
    return (
        <img className={imageClass} src={src} alt={alt} onClick={onClick} />
    );
}

export default ImageAtom;