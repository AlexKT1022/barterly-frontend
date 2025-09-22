const postLoader = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default postLoader;
