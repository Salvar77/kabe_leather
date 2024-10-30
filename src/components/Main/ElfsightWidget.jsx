import classes from "./ElfsightWidget.module.scss";

const ElfsightWidget = () => {
  return (
    <div
      className={classes.widgetContainer}
      dangerouslySetInnerHTML={{
        __html: `
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-9926b7de-f421-41f1-9cac-c993a45b42ec" data-elfsight-app-lazy></div>`,
      }}
    />
  );
};

export default ElfsightWidget;
