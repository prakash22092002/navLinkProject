import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    
      axios
        .get("https://fakestoreapi.com/users")
        .then((result) => {
          setDatas(result.data);
          setLoading(false);
        })
        .catch((err) => setError(err));
  }, []);

  return (
    <>
      <h1>this is users page</h1>

      {loading ? (
        <h2>loading...</h2>
      ) : (
        <ul>
          {datas.map((el, index) => {
            return <li key={el.id}> <Link to={'/singleUser/'+el.id}> <p> {el.username} </p> </Link> </li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Users;
