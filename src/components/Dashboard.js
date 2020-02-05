import React from 'react';
import { JsonToTable } from "react-json-to-table"; 

const Dashboard = () => {

    const myJson = {
        "Student": { name: "Jack", email: "jack@xyz.com" },
        "Student id": 888,
        "Sponsors": [
          { name: "john", email: "john@@xyz.com" },
          { name: "jane", email: "jane@@xyz.com" }
        ]
      };

    return (
      <>
        <JsonToTable json={myJson} />
      </>
    );
}

export default Dashboard