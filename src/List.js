import React, { useEffect, useState } from "react";
import { API_URL } from "./Weblink";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const List = () => {
  const navigate = useNavigate();
  const [apiData, setApidata] = useState([]);

  const getApi = async () => {
    const res = await axios.get(API_URL);
    setApidata(res.data);
  };
  const deleteItem = async (id) => {
    await axios.delete(API_URL + id);
    getApi();
  };

  useEffect(() => {
    getApi();
  }, []);
  console.log("Length:",apiData.length);

  return (
    <>
      {apiData.length === 0 ? (
        <h1 style={{color:"white"}}>No Items</h1>
      ) : (
        <div className="table">
          <table id="customers">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>old price</th>
              <th>Select</th>
              <th>Checked</th>
              <th>Descrption</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
            {apiData.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.old}</td>
                <td>{data.select}</td>
                <td>{data.check}</td>
                <td>{data.descp}</td>
                <td onClick={() => deleteItem(data.id)} className="delupdhover">
                  <MdDelete style={{ color: "red", fontSize: "23px" }} />
                </td>
                <td
                  onClick={() => navigate(`/update/${data.id}`)}
                  className="delupdhover"
                >
                  <AiOutlineEdit style={{ color: "green", fontSize: "23px" }} />
                </td>
              </tr>
            ))}
          </table>
         
        </div>
      )}
       <button onClick={() => navigate("/add")} className="addItem">
            Add Items
          </button>
    </>
  );
};

export default List;
