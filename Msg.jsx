import React, { useState } from 'react';
let nextId =0;
const Msg = () => {
    const [Name, setName] = useState('')
const [m, setm] = useState([])
    
    return (
     <React.Fragment>

{m.map(m => (
<li key={m.id}>{m.name}</li>
))}

<div style={{marginTop : '79px'}}>
<label htmlFor='Name' />
<input name='Name' id ='Name' value={Name} type='text' onChange={e => setName(e.target.value)} />
<button onClick={() => {
  setName('');
  m.push({
    id : nextId++ ,
    name : Name,
    
  });
}}>Send</button>
</div>
</React.Fragment>
)
}

export default Msg 
