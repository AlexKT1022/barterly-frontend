const profileLoader = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users/me'); // refactor as needed
    const data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default profileLoader;
