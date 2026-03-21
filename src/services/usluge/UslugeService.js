import { usluge } from "./UslugePodaci";



async function get() {
    return {data: usluge}
    
}

export default{
    get
}