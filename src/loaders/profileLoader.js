const fetchCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.categories;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchOffers = async () => {
  const token = sessionStorage.getItem("token");
  try {
    const res = await fetch("http://localhost:3000/api/offers");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const fetchActivitiesByUserId = async () => {
  const token = sessionStorage.getItem("token");
  try {
    const res = await fetch("http://localhost:3000/api/users/me/activity", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const fetchPostsByUserId = async () => {
  const token = sessionStorage.getItem("token");
  try {
    const res = await fetch("http://localhost:3000/api/users/me/posts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

const profileLoader = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await fetch("http://localhost:3000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    const categories = await fetchCategories();
    const userActivities = await fetchActivitiesByUserId();
    const userPosts = await fetchPostsByUserId();
    const offers = await fetchOffers();
    const userData = { ...data, userPosts, userActivities, offers, categories };

    return userData;
  } catch (err) {
    console.error(err);
  }
};

export default profileLoader;
