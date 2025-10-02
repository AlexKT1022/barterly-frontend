const fetchCategories = async () => {
  try {
    const res = await fetch(
      "https://barterly-backend.onrender.com/api/categories"
    );
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.categories;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchAllUserPosts = async (id) => {
  try {
    const res = await fetch(
      `https://barterly-backend.onrender.com/api/users/${id}/posts`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const userLoader = async ({ params }) => {
  try {
    const res = await fetch(
      `https://barterly-backend.onrender.com/api/users/${params.id}`
    );
    const data = await res.json();
    const userPosts = await fetchAllUserPosts(params.id);
    const categoriesList = await fetchCategories();
    const userData = { ...data, userPosts, categoriesList };
    return userData;
  } catch (err) {
    console.error(err);
  }
};

export default userLoader;
