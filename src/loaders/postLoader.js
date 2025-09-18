const postLoader = async ({ params }) => {
  try {
    console.log(params.id);

    const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
    const data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default postLoader;
