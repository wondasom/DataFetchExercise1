import React, { useEffect, useState } from "react";
import "./styles.css";

const GITHUB_API = "https://api.github.com/users/wondasom/events";

export const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("i am called");
    async function fetchData() {
      // You can await here
      const response = await fetch(GITHUB_API);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);
  return data.map(profile => (
    <div>
      <p>
        profile avatar:
        <img src={profile.actor.avatar_url} alt="profile avatar" />
      </p>
    </div>
  ));
};
