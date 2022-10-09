import "./CountLabel.css";
import Label from "./../Label/LabelAtom";

function CountLabel() {
    return (
        <div className="count-label-wrapper">
            <Label labelClass={"count-label"} text={"2"} />
        </div>
    );
}

export default CountLabel;