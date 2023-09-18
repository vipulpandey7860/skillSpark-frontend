import axios from '@/utils/axios'
import {
    addstudent,
    iserror,
    removeerror,
    removestudent,
    addjobs,
    addinternships
    
} from '../Reducers/studentReducer'


export const asyncCurrentStudent = () => async (dispatch, getState) => {
    try {

        const { data } = await axios.post('/student');
        dispatch(addstudent(data.student));
    }
    catch (error) {
        dispatch(iserror(error.response?.data.message))
    }
}


export const asyncSignupStudent = (student) => async (dispatch, getState) => {

    try {

        const { data } = await axios.post('/student/signup', student);
        dispatch(asyncCurrentStudent());

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncSigninStudent = (student) => async (dispatch, getState) => {

    try {

        const { data } = await axios.post('/student/signin', student);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncSignoutStudent = () => async (dispatch, getState) => {

    try {

        const { data } = await axios.get('/student/signout');
        dispatch(removestudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncUpdateStudent = (student) => async (dispatch, getState) => {

    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/update/" + _id, student);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncAvatarStudent = (avatar) => async (dispatch, getState) => {

    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/avatar/" + _id, avatar);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncResetPasswordStudent = (password) => async (dispatch, getState) => {

    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/reset-password/" + _id, password);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncForgetPasswordStudent = (email) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/student/send-mail/", email);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncOTPPasswordStudent = (pwd) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/student/forget-link/", pwd);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncGetJobs = () => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/student/jobs");
        dispatch(addjobs(data.jobs))
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncGetInternships = () => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/student/internships");
        dispatch(addinternships(data.internship))
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncApplyInternship = (id) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("student/apply/internship/"+id);
        dispatch(asyncCurrentStudent());
        dispatch(asyncGetInternships());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncApplyJob = (id) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("student/apply/job/"+id);
        dispatch(asyncCurrentStudent());
        dispatch(asyncGetJobs());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncAddEducation = (edu) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("resume/add-edu/",edu);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncDeleteEducation = (id) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("resume/delete-edu/"+id);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncEditEducation = (id,edu) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("resume/edit-edu/"+id,edu);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


// ///////////////////////////////job //////////////////////////////////////


export const asyncAddJob = (job) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("resume/add-job/",job);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncDeleteJob = (id) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("resume/delete-job/"+id);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncEditJob = (id,job) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("resume/edit-job/"+id,job);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncDeleteStudent = () => async (dispatch, getState) => {

    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/delete/" + _id);
        dispatch(asyncSignoutStudent());
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}