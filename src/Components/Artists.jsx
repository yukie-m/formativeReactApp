import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Artists() {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/view-artists").then((response) => {
      setMyData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Artists</h2>
      {mydata.map((item, index) => (
        <div key={index}>
          <p>
            {item.firstname}&nbsp;{item.lastname}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Artists;
