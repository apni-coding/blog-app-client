import axios from "axios";

export const serverCall = async(url, method, data={}, additonalHeader={}) =>{
    try {
        const token  = 'aaaa'

        const headers = {
            'Authorization' : `Bearer ${token}`,
            ...additonalHeader
        };

        const requestObject = {
            url,
            method,
            data,
            headers
        }

        //api calling using axios
      const response =  await axios.request(requestObject);
    
      if(response.status === 200){
        return {
            success: true,
            data: response.data,
            message: ''
        }
      }else{
        return {
            success: false,
            data:{},
            message: 'Unexpected response status'
        }
      }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            data: {},
            message: error.response?.data?.error || error.message || 'Network error '
        }
    }

}