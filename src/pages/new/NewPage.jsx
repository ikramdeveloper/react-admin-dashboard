import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Sidebar, Navbar } from "../../components";
import "./newpage.scss";

const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <section className="top">
          <h1>{title}</h1>
        </section>

        <section className="bottom">
          <article className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="file"
            />
          </article>

          <article className="right">
            <form onSubmit={handleSubmit}>
              <article className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </article>

              {inputs.map((input) => (
                <article className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </article>
              ))}
              <button type="submit">Send</button>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

export default NewPage;
