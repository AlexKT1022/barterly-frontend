const fetchActivitiesByUserId = async () => {
  const token = sessionStorage.getItem('token');
  try {
    const res = await fetch(
      'https://barterly-backend.onrender.com/api/users/me/activity',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const postLoader = async ({ params }) => {
  try {
    const res = await fetch(
      `https://barterly-backend.onrender.com/api/posts/${params.id}`
    );
    const data = await res.json();
    const loggedUserData = await fetchActivitiesByUserId();
    const allData = { ...data, loggedUserData };

    return allData;
  } catch (err) {
    console.error(err);
  }
};

export default postLoader;
