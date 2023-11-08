import React from 'react'


const Button = React.memo(({ addNote }) => {
  console.log("Button re-rendered :( ");
 return (
    <div>
    <button onClick={addNote}>Add</button>
    </div>
  );
 });

   export default Button;