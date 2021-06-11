
import *as GINAPI from '../ApiManager/ApiEndpoints'
import axios from "axios";

// Get calls
export function CategoryList() {
  let reqesturl = GINAPI.BASE_URL+GINAPI.CATEGORIES_ENDPOINTS
  return axios
    .get(reqesturl)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
export function StateListApi(token) {

  let reqesturl = GINAPI.BASE_URL + GINAPI.STATE_ENDPOINTS

  return axios
    .get(reqesturl, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }
    )
    .then(response => {
      console.log("StateListApi token response" + response)
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
export function CityListApi(token) {
  console.log("CityListApi token" + token)
  let reqesturl = GINAPI.BASE_URL + GINAPI.CITY_ENDPOINTS
  return axios
    .get(reqesturl,
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
    .then(response => {
      console.log("CityListApi token response" + response)
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

export function CityListApiBYSTATEID(token,id) {
  console.log("CityListApiBYSTATEID token" + token)

  let reqesturl = GINAPI.BASE_URL + GINAPI.CITYBY_STATE_ID+id
  return axios
    .get(reqesturl,
      {
        headers: {
          Authorization: 'Bearer ' + token 
        }
      }
    )
    .then(response => {
      console.log("CityListApi token response" + response)
      return response;
    })
    .catch(function (error) {
      return error;
    });
}




// POST CALLS

export function GINREG(requestdata) {
  let reqesturl = GINAPI.BASE_URL + GINAPI.USER_REG_ENDPOINTS
  return axios
    .post(reqesturl, requestdata)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
export function MOBVALDIATE(requestdata) {
  let reqesturl = GINAPI.BASE_URL + GINAPI.MOBILE_VAL_ENDPOINTS
  return axios
    .post(reqesturl, requestdata)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
export function INSERTPROFILE(requestdata,token,id) {
  let reqesturl = GINAPI.BASE_URL+GINAPI.INSERT_PROFILE+id
  let headers ={
    Authorization: 'Bearer ' + token 
  }
  console.log("INSERTPROFILE url"+JSON.stringify(reqesturl))
  return axios
    .post(reqesturl, requestdata,{ headers: headers })
    .then(response => {
      console.log("INSERTPROFILE token response" + response)
      return response;
    })
    .catch(function (error) {
      console.log("INSERTPROFILE token response" + error)
      return error;
    });
}




