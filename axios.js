import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://shop-savvy-fc079.web.app'
    
});

export default instance;