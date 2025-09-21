const fetchPostsByAllUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

const usersLoader = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users"); // need this endpoint!
    const data = await res.json();

    const allPosts = await fetchPostsByAllUsers();
    const allData = { ...data, allPosts };

    return allData;
  } catch (err) {
    console.error(err);
  }
};

export default usersLoader;
