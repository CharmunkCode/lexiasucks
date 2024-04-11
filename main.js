(function() {
  const url = 'https://kasm.isaacfonner.com'; // Replace with the desired URL

  const iframeContainer = document.createElement('div');
  iframeContainer.id = 'iframe-container';
  iframeContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);  /* Optional background overlay */
  `;

  const iframe = document.createElement('iframe');
  iframe.id = 'dynamic-iframe';
  iframe.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
  `;

  iframe.src = url;

  iframeContainer.appendChild(iframe);
  document.body.appendChild(iframeContainer);
})();
