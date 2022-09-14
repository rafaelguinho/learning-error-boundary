import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

export const Users = () => {
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
  const handleError = useErrorHandler();

  const callApiWithError = () => {
    fetch(`https://jsonplaceholder__.typicode.com/users`)
      .then(async (response) => {
        console.log(response);
      })
      .catch(handleError);
  };

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users${
        Math.random() < 0.5 ? "ss" : ""
      }`
    )
      .then(async (response) => {
        const json = await response.json();
        console.log(json);
        setUsers(json);
      })
      .catch(handleError);
  }, []);

  return (
    <>
      <button onClick={callApiWithError}>Throw api error</button>
      <ul>
        {users.map((u) => (
          <li key={`u-${u.id}`}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};
