import { useState, useEffect } from "react";

function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        setData(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }),
    [];
  // console.log(data);
  return (
    <>
      <h1>json data </h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name} </li>
        ))}
      </ul>
    </>
  );
}
export default UseEffect;
