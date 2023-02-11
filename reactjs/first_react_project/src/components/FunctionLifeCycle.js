import React, { useEffect, useState } from 'react';

export default function FunctionLifeCycle() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [title, setTitle] = useState('2')

  useEffect(() => {
    //fetch ng api
    console.log('use Effect Component Did Mount / Updating');

    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setData([]);
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      console.log('Componen Unmount');
    };
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <ul>
          {loading ? (
            <li>Loading....</li>
          ) : (
            data && data.map((obj) => <li key={obj.id}>{obj.title}</li>)
          )}
        </ul>
      </div>
    </div>
  );
}
