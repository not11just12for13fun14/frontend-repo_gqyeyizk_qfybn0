import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { apiGet } from '../lib/api';
import { Link } from 'react-router-dom';

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function DevelopmentsMap() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    apiGet('/api/properties', { limit: 200 }).then((data) => {
      setItems(data.filter(p => typeof p.latitude === 'number' && typeof p.longitude === 'number'));
    }).catch(()=>setItems([]));
  }, []);

  const center = items.length ? [items[0].latitude, items[0].longitude] : [23.6345, -102.5528]; // Mexico

  return (
    <div className="w-full h-[70vh] rounded-2xl overflow-hidden border border-neutral-800">
      <MapContainer center={center} zoom={5} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((p) => (
          <Marker key={p._id} position={[p.latitude, p.longitude]} icon={icon}>
            <Popup>
              <div className="min-w-[200px]">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-neutral-600">{p.location}</div>
                <div className="mt-2">
                  <Link to={`/properties/${p.slug || p._id}`} className="text-yellow-600 hover:text-yellow-500">View details</Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
