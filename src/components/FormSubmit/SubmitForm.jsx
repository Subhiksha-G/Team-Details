import React from "react";

const SubmitForm = () => {
  return (
    <>
      <h1>SubmitForm</h1>
      <form>
        <label>Username : </label>
        <input type="text"/>
        <label>Email : </label>
        <input type="email"/>
        <label>Gender : </label>
        <select>
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
        <button onChange={(e) => e.preventDefault()}>Submit</button>
      </form>
    </>
  );
};

export default SubmitForm;
