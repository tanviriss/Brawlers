import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("Brawler")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.name}</h1>
      <p>Damage: {post.damage}</p>
      <p>Ultimate: {post.ultimate}</p>
      <p>Description: {post.description}</p>
    </div>
  );
};

export default PostDetail;
