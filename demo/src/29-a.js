export var a = 1;
export var obj = { cc: 1 };
export function modify() {
    console.log(a, obj);
    a = 2;
    obj.cc = 2;
}
