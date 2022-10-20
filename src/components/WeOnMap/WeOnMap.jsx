import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./WeOnMap.scss";

export const WeOnMap = () => {
  return (
    <YMaps>
      <div className="">
        <Map
          width={"80%"}
          height={894}
          state={{ center: [55.64604, 37.677077], zoom: 17 }}
        >
          <Placemark
            geometry={[55.64604, 37.677077]}
            options={{ preset: 'islands#icon' }}
          />
        </Map>
      </div>
    </YMaps>
  );
};
