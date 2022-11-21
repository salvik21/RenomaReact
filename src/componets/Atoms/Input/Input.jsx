function InputAtom({ type, name, placeholderText, className }) {
    return (
        <input className={className} type={type} name={name} autocomplete="off" placeholder={placeholderText} />
    );
}

export default InputAtom;