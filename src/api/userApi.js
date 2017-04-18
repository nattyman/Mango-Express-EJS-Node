import 'whatwg-fetch';

export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, OnError);
}

function onSuccess(response){
  return response.json();
}

function OnError(error) {
  console.log(error); // eslint-disable-line no-console
}
