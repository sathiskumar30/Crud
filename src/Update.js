import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "./Weblink";

const Update = () => {
  const navigate = useNavigate();

  const [apidata, setApidata] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getApi = async () => {
    const res = await axios.get(API_URL + id);
    setApidata(res.data);
  };

  const updateitem = async () => {
    await axios.put(API_URL + id, {
      name,
      price,
      old,
      check,
      select,
      descp,
    });
    navigate("/list");
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    setName(apidata.name);
    setPrice(apidata.price);
    setCheck(apidata.check);
    setOldprice(apidata.old);
    setSelect(apidata.select);
    setDescp(apidata.descp);
  }, [apidata]);

  console.log("now :", apidata);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [old, setOldprice] = useState("");
  const [check, setCheck] = useState(false);
  const [descp, setDescp] = useState("");
  const [select, setSelect] = useState("veg");

  return (
    <div className="form">
      <h3>For Updates</h3>
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
      <select
        name="selection"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        id="selection"
      >
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
      <textarea
        name="description"
        id="description"
        cols="32"
        rows="10"
        value={descp}
        onChange={(e) => setDescp(e.target.value)}
      ></textarea>

      <button onClick={updateitem} className='update-btn'>Update</button>
    </div>
  );
};

export default Update;
