import React from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { useState } from "react";
import { supabase } from "../client";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
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

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Brawler")
      .update({
        name: post.name,
        damage: post.damage,
        ultimate: post.ultimate,
        description: post.description,
      })
      .eq("id", id);

    window.location = "/";
  };

  const deletePost = async (event) => {
    event.preventDefault();
    await supabase.from("Brawler").delete().eq("id", id);

    window.location = "http://localhost:3000/";
  };

  return (
    <div>
      <form>
        <label for="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={post.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="damage">Damage</label>
        <br />
        <input
          type="number"
          id="damage"
          name="damage"
          value={post.damage}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="ultimate">Ultimate</label>
        <br />
        <input
          type="text"
          id="ultimate"
          name="ultimate"
          value={post.ultimate}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          name="description"
          id="description"
          value={post.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
