import React from "react";
import "./CreatePost.css";
import { useState } from "react";
import { supabase } from "../client";
const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    damage: 0,
    ultimate: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Brawler")
      .insert({
        name: post.name,
        damage: post.damage,
        ultimate: post.ultimate,
        description: post.description,
      })
      .select();

    window.location = "/";
  };

  return (
    <div>
      <form>
        <label for="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <br />
        <label for="damage">Damage</label>
        <br />
        <input
          type="number"
          id="damage"
          name="damage"
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="ultimate">Ultimate</label>
        <input
          type="text"
          id="ultimate"
          name="ultimate"
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
