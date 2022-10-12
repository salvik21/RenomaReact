function LinkAtom({linkClass, target, href, text}) {
    return (
        <a className={linkClass} target={target} href={href}>{text}</a>
    );
}

export default LinkAtom;