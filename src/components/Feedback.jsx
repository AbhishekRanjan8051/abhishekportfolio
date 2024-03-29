import React from "react";

function Feedback() {
  return (
    <div className="feedbk" id="feedback">
      <h1>Feedback</h1>
      <br />
      <p>After sending the feedback, I will reached you as soon as possible.</p>
      <form
        action="https://formcarry.com/s/bUQb-uL9QE2"
        method="POST"
        acceptCharset="UTF-8"
      >
        <br />
        <div className="wrap-input">
          <input required="" placeholder="Email" type="email" name="Email" />
          <br />
          <input required="" placeholder="Name" type="text" name="Name" />
          <br />
          <br />
        </div>
        <br />
        <br />
        <textarea
          required=""
          className="feedf"
          placeholder="Feedback"
          type="text"
          name="Feedback"
          spellCheck="true"
          min-height="400px"
          width="auto"
        ></textarea>
        <br />
        <br />
        <button type="submit" className="btn btn-light buttonn">
          Send
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Feedback;
