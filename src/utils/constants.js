const GOOGLE_API_KEY = "AIzaSyDADGdZm4hR5vwKXwsMAGtbTL7kMnN5VU4";

export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_THREAD_API_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=VIDEO_ID&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API_URL = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=" + GOOGLE_API_KEY + "&q=";

export const LIVE_CHAT_COUNT = 10;