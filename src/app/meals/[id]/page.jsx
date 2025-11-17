const fetchSingleMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    //   setMeals(data?.meals || []);
    return data?.meals;
  } catch (error) {
    console.log(error);
  }
};

//   dynamic title:
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;
  // fetch data
  const [singleMeal] = await fetchSingleMeals(id);

  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}

const SingleMealPage = async ({ params }) => {
  const p = await params;

  const singleMeal = await fetchSingleMeals(p?.id);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Meal Recipes</h1>
      {/* Meal Search Input */}

      <p>{JSON.stringify(singleMeal)}</p>
    </div>
  );
};

export default SingleMealPage;
