import axios from 'axios';

const KEY = 'AIzaSyCWo3ZaaALI9Ra7gCqqY2zROAh5hKBK0AU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})