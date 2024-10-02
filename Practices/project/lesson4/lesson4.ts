let arr: (string | number)[] = ['Teo'];

// console.log(arr);

//Tạo mảng có  kiểu dữ liệu sét sẵn
let arr1: [string, number] = ['teo', 20];
let arr2: [string, number, boolean] = ['thien', 21, true];

//trường hợp tạo nhiều kiểu thì làm như sau
let arrRandom: any = "hehe"; //any use everywhere, khai báo bất kì biến kiểu gì cũng được, nhưng sdung nhiều thì lại không tốt

//typle type: kiểu dữ liệu tùy chỉnh

//enum: định nghĩa một tập hợp
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

const handleLogs = (message: string): void => {
    console.log("Message: ", message); // sử dụng cho một hàm mà không trả về một giá trị nào
}

function handleException(errMessage: string): never {
    throw Error(errMessage); //sử dụng khi xử lý lỗi, khi không trả về một kết quả gì
}

handleException("404");

//
function addNumber(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error("Error");
}

console.log("Check", addNumber(5, 1));

//optional params
const sum3 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}

console.log("Result", sum3(1, 2, 3), sum3(1, 3));

//Rest parameter
// 1 function có duy nhất một tham số Rest, phải là tham số cuối cuối cùng trong danh sách tham số, phải sử dụng array type 