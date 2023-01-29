import React, { useState } from "react";
import "./style.css";
function App() {
  const [Text, setText] = useState("");
  const [todos, settodos] = useState([]);

  const addtodo = () => {
    if (Text.trim()) {
      if (!todos.filter((item) => item.Text === Text).length) {
        settodos((last) => [...last, { Text, status: false }]);
      } else {
        alert("این متن تکراری است");
      }
    }
    setText("");
  };
  const removeText = (index) => {
    settodos((last) => {
      const help = [...last];
      help.splice(index, 1);
      return [...help];
    });
  };
  const changestatus = (index) => {
    settodos((last) => {
      const help = JSON.parse(JSON.stringify(last));
      help[index].status = !help[index].status;

      console.log(help[index].status);

      return [...help];
    });
  };
  return (
    <div>
      <div className="TodoForm">
        <div className="html">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="row">
              <div className="added">
                <input
                  type="text"
                  placeholder={"add a todo"}
                  name="text"
                  className="input"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={Text}
                />
                <button className="btn" onClick={addtodo} type="Submit">
                  add
                </button>
              </div>
            </div>
          </form>
          {todos.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="row">
                  <div
                    className="added todo"
                    style={{
                      background: item.status == true ? "#d5fbe5" : "#fbd5d5",
                    }}
                  >
                    <label className="lableTodo">{item.Text}</label>
                    <button
                      className="btn btnDone"
                      onClick={() => changestatus(index)}
                    >
                      {item.status ? "unDone" : "Done"}
                    </button>
                    <button
                      className="btn btnClose"
                      onClick={() => removeText(index)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
