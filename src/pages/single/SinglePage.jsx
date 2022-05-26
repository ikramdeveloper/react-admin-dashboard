import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sidebar, Navbar, Chart, Table } from "../../components";
import { userRows } from "../../utils/dataTableSource";
import "./singlepage.scss";

const SinglePage = () => {
  const [singleUser, setSingleUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    for (const user of userRows) {
      if (user.id.toString() === userId) {
        setSingleUser(user);
      }
    }
  }, [userId]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <section className="top">
          <article className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={singleUser?.img} alt="item" className="itemImg" />
              <summary className="details">
                <h1 className="itemTitle">{singleUser?.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{singleUser?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">UK</span>
                </div>
              </summary>
            </div>
          </article>
          <article className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </article>
        </section>

        <section className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </section>
      </div>
    </div>
  );
};

export default SinglePage;
