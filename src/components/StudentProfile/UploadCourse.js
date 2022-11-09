import React, { useRef, useState } from "react";
import '../../assest/css/custom.css';
import '../../assest/css/bootstrap.min.css';

const Courses = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const handledragover = (e) => {
    e.preventDefault();
  };
  const handledrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  };
  if (files)
    return (
      <div className="uploads" >
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      </div>
    );
  return (
    <div>
    
    <div className='course'>
      {!files && (
        <div
          onDragOver={handledragover}
          onDrop={handledrop}
          className="dropzones"
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            hidden
            ref={inputRef}
          />
          <button
            onClick={() => inputRef.current.click()}
            className="dragbutton"
          >
            Select Files
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Courses;