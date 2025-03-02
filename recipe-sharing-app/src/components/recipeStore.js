import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Array to manage favorite recipes
  recommendations: [], // Array for recommendations

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Example recommendation logic: Suggest recipes similar to favorites
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) || Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Initialize recipes
  setRecipes: (recipes) => set({ recipes }),

  // Action to set recipes (could be used to fetch or update recipes)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
