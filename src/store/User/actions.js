// User actions

// import user api
import { UserApi } from '../api'

import axios from 'axios'
export default {
    demo() {
        axios.get("localhost:3000/api/house/getHouseById", {
            params: {
                house_id: 25
            }
    }).then(res => {
            console.log(res)
    });
    }
}