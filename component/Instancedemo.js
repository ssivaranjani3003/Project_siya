import axios from 'axios';
const Instancedemo=axios.create({
    baseURL:"http://localhost:3000"
})
export default Instancedemo;