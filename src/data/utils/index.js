var path = require("path");
var fs = require("fs");
var matter = require("gray-matter");
var { sync } = require("glob");

const articlesPath = path.join(process.cwd(), "src/data/posts");

async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

async function getArticleFromSlug(slugs) {
  const allArticleMetadata = [];

  for (const slug of slugs) {
    const articleDir = path.join("src/data/posts", `${slug}.mdx`);

    const source = fs.readFileSync(articleDir);
    const { _content, data } = matter(source);

    const metadata = {
      slug: data.slug,
      excerpt: data.excerpt,
      title: data.title,
      date: data.date,
    };

    allArticleMetadata.push(metadata);
  }

  fs.writeFileSync(
    "src/data/utils/blogMetadata.json",
    JSON.stringify(allArticleMetadata),
    {
      flag: "w",
    },
    function () {}
  );

  console.log("Successfully wrote metadata to json file");
}

getSlug().then((slugs) => getArticleFromSlug(slugs));
