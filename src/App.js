import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.splice(0, 10)));
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data.splice(0, 10));
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data.map((item) => {
            return <li key={item.id}>{item.body}</li>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
