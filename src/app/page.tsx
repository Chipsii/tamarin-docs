import fs from "fs";
import Link from "next/link";

const getDocsMetadata = () => {
  const folder = "docs";
  const fileNames = fs.readdirSync(folder);
  const markdownFiles = fileNames.filter((fileName) =>
    fileName.endsWith(".md")
  );
  const slugs = markdownFiles.map((fileName) => fileName.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const docsMetadata = getDocsMetadata();
  const docsPreviews = docsMetadata.map((slug) => {
    <div>
      <Link href={`/docs/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  });

  return <div dangerouslySetInnerHTML={{ __html: docsPreviews }}></div>;
}
