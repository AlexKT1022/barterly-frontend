const profileLoader = async () => {
  try {
    const token = sessionStorage.getItem('token');
    const res = await fetch('http://localhost:3000/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default profileLoader;
