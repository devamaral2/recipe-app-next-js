import React from 'react';
import RecommendedRecipeCard from '../RecommendedRecipeCard/RecommendedRecipeCard';
import * as g from '../../helpers/consts';
import Container from './styled';

const RecommendedRecipes = ({ type, recipes }) => (
  <Container>
    {
      recipes.map((recipe, index) => {
        if (index <= g.MAX_NUMBER_OF_RECOMMENDED_RECIPES) {
          return (
            <RecommendedRecipeCard
              key={ `${index}-recomendation-card ` }
              index={ index }
              dataTestId={ `${index}-recomendation-card` }
              image={ type === 'food' ? recipe.strMealThumb : recipe.strDrinkThumb }
              name={ type === 'food' ? recipe.strMeal : recipe.strDrink }
              titleTestId="recomendation-title"
              id={ type === 'food' ? recipe.idMeal : recipe.idDrink }
              type={ type }
            />
          );
        }
        return null;
      })
    }
  </Container>
);

export default RecommendedRecipes;
