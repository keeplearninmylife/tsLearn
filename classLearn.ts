class Animal{
    name:string
    constructor(name:string){
        this.name =name
    }
    run(){
        console.log(`${this.name } run fast`)
    }
}

const snake = new Animal("小花")
snake.run()
console.log(snake.name)
snake.name="lily"
console.log(snake.name)


//类的继承与方法的重写
class Dog extends Animal{
    constructor(name){
        super(name)
        console.log(this.name)
    }
    run(){
        console.log(`${this.name},快跑啊`)
    }
    dark(){
        console.log("汪汪汪")
    }
}
const dog =new Dog("旺财")
dog.run()
dog.dark()

