import {
     takeLatest, put
  } from 'redux-saga/effects';
  import axios from 'axios';

const getNewsFromServer=()=>{
    return axios.get("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526")
    .then(response => response.data );
}


function* getNewsSaga() {
    try {
    const result= yield getNewsFromServer();
      if (result.status=="ok") {
        yield put({type:"FETCH_NEWS_SUCCESS",payload:result.articles});
      }
    } catch (error) {
        console.log("Oops..Error fetching news");
    }
  }


export default function* newsActionWatcher() {
    yield takeLatest("FETCH_NEWS", getNewsSaga);
  }