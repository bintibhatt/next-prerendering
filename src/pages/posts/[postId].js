function Post({ post }) {
  return (
    <div>
      <h2>
        {post.id} {"  "}
        {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
