// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '', // Initialize searchTerm
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to set the search term
  filteredRecipes: [], // Initialize filteredRecipes
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { recipes: updatedRecipes, filteredRecipes: updatedRecipes }; // Update filteredRecipes when a new recipe is added
  }),
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return { recipes: updatedRecipes, filteredRecipes: updatedRecipes }; // Update filteredRecipes when a recipe is deleted
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return { recipes: updatedRecipes, filteredRecipes: updatedRecipes }; // Update filteredRecipes when a recipe is updated
  }),
}));

export { useRecipeStore };
