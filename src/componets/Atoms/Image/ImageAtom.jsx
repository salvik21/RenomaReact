function ImageAtom({ src, alt, imageClass }) {
    return (
        <img className={imageClass} src={src} alt={alt} />
    );
}

export default ImageAtom;