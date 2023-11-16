// Packages Import
import { createClient } from "contentful";

// Components Imports
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

// Styles Import
import styles from "@/styles/Card.module.scss";

export default function Home({ posts }: any) {
  return (
    <>
      <Navbar />
      <div className={styles.cardContainer}>
        {posts.map((post: any) => (
          <Card key={post.sys.id} post={post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: "1zuas5bcf834",
    environment: "master", // defaults to 'master' if not set
    accessToken: "9EYFgv_O0L0dYOWAouRoJz5HGA_N6vB7GTqDZS04GeM",
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: res.items,
    },
  };
}
