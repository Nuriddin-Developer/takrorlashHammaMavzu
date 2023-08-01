import React, { useContext, useEffect } from "react";
import { ContextData } from "./Context";
import axios from "axios";
function Config() {
  const { abdulazizbek, setAbdulazizbek } = useContext(ContextData);
  const Aziz = async () => {
    // setLoad(true)
    let json = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    try {
      setAbdulazizbek(json.data);
      console.log(json);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoad(false)
    }
  };
  useEffect(() => {
    Aziz();
  }, []);
}
export default Config;
