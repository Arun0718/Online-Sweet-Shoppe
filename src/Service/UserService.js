import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8081/rest/user";

class UserService {

  

    
   

    createUser(user){
        return axios.post(USER_API_BASE_URL + '/newUser', user);
    }

    login(login){
        return axios.post(USER_API_BASE_URL + '/login' , login);
    }

    getUser(userId){
        return axios.get(USER_API_BASE_URL + '/getUser/' + userId);
    }

    getUserByEmail(email){
        return axios.get(USER_API_BASE_URL + '/getUserByEmail/' + email);
    }

    updateUser(userId, user){
        return axios.put(USER_API_BASE_URL + '/updateUser/' + userId, user);
    }

   
   

   

    
}

export default new UserService()