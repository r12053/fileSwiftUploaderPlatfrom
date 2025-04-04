import axios from 'axios';
import API_URI from "./baseurl.js";

// const API_URI = 'http://localhost:8080';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the uploadFile API ', error.message);
    }
}

export const getAllFiles = async() => {
    try{
        const response = await axios.get(`${API_URI}/files`);
        const files = response.data;
        return files;

    }catch(error){
        console.log('Error while calling the getAllFiles API ', error.message);

    }
}

export const deleteFile  = async(id)=>{
    try{
        console.log(id);
        const response = await axios.delete(`${API_URI}/file/${id}`);
        const files = response.data;
        return files;

    }catch(error){
        console.log('Error while calling the deleteFile API ', error.message);

    }
}