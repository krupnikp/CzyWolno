import React, { useState, useEffect } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { Map, ProvinceMapElement } from './styled';
import { MapProps, GeoStationProps } from './types';


const geoStations: GeoStationProps[] = [
  {
    "id": 729,
    "stationName": "AM1 Gdańsk Śródmieście",
    "coordination": [18.635283, 54.353336],
  },
  {
    "id": 530,
    "stationName": "Warszawa-Komunikacyjna",
    "coordination": [21.004724, 52.219298],
  },
  {
    "id": 291,
    "stationName": "Gajew",
    "coordination": [19.233225, 52.143250],
  },
  {
    "id": 114,
    "stationName": "Wrocław - Bartnicza",
    "coordination": [17.141125, 51.115933],
  },
];

const projection = geoMercator()
  .scale(4000)
  .center([19.480556, 52.069167])
  .translate([ 800 /2, 800 /2]);

  
const MapOfPoland: React.FC = () => {
  const [geo, setGeo] = useState<any>();
  const [province, setProvince] = useState("");
  const [loadedMap, setLoadedMap] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>();


  useEffect(() => {
    fetch("./map-poland.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`);
          return
        }
        response.json().then(mapdata => {
          console.log(`halo: ${mapdata}`)
          for (let key in mapdata.objects) {
            setGeo((feature(mapdata, mapdata.objects[key]) as any).features);
          }
          console.log("GEO: ", geo);
          setLoadedMap(true);
        })
      })
  }, []);

  const pathGenerator = geoPath().projection(projection);

  const handleProvinceClick = (provinceIndex: number) => {

    setProvince(geo[provinceIndex].properties.name); 
    setSelectedIndex(provinceIndex);
    console.log("Marker: ", provinceIndex)
  }
  // const geoPixel = projection(geoStations.coordination);

  return (
    <div>
      { !loadedMap ?
        <div>
          Loading MAP....
        </div> 
        :
        <Map style={{ border: "1px solid black" }} viewBox="0 0 800 800" >
          <g>
            {geo.map((d, i) => (
            <ProvinceMapElement
              key={i}
              id={d.properties.name}
              d={pathGenerator(d) || undefined}
              provinceColor={selectedIndex === i}
              onClick={() => {
                console.log("onClick", geo[i]);
                handleProvinceClick(i);
              }}
            />
          ))
          }
        </g>
        <g>
          {geoStations.map((geoStations, i) => (
            <circle
              key={i}
              // cx={projection(geoStations.coordination)[0]} 
              // cy={projection(geoStations.coordination)[1]} 
              // cx={(geoPixel && geoPixel[0]) || 0} 
              // cy={(geoPixel && geoPixel[1]) || 0} 
              fill="#E91E63"
              r={3}
            // onClick={ () => handleMarkerClick(i) }
            />
          ))
          }
          </g>
        </Map>
      }
    <div>Index element: {province}</div>
    </div>
  );
};

export default MapOfPoland;