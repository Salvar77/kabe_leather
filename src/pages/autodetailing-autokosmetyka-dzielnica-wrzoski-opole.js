import AreaTemplate from "../components/More/AreaTemplate";
import { obszaryAutodetailing } from "../../constants/index";

export default function AutodetailingWrzoskiOpole() {
  const currentArea = obszaryAutodetailing.find(
    (area) => area.id === "autodetailing-autokosmetyka-dzielnica-wrzoski-opole"
  );

  return (
    <AreaTemplate
      title={currentArea.title}
      city={currentArea.city}
      mapSrc={currentArea.mapSrc}
      url={`https://www.kabetintleather.opole.pl/${currentArea.id}`}
      description={currentArea?.description}
    />
  );
}
