import { useRouter } from "next/router";
import { servicesData } from "@/components/Main/Services";
import classes from "./AutomotiveUpholstery.module.scss";
import Link from "next/link";
import Image from "next/image";

const AutomotiveUpholstery = () => {
  const router = useRouter();
  const { automotiveId } = router.query;

  if (!automotiveId) return null;

  const automotive = servicesData.find((c) => c.id === automotiveId);

  if (!automotiveId) return null;

  return (
    <section id="automotive1" className={classes.automotivePage}>
      <h1>{automotive.description}</h1>
      <div>
        <Image src={service.image}></Image>
        <p></p>
        <div>
          <button></button>
        </div>
        <p></p>
        <ul></ul>
      </div>
    </section>
  );
};

export default AutomotiveUpholstery;
