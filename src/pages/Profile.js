import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";
function Profile() {
  const [selectedMenu, setSelectedMenu] = useState("");

  const details = (detail) => {
    setSelectedMenu(detail);
  };

  return (
    <Dashboard>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "33%" }}>
          <div
            style={{
              marginTop: "8%",
              width: "80%",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "flex" }} onClick={() => details("company")}>
              <div style={{ flex: "40%" }}></div>
              <div style={{ flex: "50%" }}>
                <p style={{ fontSize: 14 }}>Infosys</p>
                <p style={{ fontSize: 10 }}>Created : 09-05-2022</p>
              </div>
              <div style={{ flex: "10%" }}>
                <p>:</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: "33%" }}>
          <div
            style={{
              marginTop: "8%",
              width: "80%",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.25)",
            }}
            onClick={() => details("personal")}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: "40%" }}></div>
              <div style={{ flex: "50%" }}>
                <p style={{ fontSize: 14 }}>Infosys</p>
                <p style={{ fontSize: 10 }}>Created : 09-05-2022</p>
              </div>
              <div style={{ flex: "10%" }}>
                <p>:</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: "33%" }}>
          <div
            style={{
              marginTop: "8%",
              width: "80%",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: "40%" }}></div>
              <div style={{ flex: "50%" }}>
                <p style={{ fontSize: 14 }}>Infosys</p>
                <p style={{ fontSize: 10 }}>Created : 09-05-2022</p>
              </div>
              <div style={{ flex: "10%" }}>
                <p>:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "66%" }}>
          <div
            style={{
              marginTop: "8%",
              width: "91%",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.25)",
            }}
          >
            {selectedMenu == "company" ? (
              <div
                style={{ paddingLeft: 15, paddingTop: 14, paddingBottom: 12 }}
              >
                <h5>Company Details</h5>

                <p style={{ fontSize: 12, color: "gray" }}>Company Email</p>
                <p style={{ fontSize: 12, color: "gray" }}>Company Phone</p>
                <p style={{ fontSize: 12, color: "gray" }}>Company Website</p>
                <p style={{ fontSize: 12, color: "gray" }}>Company Address</p>
                <p style={{ fontSize: 12, color: "gray" }}>Company Currency</p>
                <p style={{ fontSize: 12, color: "gray" }}>Default Timezone</p>
                <p style={{ fontSize: 12, color: "gray" }}>Status</p>
              </div>
            ) : (
              <div
                style={{ paddingLeft: 15, paddingTop: 14, paddingBottom: 12 }}
              >
                <h5>personal Details</h5>

                <p style={{ fontSize: 12, color: "gray" }}>Personal Email</p>
                <p style={{ fontSize: 12, color: "gray" }}>personal Phone</p>
                <p style={{ fontSize: 12, color: "gray" }}>Personal Website</p>
                <p style={{ fontSize: 12, color: "gray" }}>Personal Address</p>
                <p style={{ fontSize: 12, color: "gray" }}>Personal Currency</p>
                <p style={{ fontSize: 12, color: "gray" }}>Default Timezone</p>
                <p style={{ fontSize: 12, color: "gray" }}>Status</p>
              </div>
            )}
          </div>
        </div>
        <div style={{ flex: "34%" }}></div>
      </div>
    </Dashboard>
  );
}

export default Profile;
