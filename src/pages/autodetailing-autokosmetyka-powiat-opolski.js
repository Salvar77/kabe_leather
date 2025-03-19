import AreaTemplate from "../components/More/AreaTemplate";
import { obszaryAutodetailing } from "../../constants/index";

export default function AutodetailingAutokosmetykaPowiatOpolski() {
  const currentArea = obszaryAutodetailing.find(
    (area) => area.id === "autodetailing-autokosmetyka-powiat-opolski"
  );

  return (
    <AreaTemplate
      title={
        currentArea?.title || "Autodetailing i Autokosmetyka Powiat Opolski"
      }
      city={currentArea?.city || "Powiat Opolski"}
      mapSrc={currentArea?.mapSrc || ""}
    />
  );
}
