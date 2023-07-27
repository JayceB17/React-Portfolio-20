import React, { useState } from 'react';
import PortfolioForm from './PortfolioFormForm';

function Portfolio(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.Portfolio);

  const submitUpdate = (value) => {
    props.editPortfolioItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: ''});
  };

  if (edit.id) {
    return <PortfolioForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.Portfolio.map((item, index) => (
    <div className= { item.isComplete ? `Portfolio-row complete ${item.eagerness}` : `Portfolio-row ${item.eagerness}` } key={i}>

      <div key={item.id} onClick={() => props.completePortfolioItem(item.id)}>
          {item.text}
      </div>
      <div className="icons">

        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        <p onClick={() => props.removePortfolioItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Portfolio;
