const postsLoader = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export default postsLoader;
