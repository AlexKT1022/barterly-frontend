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
    }); // refactor as needed
    const data = await res.json();

    const userPosts = await fetchPostsByUserId();
    const userData = { ...data, userPosts };

    return userData;
  } catch (err) {
    console.error(err);
  }
};

export default profileLoader;
