import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleUser() {
  const params = useParams();
  const [eachData, setEachData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState("")

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users/" + params.user_id)
      .then((result) => {
        setEachData(result.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [params.user_id]);
  
  const {id , name , phone} = {...eachData}
  const { firstname , lastname} = {...name}

  return (
    <>
      <h1>this is single user page </h1>

      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h1> user Id : {id}</h1>
          <p> firstName : {firstname} </p>
          <p> lastName : {lastname} </p>
          <h2> phone number : {phone} </h2>
        </div>
      )}
    </>
  );
}

export default SingleUser;
