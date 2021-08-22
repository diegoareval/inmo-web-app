class FirebaseService {
    constructor(db){
      this.db = db;
    }

     insert(collection, data){
        return this.db.collection(collection).add(data).then((response)=> {
            console.log("insertado con exito: ", response);
            return {
                ...response, status: true
            }
    
        }).catch((err)=> {
            console.log("err", err);
            return {status: false}
        });
    }
}


export default FirebaseService;