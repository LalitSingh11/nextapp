// import { useState, useEffect } from "react";

// export default function Post() {
//   const [post, setPost] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadPost() {
//       console.log("start", loading);
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/1`
//       );
//       const posts = await response.json();
//       setPost(posts);
//       setLoading(false);
//       console.log("end", loading);
//     }
//     loadPost();
//     console.log("after load");
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <h3>{post.title}</h3>
//     </>
//   );
// }

import Link from "next/link";
import Post from "../../components/Post";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <Post post={post} />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
