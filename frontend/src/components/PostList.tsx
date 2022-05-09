import React, {useEffect, useState} from "react";
import Post from "./Post";

const PostList: React.FC = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    getPosts('http://localhost:8000/api/getposts').then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post: string, i: number) => {
        return <Post post={post} key={i}/>
      })}
    </div>
  );
};

export default PostList;
