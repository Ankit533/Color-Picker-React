import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  return (
    <div className="App">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <div className="card p-4">
            <h2 className="my-3">Upload Image</h2>
            <input
              accept="image/*"
              type="file"
              name=""
              id=""
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setFile(file);
                } else {
                  setFile(null);
                }
              }}
            />
            <div className="file">
              {!preview ? (
                <></>
              ) : (
                <div className="main-preview">
                  <div className="img">
                    <h3>Image Preview</h3>
                    <img src={preview} alt="file" />
                  </div>
                  <div className="color">
                    <h3>
                      Choose color form image: &nbsp;
                      <span>
                        <input
                          type="color"
                          name=""
                          id=""
                          value={color}
                          onChange={(event) => setColor(event.target.value)}
                        />
                      </span>
                    </h3>
                    <div>
                      {!color ? (
                        ""
                      ) : (
                        <h6 style={{ color: color }}>
                          Color code is : {color}
                        </h6>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
