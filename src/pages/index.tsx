import Scripts from "./scripts.mdx";

export const meta = {
  author: "Rich Haines",
};

function Index() {
  //   <MyLayoutComponent meta={meta}><HelloWorld /></MyLayoutComponent>
  return (
    <article className="prose prose-zinc prose-headings:text-white lg:prose-xl">
      <Scripts />
    </article>
  );
}

export default Index;
