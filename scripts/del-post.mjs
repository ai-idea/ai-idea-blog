import fs from "fs";
import path from "path";
import process from "process";

const POSTS_DIR_PATH = "./data/posts";

const delPost = (post_id) => {
  const post_path = path.join(POSTS_DIR_PATH, `${post_id}.md`);
  if (!post_id) {
    console.log("You should input a post_id!");
    return;
  }
  if (!fs.existsSync(post_path)) {
    console.log("ERROR: The post_id does not exist.");
    return;
  }
  fs.rm(post_path, (err) => {
    console.log(`The post ${post_id} has been deleted.`);
  });
};

const main = () => {
  const post_id = process.argv[2];
  delPost(post_id);
};

main();
