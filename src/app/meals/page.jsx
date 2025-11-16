/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import MealSearch from "./components/MealSearchInput";

const page = () => {
  const meals = [];

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Meal Recipes</h1>
      {/* Meal Search Input */}
      <MealSearch />

      {/* Meals grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {meals?.map((meal) => (
          <div
            key={meal.idMeal}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <figure>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                {meal.strMeal}
              </h2>
              <p className="text-gray-600">Category: {meal.strCategory}</p>
              <p className="text-gray-600">Area: {meal.strArea}</p>

              <div className="card-actions mt-4">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
