import { Map, StyleSpecification } from 'maplibre-gl';

const MAPLIBRE_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap Contributors</a>',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
    },
  ],
};

const map = new Map({
  container: 'map',
  style: MAPLIBRE_STYLE,
  center: [15, 50],
  zoom: 6,
});

console.log(map);
