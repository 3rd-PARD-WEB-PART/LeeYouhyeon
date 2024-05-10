import axios from "axios";

const server = 'http://localhost:3001/users'

export const getMemberAPI = async(id) =>{
  try{
    const response = await axios.get(`${server}/${id}`);
    return response;
  }
  catch(error){
    console.error(error);
  }
}

export const patchMemberAPI = async(id, data) =>{
  try{
    const response = await axios.patch(`${server}/${id}`, data);
    return response;
  }
  catch(error){
    console.error(error);
  }
}

