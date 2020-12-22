import React, { useEffect, useState } from "react";
import Post from "./components/post";
import AddPost from "./components/addpost";
import Superdelete from "./components/superdelete";
import db from "./lib/firebase";

function App() {
  //Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
  //https://reactjs.org/docs/hooks-state.html
  const [posts, setPosts] = useState([]);

  //https://reactjs.org/docs/hooks-effect.html
  //They let you use state and other React features without writing a class.  // componentDidMount(), componentDidUpdate()
  //useEffect hook can be used to replicate lifecycle behavior, and useState can be used to store state in a function component.

  useEffect(() => {
    // Hook to handle the initial fetching of posts
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(data);
      });
    console.log("posts");
    console.log(posts);
  }, []);



  return (

    <div className="container">
      <h1>Posts: </h1>
      <AddPost />

      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}

      <Superdelete />

    </div>

  );
}

export default App;
