const fetchAllUserPosts = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}/posts`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const userLoader = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
    const data = await res.json();
    const userPosts = await fetchAllUserPosts(params.id);
    const userData = { ...data, userPosts };
    return userData;
  } catch (err) {
    console.error(err);
  }
};

export default userLoader;
