import React from "react";
import "../Componentscss/Mallsdata.css"
import { useLocation } from "react-router-dom";

const MallListpage = ({ mallData }) => {
  if (!mallData || mallData.length === 0) {
    return <p>No mall data found.</p>;
  }

  const mall = mallData[0]; // Assuming you want to display the first mall's details

  return (
    <div className="gs-container">
      <div className="gs-inner-wrapper">
        <div className="gs-header-section">
          <h1 className="gs-title">{mall.name}</h1>
          <p className="gs-address">{mall.address}</p>
        </div>

        <div className="gs-image-gallery">
          {mall.images.map((img, idx) => (
            <div key={idx} className="gs-image-card">
              <img
                src={img}
                alt={`${mall.name} Image ${idx + 1}`}
                width="300"
                style={{ margin: "10px" }}
              />
            </div>
          ))}
        </div>

        <div className="gs-team-section">
          <h2 className="gs-team-heading">Malls Members</h2>
          <div className="gs-team-grid">
            {mall.employees.map((emp, index) => (
              <div key={index} className="gs-employee-card">
                <h3 className="gs-employee-name">{emp.name}</h3>
                <p className="gs-employee-role">{emp.role}</p>
                <p className="gs-employee-phone">📞 {emp.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gs-location-section">
          <h2 className="gs-location-heading">Location</h2>
          <p>
            <strong>Latitude:</strong> {mall.location.latitude} <br />
            <strong>Longitude:</strong> {mall.location.longitude}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MallListpage;
