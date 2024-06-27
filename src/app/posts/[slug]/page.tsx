import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";
import { highlightCode } from "../../utils/highlight";

const getPostContent = (slug: any) => {
  try {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  if (!post) {
    return <p>404</p>;
  }

  return (
    <div>
      <p>
        <b>
          {post.data.date} {post.data.title}
        </b>
      </p>
      <article>
        <Markdown
          options={{
            overrides: {
              code: {
                component: ({ className, children }) => {
                  const language = className
                    ? className.replace("lang-", "")
                    : "";
                  const highlighted = highlightCode(children, language);
                  return (
                    <pre>
                      <code
                        className={`hljs ${language}`}
                        dangerouslySetInnerHTML={{ __html: highlighted }}
                      />
                    </pre>
                  );
                },
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </div>
  );
};

export default PostPage;
