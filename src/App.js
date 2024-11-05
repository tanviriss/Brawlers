import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetail";
import { Link } from "react-router-dom";

const App = () => {
  const brawlers = [
    {
      id: "1",
      name: "Shelly",
      damage: "300",
      ultimate: "Super Shell",
      description:
        "Shelly's boomstick blasts the other team with buckshot. Her Super destroys cover and keeps her opponents at a distance!",
    },
    {
      id: "2",
      name: "Colt",
      damage: "500",
      ultimate: "Bullet Storm",
      description:
        "Colt fires an accurate burst of bullets from his dual revolvers. His Super shreds cover and extends the bullet barrage!",
    },
    {
      id: "3",
      name: "Bull",
      damage: "400",
      ultimate: "Bulldozer",
      description:
        "Bull deals massive damage up close with his shotgun. His Super is a fierce charge that knocks enemies out of his way!",
    },
    {
      id: "4",
      name: "Jessie",
      damage: "600",
      ultimate: "Scrappy!",
      description:
        "Jessie fires energy orbs that bounce between enemies. Her Super deploys a gun turret that shoots at nearby foes!",
    },
  ];

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={brawlers} />,
    },
    {
      path: "/edit/:id",
      element: <EditPost data={brawlers} />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
    {
      path: "/post/:id",
      element: <PostDetail />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Brawlers</h1>
        <Link to="/">
          <button className="headerBtn"> Check Gallery </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create Brawler </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
