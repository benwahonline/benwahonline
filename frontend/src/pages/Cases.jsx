import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Cases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch('/cases')
      .then(res => res.json())
      .then(setCases);
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-3">Cases</h1>
      <div className="row">
        {cases.map(c => (
          <div className="col-md-4 mb-4" key={c.id}>
            <div className="card h-100">
              <img src={c.image} className="card-img-top" alt={c.name} />
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p>Last seen: {c.lastSeen}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MapContainer center={[-6.7924, 39.2083]} zoom={5} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cases.map(c => (
          <Marker position={c.coordinates} key={c.id}>
            <Popup>{c.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
