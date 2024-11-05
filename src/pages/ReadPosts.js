import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";
import "./ReadPosts.css";
const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("Brawler")
        .select()
        .order("created_at", { ascending: true });
      setPosts(data);
    };
    fetchPost();
    setPosts(props.data);
  }, [props]);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Card
            id={post.id}
            img={post.img}
            name={post.name}
            damage={post.damage}
            ultimate={post.ultimate}
            description={post.description}
          />
        ))
      ) : (
        <h2>{"No Brawlers Yet 😞"}</h2>
      )}
    </div>
  );
};

export default ReadPosts;
