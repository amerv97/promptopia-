"use client";
import React, { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative flex-center w-full">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
    </section>
  );
};

export default Feed;
