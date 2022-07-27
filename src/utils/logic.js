import Grapgh from './graph';

const apiUrl = './api.json';

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const coursesData = getData(apiUrl);
