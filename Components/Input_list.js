import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Input_list.css";

function InputList() {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);
  //const [details, setdetails] = useState("");
  //const [dlist, setdlist] = useState("");
  function AddItem() {
    if (!input) {
      alert("please Input Title First!!!");
    } else {
      setlist([...list, input]);
      //setdlist([...dlist, details]);
      setinput("");
      // setdetails("");
    }
  }
  function DeletItem(id) {
    const updateItem = list.filter(function (element, index) {
      return index != id;
    });
    setlist(updateItem);
  }
  function showTitile() {
    if (list.value == null) {
      return;
    } else
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>hi sdadada</h1>
        </div>
      );
  }

  return (
    <div>
      <div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Write
          </span>
          <input
            value={input}
            onChange={function (e) {
              setinput(e.target.value);
            }}
            type="text"
            class="form-control"
            placeholder="Enter Title"
            aria-describedby="addon-wrapping"
          />
          {/* <input
            value={details}
            onChange={function (event) {
              setdetails(event.target.value);
            }}
            type="text"
            class="form-control"
            placeholder="Enter Task"
            aria-describedby="addon-wrapping"
          /> */}
          <button
            onClick={AddItem}
            style={{ marginLeft: 10 }}
            type="button"
            class="btn btn-outline-dark"
          >
            ADD
          </button>
        </div>
      </div>
      <div>
        <div class="container-fluid">
          {showTitile()}

          {list.map(function (element, index_num) {
            return (
              <div className="output" key={index_num}>
                <div class="row">
                  <div class="col-sm-8">
                    <ul class="list-group">
                      <li
                        class="list-group-item active"
                        aria-current="true"
                        style={{ align: "center" }}
                      >
                        {element}
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-4">
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                      onClick={() => DeletItem(index_num)}
                    ></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default InputList;
