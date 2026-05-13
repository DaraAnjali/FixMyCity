import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const IssueMap = ({ issues }) => {

  return (
    <MapContainer
      center={[17.3850, 78.4867]}
      zoom={11}
      style={{
        height: "400px",
        width: "100%",
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        issues.map((issue) => (

          issue.latitude &&
          issue.longitude && (

            <Marker
              key={issue._id}

              position={[
                issue.latitude,
                issue.longitude,
              ]}
            >

              <Popup>

                <div className="text-black">

                  <h2 className="font-bold text-lg">
                    {issue.title}
                  </h2>

                  <p>
                    {issue.location}
                  </p>

                  <p>
                    {issue.status}
                  </p>

                </div>

              </Popup>

            </Marker>
          )
        ))
      }

    </MapContainer>
  );
};

export default IssueMap;