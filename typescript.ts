let rugby: string;
let age: number;
let is:  boolean;
let earthage: bigint | string;
let arr: (string | number)[];
let tup: [string, number, bigint];
let obj: {name: string, age: number, is:boolean};
obj =  {name: '', age: 0, is:true};
obj.name = 'name';
interface Interface {prop1:boolean, prop2:number, prop3:any}
let obj2: Interface = {prop1:true, prop2:0, prop3:null};
interface Interface_with_funcs {
    oldFunc(input:any): any;
    newFunc: (input:any) => any;
}
let example:Interface_with_funcs = {
    oldFunc: function(input:any) {return "";}, 
    newFunc: (input:any) => "",
};
example.oldFunc("foo");
example.newFunc("foo");
}