class Animal2{
    name :string
    constructor(name){
        this.name =name
    }
    run (){
        console.log(`${this.name} runing`)
    }
}

interface Dark {
    dark(name:string):void
}

class Person extends Animal2 implements Dark{
    constructor(name){
        super(name)

    }
    dark(){
        console.log(`${this.name} is Darking`)
    }
}
const lily = new Person("lily");
lily.dark()