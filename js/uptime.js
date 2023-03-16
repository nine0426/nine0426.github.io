fetch('https://nine0426.github.io/uptime.json')
  .then(response => response.json())
  .then(data => {
    const lastUpdated = data.lastUpdated;
    document.getElementById('last-updated').textContent = lastUpdated;
  });
