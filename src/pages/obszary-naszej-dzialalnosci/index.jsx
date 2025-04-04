import Link from "next/link";
import { obszaryAutodetailing } from "../../../constants/index";
import classes from "./ObszaryNaszejDzialalnosci.module.scss";

export default function ObszaryNaszejDzialalnosci() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Obszary naszej działalności</h1>
      <ul className={classes.list}>
        {obszaryAutodetailing.map(({ id, title }) => (
          <li key={id} className={classes.listItem}>
            <Link href={`/${id}`} className={classes.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
