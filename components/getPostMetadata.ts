import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      date: matterResult.data.date,
      title: matterResult.data.title,
      slug: fileName.replace(".md", ""),
    };
  });

  const date = new Date();
  const offsetInMinutes = -180;
  date.setMinutes(date.getMinutes() + offsetInMinutes);
  const day = date.getUTCDate().toString();
  const month = (date.getUTCMonth() + 1);
  const year = date.getUTCFullYear().toString();

  const formattedDate = `${day} ${month} ${year}`;

  const filteredPosts = posts.filter((post) => {
    const postDateParts = post.date.split(" ");
    const postFormattedDate = `${postDateParts[0]} ${postDateParts[1]} ${postDateParts[2]}`;

    return postFormattedDate <= formattedDate;
  });

  filteredPosts.sort((a, b) => {
    const aParts = a.date;
    const bParts = b.date;
    const aDate = new Date(`${aParts[2]} ${aParts[1]} ${aParts[0]}`);
    const bDate = new Date(`${bParts[2]} ${bParts[1]} ${bParts[0]}`);

    return bDate.getTime() - aDate.getTime();
  });

  filteredPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return filteredPosts;
};

export default getPostMetadata;
