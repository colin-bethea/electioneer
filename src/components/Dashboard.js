import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { JsonToTable } from "react-json-to-table"

const Dashboard = () => {

    const [candidateState, setCandidateState] = useState({
        userId: null,
        id: null,
        title: null,
        completed: null
    })

    useEffect(() => {
        async function fetchData() {
            axios.get(`https://jsonplaceholder.typicode.com/todos`)
              .then(res => {
                const data = res.data;
                setCandidateState(data);
              })
        }
        fetchData()
      }, [])

    const sampleElectionOdds = {
        candidateState
      };

    return (
      <>
        <JsonToTable json={sampleElectionOdds} />
      </>
    );
}

export default Dashboard