import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";
import axios from "axios";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick = async e =>{
    e.preventDefault()
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset", "upload")
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1//image/upload", data)
      const {url} = uploadRes.data

      const newUser = {
        ...info, 
        img:url,
      }
      await axios.post("/auth/register" , newUser);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(info);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://cdn-icons-png.flaticon.com/512/306/306232.png"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}/>
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
