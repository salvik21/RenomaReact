function InputAtom({ type, name, placeholderText, className }) {
    return (
        <input className={className} type={type} name={name} autoComplete="off" placeholder={placeholderText} />
    );
}

export default InputAtom;