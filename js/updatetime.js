const xhr = new XMLHttpRequest();
xhr.open('GET', '/json/uptime.json');
xhr.responseType = 'json';
xhr.onload = () => {
  if (xhr.status === 200) {
    const data = xhr.response;
    const timestamp = data.lastUpdated;
    const date = new Date(Number(timestamp));
    const formattedDate = date.toLocaleString();
    document.getElementById('last-updated').textContent = formattedDate;
  }
};
xhr.send();
