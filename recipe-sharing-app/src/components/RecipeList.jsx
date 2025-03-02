import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          {/* Use Link to navigate to the recipe details page */}
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
