import fs from "fs";
import path from "path";
import process from "process";

const date = new Date();
const post_date = `${date.getFullYear()}-${date
  .getMonth()
  .toString()
  .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

const POSTS_DIR_PATH = "./data/posts";
const NEW_POST_TEMPLATE = `---
title: "";
summary: null;
tags: [];
bgimg: null;
date: "${post_date}"
---

> Write your post here`;

const newPost = (post_id) => {
  const post_path = path.join(POSTS_DIR_PATH, `${post_id}.md`);
  if (!post_id) {
    console.log("You should input a post_id!");
    return;
  }
  if (fs.existsSync(post_path)) {
    console.log("ERROR: The post_id is exist.");
    return;
  }
  fs.writeFileSync(post_path, NEW_POST_TEMPLATE);
};

const main = () => {
  const post_id = process.argv[2];
  newPost(post_id);
};

main();
