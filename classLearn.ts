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