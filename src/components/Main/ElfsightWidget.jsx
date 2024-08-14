const ElfsightWidget = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-9926b7de-f421-41f1-9cac-c993a45b42ec" data-elfsight-app-lazy></div>
          `,
      }}
    />
  );
};

export default ElfsightWidget;
