import React, { useState } from 'react';
import PortfolioForm from './PortfolioForm';
import Portfolio from './Portfolio';

function PortfolioList() {
  const [Portfolio, setPortfolio] = useState([]);

  // Function to add a bucket list item
  const addPortfolioItem = (item) => {
    console.log('🚀 ~ file: portfolio.js ~ line 14 ~ addPortfolioItem ~ item', item);
  
  if (!item.text) {
    return;
  }
  const newItem = [item, ...portfolio];
  console.log(newItem);

  setPortfolio(newItem);
};

  // Function to mark bucket list item as complete
  const completePortfolioItem = (id) => {
    let updatedPorfolio = Portfolio.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    console.log(updatedPorfolio);
    setPortfolio(updatedPorfolio);
  };

  // Function to remove bucket list item and update state
  const removePortfolioItem = (id) => {
    const updatedPorfolio = [...Portfolio].filter((item) => item.id !==id);
    setPortfolio(updatedPorfolio);
  };

  // Function to edit the bucket list item
  const editPortfolioItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setPortfolio((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your Portfolio?</h1>
      <PortfolioForm onSubmit={addPortfolioItem} />
      <portfolio
        portfolio={portfolio}
        completePortfolioItem={completePortfolioItem}
        removePorfolioItem={removePortfolioItem}
        editPortfolioItem={editPortfolioItem}
      ></portfolio>
    </div>
  );
}

export default PortfolioList;