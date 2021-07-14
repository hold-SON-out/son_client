import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Write.css";

const Write = ({ title, contnent, setContent }) => {
  return (
    <div className="write">
      <div className="content">
        <div className="w-form">
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            className="w-f-item"
            {...title}
          />
          <div className="w-f-item">
            <CKEditor
              editor={ClassicEditor}
              data={contnent}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </div>
          <button className="w-f-item">작성하기</button>
        </div>
      </div>
    </div>
  );
};

export default Write;
