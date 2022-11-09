function IputAtom({ inputType, inputName, inputPlaceholderText, inputClass }) {
    return (
        <input className={inputClass} type={inputType} name={inputName} autocomplete="off" placeholder={inputPlaceholderText} />
    );
}

export default IputAtom;