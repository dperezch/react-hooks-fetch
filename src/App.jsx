import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [counter, setCounter] = useState(0);
  //const [users, setUsers] = useState(null);

  console.log("App");

  /* const fetchData = useCallback(async () => {  //useCallback guarda una función en caché
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    setUsers(data);
  }, []); */

  /*  useEffect(() => {
    console.log("UseEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    fetchData();
  }, []); */

  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

  if (loading) return <p>Cargando ...</p>;
  if(error) return <p> {error} </p>

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
      <ul>
        {data.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </>
  );
};

export default App;
