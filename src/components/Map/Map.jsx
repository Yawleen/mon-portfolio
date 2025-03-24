import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import style from "./Map.module.css"
import L from "leaflet";
import pin from "../../assets/img/yolène_pin.webp"
import FeatherIcon from "feather-icons-react";


const customIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [80, 80],
});

export default function Map() {
    const position = [49.2661504, 1.8915763];

    return (
        <MapContainer
            center={position}
            zoom={5}
            className={style.map}
            scrollWheelZoom={false}
            zoomControl={false}
            doubleClickZoom={false}
            touchZoom={false}
        >
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            <Marker position={position} icon={customIcon}/>
            <div className={style.cityContainer}>
                <FeatherIcon icon="map-pin" size="15" fill="#f44336" stroke="white" strokeWidth={2} />
                <p className={style.city}>Chaumont-en-Vexin, France</p>
            </div>
        </MapContainer>
    );
};

