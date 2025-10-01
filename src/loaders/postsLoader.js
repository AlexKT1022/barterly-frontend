const postsLoader = async () => {
  try {
    const res = await fetch('https://barterly-backend.onrender.com/api/posts');
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default postsLoader;
