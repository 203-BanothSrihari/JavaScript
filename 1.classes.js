class User {
    _name="";
    constructor(_name)
    {
        this._name = _name;
    }
    sayHi()
    {
        console.log(this._name);
    }
}

var user=new User("Srihari");
user.sayHi();