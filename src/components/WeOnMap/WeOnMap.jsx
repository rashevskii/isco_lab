import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./WeOnMap.scss";

export const WeOnMap = () => {
  return (
    <YMaps>
      <div className="mapWrapper" id="map">
        <Map
          state={{ center: [55.64604, 37.677077], zoom: 17, behaviors: ["disable('scrollZoom')"] }}
          className="map"
        >
          <Placemark
            geometry={[55.64604, 37.677077]}
            options={{ 
              preset: 'islands#icon',
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};
