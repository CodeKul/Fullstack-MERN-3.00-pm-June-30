import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
      })
      .catch(Error);
  }, [data]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((photo) => (
        <div>
          <p>{photo.id}</p>
          <p>{photo.title}</p>

          <img src={photo.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
}
