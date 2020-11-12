export interface MapProps {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  }
  properties: {
    name: string;
  }
};
export interface GeoStationProps {
  id: number;
  stationName: string;
  coordination: [number, number] | null;
};

// export type Geometry = 
//     Point |
//     MultiPoint | 
//     LineString | 
//     MultiLineString | 
//     Polygon | 
//     MultiPolygon | 
//     GeometryCollection,
    

// export interface MapData {

// }