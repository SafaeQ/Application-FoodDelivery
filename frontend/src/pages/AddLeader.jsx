import React from 'react';

const AddLeader = () => {
  return (
    <>
      <form >
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
        Adress:
          <input type="text" />
        </label>
        <label>
        Number:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddLeader;
