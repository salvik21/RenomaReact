function LinkAtom(props) {
    return (
        <a target={props.target} href={props.href}>{props.text}</a>
    );
}

export default LinkAtom;