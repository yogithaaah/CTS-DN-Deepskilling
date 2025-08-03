import React from 'react';
import officeImage from './images/office.avif';

function App() {
  const heading = <h1>Office Space Rental</h1>;

  const imageElement = (
    <img
      src={officeImage}
      alt="Office Space"
      style={{ width: '400px' }}
    />
  );

  const offices = [
    { name: "Elite Workspace", rent: 55000, address: "123 Business Street" },
    { name: "Prime Offices", rent: 72000, address: "456 Corporate Ave" },
    { name: "Budget Hub", rent: 40000, address: "789 Startup Lane" },
  ];

  const officeList = offices.map((office, index) => (
    <div key={index}>
      <h2>{office.name}</h2>
      <p>
        Rent:{' '}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>
      <p>Address: {office.address}</p>
    </div>
  ));

  return (
    <div className="App">
      {heading}
      {imageElement}
      {officeList}
    </div>
  );
}

export default App;
