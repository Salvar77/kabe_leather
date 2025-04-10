import Link from "next/link";
import { obszaryAutodetailing } from "../../../constants/index";
import classes from "./ObszaryNaszejDzialalnosci.module.scss";
import SEO from "@/components/Main/SEO";

export default function ObszaryNaszejDzialalnosci() {
  return (
    <>
      <SEO
        title="Obszary naszej działalności - KabeTintLeather Auto Detailing w Opolu"
        description="Poznaj Kamila Brzoskwinię, właściciela KabeTintLeather, i jego pasję do auto detailingu oraz pielęgnacji samochodów. Profesjonalna autokosmetyka w Opolu."
        image="https://www.kabetintleather.opole.pl/owner-kamil-brzoskwinia-kabetintleather.jpg"
        url="https://www.kabetintleather.opole.pl/obszary-naszej-dzialalnosci"
      />
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
    </>
  );
}
