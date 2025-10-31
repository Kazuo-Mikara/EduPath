import axios from 'axios';

export async function CourseFetch(id) {
    try {
        const response = await axios.get(`http://localhost:3000/courses/${id}`); // your actual API endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
}