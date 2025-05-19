// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "wonbin"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];


// 튜플 타입
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];
let tup2:[string, number] = ["txt", 2];

// 튜플로 정의하게 되면 배열을 사용할때 인덱스에 넣어야할 값들이 정해져있어서, 잘못 넣음을 방지할 수 있다.
const users:[string, number][] = [
    ["서원빈", 1],
    ["김아무개", 2],
    ["박아무개", 3],
    ["이아무개", 4],
];