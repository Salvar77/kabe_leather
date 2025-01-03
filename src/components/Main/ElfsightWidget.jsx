import Script from "next/script";
import classes from "./ElfsightWidget.module.scss";

export default function ElfsightWidget() {
  return (
    <div className={classes.widgetContainer}>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />

      <div
        className="elfsight-app-9926b7de-f421-41f1-9cac-c993a45b42ec"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
