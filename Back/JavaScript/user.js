class User{
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    valid(){
        var re = /\S+@\S+\.\S+/;
        return re.test(this.email);
    }
}

module.exports = User;