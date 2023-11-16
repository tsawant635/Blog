// Packages Import
import { createClient } from "contentful";

// Styles Import
import styles from "@/styles/Blog.module.scss";

const PostDetails = ({ blog }:any) =>{

  const { title, featuredImage, details } =
    blog.fields;

  return (
    <div className={styles.blogContainer}>
      <h1>{title}</h1>
      <div className={styles.imageContainer}>
        <img src={"https:" + featuredImage.fields.file.url} alt="images" />
      </div>
      <p className={styles.author}>Author :Tukaram Sawant</p>
      <p className={styles.description}>{details}</p>
    </div>
  );
}

const client = createClient({
  space: "1zuas5bcf834",
  environment: "master", // defaults to 'master' if not set
  accessToken: "9EYFgv_O0L0dYOWAouRoJz5HGA_N6vB7GTqDZS04GeM",
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "blogPost" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }:any) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: {
      blog: items[0],
    },
  };
}

export default PostDetails;
