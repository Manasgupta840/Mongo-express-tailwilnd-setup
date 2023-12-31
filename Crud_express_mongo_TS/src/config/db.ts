import mongoose, {connect} from 'mongoose';

async function connects(){
    return connect("mongodb://0.0.0.0:27017/Todo")
    .then(()=> {
        console.log("db connection established")
    })
    .catch((error)=> {
        console.error(error);
    })
}

export {
    connects
}