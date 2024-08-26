function Post({ post }) {
  return (
    <div key={post.id}>
      <p>
        {post.id}
        <br /> {post.title}{" "}
      </p>
    </div>
  );
}

export default Post;
