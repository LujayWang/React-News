export const GET_NEWS = "GET_NEWS";

export const getNews = (data) => {
    return {
        type: GET_NEWS,
        data
    }
};

export const fetchNews = (type) => {
    return (dispatch) => {
        return fetch("/index?type="+type+"&key=0831e54e531fc1e3587c79416ec59fb6")
            .then(response => {
                console.log(response);
            })
            
    }
}
