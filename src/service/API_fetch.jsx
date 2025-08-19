import axios from 'axios';

const options = {
    method: 'GET',
    url: 'http://localhost:8000/courses',
 
};

export default async function fetchCourses() {
    try {
        const response = await axios.request(options);
        console.log(response);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}
