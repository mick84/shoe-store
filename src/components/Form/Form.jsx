import styles from "./form.module";
export const ProductForm = (props) => {
  return (
    <form className={styles.form} id={styles["product-form"]}>
      {props.children}
    </form>
  );
};
export const UserAuthForm = (props) => {
  return (
    <form className={styles.form} id={styles["user-form"]}>
      {props.children}
    </form>
  );
};
