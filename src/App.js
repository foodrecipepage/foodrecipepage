import './App.scss';
import React from 'react';
import AddRecipie from './pages/Add-Recipie-Page/add-recipie-page.js';
import ViewRecipie from './pages/View-Recipie-Page/view-recipie-page.js';

function App() {

  const [recipes, setRecipes] = React.useState('');

  return (

    (() => {
      switch (recipes) {
        case 'ADDRECIPE':
          return (
            <AddRecipie recipes={recipes}/>
          )
        case 'VIEWRECIPE':
          return (
            < ViewRecipie recipes={recipes}/>
          )
        default:
          return (
            <div className="container">
              <a href="/#" onClick={() => {
                setRecipes("ADDRECIPE");
              }} className="stretched-link">
                <div className="box">
                  <span></span>
                  <div className="content">
                    <h2>ADD RECIPE</h2>
                    <img src="\add.jpg" alt="ADD RECIPE" />
                  </div>
                </div>
              </a>
              <a href="/#" onClick={() => {
                setRecipes("VIEWRECIPE");
              }} className="stretched-link">
                <div className="box">
                  <span></span>
                  <div className="content">
                    <h2>VIEW RECIPES</h2>
                    <img src="\view.jpg" alt="VIEW RECIPE" />
                  </div>
                </div>
              </a>
            </div>
          )
      }
    })()
  );
}

export default App;
