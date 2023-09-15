export class localMaster{
    data = {}
    constructor(key){
        if(key != null && key != undefined && key != ""){
            this.key = key
            if(this.getData() != null){
                this.data = this.getData()
            }else{
                localStorage.setItem(this.key, JSON.stringify(this.data))
            }
        }else{
            console.error("[localMaster] 'key' must have a valid value.")
        }
    }
    stringify(payload){
        return JSON.stringify(payload)
    }
    parse(payload){
        return JSON.parse(payload)
    }
    createData(payload){
        this.data = payload
    }
    updateData(payload){
        this.data = payload
    }
    getData(){
        this.data = this.parse(localStorage.getItem(this.key))
        return this.data
    }
    save(){
        localStorage.setItem(this.key, this.stringify(this.data))
    }    
}