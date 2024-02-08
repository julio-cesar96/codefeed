import styles from "./Avatar.module.css";
import { AvatarProps } from "./Avatar.types";

export const Avatar: React.FC<AvatarProps> = ({ source, hasBorder = true }) => {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={source}
      />
    </>
  );
};
