import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FDUnZ-QH6pTW7-U08sd9vu1oozhE2Otx8FNAM6ChZSY'
  }
});