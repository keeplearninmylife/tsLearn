function abc<T>(args:T):T{
    return args
}

console.log(abc (123))


function arr<T,U>(tur:[T,U]):[U,T]{
    return [tur[1],tur[0]]
}
console.log(arr(["ture",123]))

//约束泛型，只要有某个属性就可以使用，比如传入的参数有length这个属性
interface hasLength{
    length:number
}
function gen<T extends hasLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

const a1 = gen({length :123 ,width:23})
const a2 =gen([1,2])
const a3 = gen("string")

//类和泛型的搭配
class Queque<T>{
    private data =[];
    push (arg:T){
       return this.data.push(arg)
    }
    pop():T{
        return this.data.shift()
    }
}

const queque = new Queque<number>()
queque.push(1.2)
console.log(queque.pop().toFixed())
const queque2 = new Queque<string>()
queque2.push("abc")
console.log(queque2.pop().length)


//interface和泛型的搭配
interface keyPair<T,U>{
    key:T;
    value:U
}

const kp1 :keyPair<string,number>={key:"abc",value:123}
const kp2:keyPair<number,string>={key:234,value:"kkk"}
console.log(kp2,kp1)

//function 的参数和泛型的搭配
interface Add<T>{
    (a:T,b:T):T
}

function adda (a:number,b:number):number{
    return a+b
}

const ad :Add<number> = adda
function connect1 (a:string,b:string):string{
    return a+b
}

const connect12 :Add<string> = connect1
console.log(connect12("abc","123"))