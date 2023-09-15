import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./Weblink";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [old, setOldprice] = useState("");
  const [check, setCheck] = useState("false");
  const [descp, setDescp] = useState("");
  const [select ,setSelect] =useState('veg')

  const addItem = async () => {
    await axios.post(API_URL, {
      name,
      price,
      old,
      check,
      select,
      descp
    });
    navigate('/list');
  };

  const navigate = useNavigate();
  return (
    <div className="form">
      <h3>Product List</h3>
      <input
        type="text"
        name="productname"
        id="productname"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        name="oldprice"
        id="oldprice"
        placeholder="Old price"
        value={old}
        onChange={(e) => setOldprice(e.target.value)}
      />
      <select name="selection" value={select} onChange={(e)=>setSelect(e.target.value)} id="selection">
        <option value="veg">Vegatables</option>
        <option value="fruit">Fruits & Nuts</option>
        <option value="dairy"> Dairy & Cream</option>
        <option value="pack">Packages food </option>
        <option value="stap">Staples</option>
      </select>
      <div className="checkbox">

        <input
          type="checkbox"
          id="checkbox"
          value={check}
          onChange={(e) => setCheck(!check)}
          /> 
          <p>Make sure, All the above are correct</p>
        </div>
      <textarea name="description" id="description" cols="32" rows="10" value={descp}
        onChange={(e) => setDescp(e.target.value)}>

      </textarea>
      
      <button onClick={()=>addItem()} className="update-btn">Submit</button>
    </div>
  );
};

export default Add;
