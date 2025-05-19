// enum 타입 - 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자를 자동으로 할당시킬수도 있고, 직접 `=0`으로 지정해서 할당할 수 있음

// 숫자형 enum
enum Role {
    ADMIN,
    USER,
    GUEST
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "서원빈",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean
};

const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 <- 일반 유저
    language: Language.english
};

const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);