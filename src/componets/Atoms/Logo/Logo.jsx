import Title from "./../Titles/TitleAtom";

function LogoAtom({ logoClass }) {
    return (
        <Title titleClass={logoClass} title={"Renoma"} />
    );
}

export default LogoAtom;