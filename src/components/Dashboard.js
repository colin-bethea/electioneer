import React from 'react';
import { JsonToTable } from "react-json-to-table"

const Dashboard = () => {

    const sampleElectionOdds = {
        "2020 Election": [
          { Candidate: "Bernie Sanders", Odds: "33.8%" },
          { Candidate: "Michael Bloomberg", Odds: "18.2%" },
          { Candidate: "Joe Biden", Odds: "15.9%" },
        ]
      };

    return (
      <>
        <JsonToTable json={sampleElectionOdds} />
      </>
    );
}

export default Dashboard