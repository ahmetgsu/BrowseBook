import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reststop.randomhouse.com/resources/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
});

export class HttpServiceProvider {
  get(searchText = null, level = 0, isbn = null) {
    let endpoint;
    if (!isbn) {
      endpoint = `titles?start=0&max=21&expandLevel=${level}&search=${searchText}`;
    } else {
      endpoint = `titles/${isbn}`;
    }

    return new Promise((resolve, reject) => {
      api
        .get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          resolve(err.response);
        });
    });
  }
}

let httpService = new HttpServiceProvider();

export {httpService};
