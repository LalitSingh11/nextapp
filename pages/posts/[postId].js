function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <br /> {post.body}
    </div>
  );
}

export default Post;

// export async function getStaticPaths() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const posts = await response.json();

//   const paths = posts.map((post) => {
//     return {
//       params: { postId: `${post.id}` },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
  console.log(context);
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
