// void -> 공허: 아무것도 없음
// 함수에 반환값이 없을때 사용
function func1(): string {
    return "hello";
};

function func2(): void {
    console.log("hello");
};

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;


// never -> 존재하지 않는, 불가능한 타입
// while 반복문, error 예외 던지기
function func3(): never {
    // 반환할 수 없는 무한 반복 함수
    while (true) {
        
    }
}

function func4(): never {
    throw new Error();
}