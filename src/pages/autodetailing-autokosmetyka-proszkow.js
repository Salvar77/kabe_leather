import AreaTemplate from "../components/More/AreaTemplate";
import { obszaryAutodetailing } from "../../constants/index";

export default function AutodetailingAutokosmetykaProszkow() {
  const currentArea = obszaryAutodetailing.find(
    (area) => area.id === "autodetailing-autokosmetyka-proszkow"
  );

  return (
    <AreaTemplate
      title={currentArea.title}
      city={currentArea.city}
      mapSrc={currentArea.mapSrc}
    />
  );
}
