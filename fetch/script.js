async function getData() {
  const url = `./auth.json`;
  let response = await fetch(url, {method: 'GET',});
  let data = await response.json();
  console.log(data);
}

function getDataByPromise() {
  const url = `./auth.json`; 
  fetch(url).then(resp => resp.json().then(json => console.log(json))).catch(e => console.error(e));
}

