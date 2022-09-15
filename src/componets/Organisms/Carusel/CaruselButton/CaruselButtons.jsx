import "./CaruselButtons.css";
import ForwardButton from "../../../Molecules/CaruselWraper/ButtonWrapper/ForwardButton/ForwardButton";
import BackButton from "../../../Molecules/CaruselWraper/ButtonWrapper/BackButton/BackButton";

function CaruselButton() {
    return(
        <div className="caruselButton">
            <BackButton />
            <ForwardButton />
        </div>
    );
}

export default CaruselButton;