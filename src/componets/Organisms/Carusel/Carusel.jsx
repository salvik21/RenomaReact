import "./Carusel.css";
import CaruselImages from "./../../Molecules/CaruselWraper/CaruselImageWrapper/CaruselImage";
import CaruselButton from "./CaruselButton/CaruselButtons";
import CaruselTitles from "./CaruselTitles/CaruselTitles";

function Carusel() {
    return(
        <div className="carusel">
            <CaruselTitles />
            <CaruselImages />
            <CaruselButton />
        </div>  
    );
}

export default Carusel;