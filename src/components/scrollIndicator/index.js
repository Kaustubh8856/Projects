import React, { useEffect, useState } from "react";

const ScrollIndicator = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data);
    } catch (e) {
      // console.log(e);
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(data);

  return <div>
  
  </div>;
};

export default ScrollIndicator;
