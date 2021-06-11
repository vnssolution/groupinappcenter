
import {CATEGORIES_ENDPOINTS,BASE_URL} from '../ApiManager/ApiEndpoints'
import axios from "axios";


export function CategoryList(requestdata) {
  let reqesturl =BASE_URL+CATEGORIES_ENDPOINTS
  return axios
    .get(reqesturl)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

