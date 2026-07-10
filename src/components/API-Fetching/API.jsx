import { useState, useEffect } from 'react';

export default function API() {
  const [dataApi, setDataApi] = useState([]);
  const [loadingText, setloadingText] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // 3. Error Message Handling

  // 2. API Fetching
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(receive => {
        if (!receive.ok) throw new errorMessage("Could not fetch data");
        return receive.json();
      })
      .then(json => { setDataApi(json); setloadingText(false); })
      .catch(err => { setErrorMessage(err.message); setloadingText(false); });
  }, []);

  return (
    <div>
      {/* UI Rendering */}
      {loadingText &&  <p>Loading...</p>}
      {errorMessage && <p>Error Message: {errorMessage}</p>}
      {/* Add the data into list */}
      <ul>
        {dataApi.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}