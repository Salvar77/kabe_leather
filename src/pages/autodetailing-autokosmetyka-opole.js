import AreaTemplate from "../components/More/AreaTemplate";
import { obszaryAutodetailing } from "../../constants/index";

export default function AutodetailingAutokosmetykaOpole() {
  const currentArea = obszaryAutodetailing.find(
    (area) => area.id === "autodetailing-autokosmetyka-opole"
  );

  return (
    <AreaTemplate
      title={currentArea?.title || "Autodetailing i Autokosmetyka Opole"}
      city={currentArea?.city || "Opole"}
      mapSrc={currentArea?.mapSrc || ""}
      url={`https://www.kabetintleather.opole.pl/${currentArea.id}`}
    />
  );
}
