import React, {FormEventHandler, useState} from "react";

const PostForm: React.FC = () => {
  const [text, setText] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (event: any ) => {
    const data = new FormData();
    data.append("text", text);

    fetch("http://localhost:8000/api/posting", {
      method: "POST",
      body: data,
    })
        .then((resp) => {
          if (resp.status === 200) {
            console.log("Ok posting");
          } else {
            alert("Ошибка");
          }
        })
        .catch((err) => {
          document.location.reload();
          console.error(err);
        });
    document.location.reload();
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <textarea
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          id="message"
          className="text-area"
          autoFocus
          aria-required="true"
        />
      </div>
      <div className="button-2">
        <button
          className="btn #2b2b2b white-text"
          type="submit"
        >
          Create New Anton
        </button>
      </div>
    </form>
  );
};

export default PostForm;
