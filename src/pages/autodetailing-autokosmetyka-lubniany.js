import AreaTemplate from "../components/More/AreaTemplate";
import { obszaryAutodetailing } from "../../constants/index";

export default function AutodetailingAutokosmetykaLubniany() {
  const currentArea = obszaryAutodetailing.find(
    (area) => area.id === "autodetailing-autokosmetyka-lubniany"
  );

  return (
    <AreaTemplate
      title={currentArea?.title || "Autodetailing i Autokosmetyka Łubniany"}
      city={currentArea?.city || "Łubniany"}
      mapSrc={currentArea?.mapSrc || ""}
      url={`https://www.kabetintleather.opole.pl/${currentArea.id}`}
    />
  );
}
