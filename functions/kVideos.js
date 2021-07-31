const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getKVideos');
const createCourse = require('./helpers/createKVideos');
const deleteCourse = require('./helpers/deleteKVideos');
const updateCourse = require('./helpers/updateKVideos');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
    if (event.httpMethod === 'GET') {
        return await getCourses(event);
    } else if (event.httpMethod === 'POST') {
        return await createCourse(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateCourse(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteCourse(event);
    } else {
        return formattedReturn(405, {})
    }
};
