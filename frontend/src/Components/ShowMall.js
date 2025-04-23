import React, { useState } from 'react'
import { malls } from './Mallsdetail'
import '../Componentscss/ShowMall.css'
function ShowMall() {
    const [selectedMall, setSelectedMall] = useState(null);
    const handleMallClick = (mall) => {
      if (selectedMall === mall.name) {
        setSelectedMall(null); // Close mall details if clicked again
      } else {
        setSelectedMall(mall.name); // Open mall details
      }
    };
  
    return (
      <div className="mall-list-container">
        <h1 className="mall-list-title">Malls Detail</h1>
        <ul className="mall-list">
          {malls.map((mall) => (
            <li key={mall.name} className="mall-item">
              <button
                onClick={() => handleMallClick(mall)}
                className="mall-item-name"
              >
                {mall.name}
              </button>
              {selectedMall === mall.name && (
                <div className="mall-details">
                  <div className="mall-images">
                    {mall.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${mall.name} image ${index + 1}`}
                        className="mall-image"
                      />
                    ))}
                  </div>
                  <div className="mall-address">
                    <strong>Address:</strong> {mall.address}
                  </div>
                  <div className="mall-location">
                    <strong>Location:</strong> Latitude: {mall.location.latitude}, Longitude: {mall.location.longitude}
                  </div>
                  <div className="mall-employees">
                    <h3>Employees:</h3>
                    <ul>
                      {mall.employees.map((employee, index) => (
                        <li key={index} className="employee-item">
                          <strong>{employee.name}</strong> - {employee.role} ({employee.phone})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  
}

export default ShowMall
