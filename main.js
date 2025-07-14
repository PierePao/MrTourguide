export function loadTour(scriptName) {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('app').style.display = 'block';

  const existingScript = document.querySelector('script[data-tour]');
  if (existingScript) existingScript.remove();

  const script = document.createElement('script');
  script.type = 'module';
  script.src = scriptName;
  script.setAttribute('data-tour', 'true');
  document.body.appendChild(script);
}
