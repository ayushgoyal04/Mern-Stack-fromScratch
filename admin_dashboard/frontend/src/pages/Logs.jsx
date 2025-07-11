import React, { useEffect, useState } from 'react';
import { getLogs } from '../api';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs()
      .then(res => setLogs(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Logs</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Message</th>
            <th>Level</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td>{log.message}</td>
              <td>{log.level}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
