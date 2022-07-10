
const a : number = 1;

const b : number = 2


// or | 

let arr : Array<number | string> = [1, "2", 3, 4, 5]


let arr2 : Array<number | boolean> = [true, 2]


let arr3 : boolean[] = [true]

// Or in premetive

let x : null | number = null

x = 4

let y : undefined | number ;

y= 2

// function sum(a: number, b: number): string | number {
//     return a+b
// }

// let c = sum(a,b)


// function sum(a: number, b: number): number {
//         return a+b
//     }
    
//     let c = sum(a,b)


// optional Argument

function sum(a: number, b?: number):number   {

    if(!b){
        return a
    }
        return a+b
    }
    
    let c = sum(a,b)


    //Void means no value in it 


    function dev(a: number, b: number): void {
        let arr = [a,b]
       
    }


    let ram = dev(1,2)



    //ANY

    function devi(a: number, b: number=0): any {


        return a
    }


    let sam = devi(1)

    // enum type

    enum Country {
        "india",
        "U.S.A"
    }

    // Object
    type User={
        name : string;
        age: number;
        salary: number;
        isEmployee:boolean;
        country: Country;
    }


    //And operator 

    type Student = {

        roll:number;
        id:number | string;
    }



    let person:User & Student = {

        name : "gourab",
        age : 21,
        salary : 20,
        isEmployee : true,
        country:Country.india,
        id:"a",
        roll: 1
        

    }



    //OR operator 

    let person2:User | Student = {

        name : "gourab",
        age : 21,
        salary : 20,
        isEmployee : true,
        country:Country["U.S.A"],
        id:"a",

    }

    interface User2 {
        name : string;
        age: number;
        salary: number;
        isEmployee:boolean;
        country?: "India" | "U.S.A"
    }


    interface Adress{
        place: string;
        pin : number;
    }

    interface Student2 extends User2 {
        
        roll:number;
        id:number | string;
        ad:Adress
    }

    let p3 : Student2 = {
        name:"gourab",
        age: 21,
        salary:122,
        isEmployee: true,
        roll:2,
        id:1,
        ad:{
            pin: 12,
            place:"palur"
        }
    }


    let array : User[] = [{
        name : "gourav",
        age: 12,
        salary: 120,
        isEmployee:true,
        country:Country["U.S.A"]
    }]

    //Assignment =1 


    // const sort = (data:User[], sortBy: keyof User):User[] => {
    //     ////
    //     return data
    // }



    //     const sort<T> = (data:T[], sortBy: T):T[]=> {
    //     ////
    //     return data
    // }

    function sort<T>(data:T[], sortBy:keyof T):T[]{
        return data
    }


  let some =  sort<User>(array,"name")

