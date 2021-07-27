import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const { id, title, info } = data;
  return <>
    <section className='container'>
      <h3>Questions And Answers About Login</h3>
      <div >
        {data.map((quest) => {
          return <SingleQuestion key={quest.id} {...quest}
          />
        })}
      </div>
    </section>
  </>;
}

export default App;
