import React, { useContext, useState } from "react";
import { ContextData } from "../Context/Context";
import { Button } from "@mui/material";
export default function Contact() {
  const { data, setData } = useContext(ContextData);
  const [state, setState] = useState("");
  let datafilter = data;
  function handleclick(e) {
    console.log(e.target.name);
    setState(e.target.name);
  }
  return (
    <div>
      <div>
        <Button
          onClick={handleclick}
          color="warning"
          variant="contained"
          name="boy"
        >
          boy
        </Button>
        <Button
          onClick={handleclick}
          color="success"
          variant="contained"
          name="girl"
        >
          girl
        </Button>
        <Button
          onClick={handleclick}
          color="inherit"
          variant="contained"
          name=""
        >
          All
        </Button>
      </div>
      <table className="table" border={1}>
        <thead>
          <tr>
            <th>No:</th>
            <th>Name:</th>
            <th>Status:</th>
            <th>Gender:</th>
          </tr>
        </thead>
        <tbody>
          {datafilter
            .filter((b) => {
              return b?.key.includes(state);
            })
            .map((item, index) => {
              return (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.key}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
