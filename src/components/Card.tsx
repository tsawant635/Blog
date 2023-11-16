// Styles Import
import styles from "@/styles/Card.module.scss";

const Card = ({ post }:any) => {

  const { title, slug, thumbnail, details } =
    post.fields;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={"https:" + thumbnail.fields.file.url} alt="images" />
        </div>
        <div className={styles.contentContainer}>
          <h1>{title}</h1>
          <p>
            {details.length < 200
              ? details
              : `${details.substring(0, 150)}......`}
          </p>
          <a href={`/blogs/${slug}`} className={styles.button}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
