// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이아무개",
    nickname: "test",
    birth: "1999.9.12",
    bio: "안녕하세요",
    location: "부천시"
};


// 인덱스 시그니처
// key와 value의 타입을 지정, 규칙을 만들어줌.
type CountryCodes = {
    [key: string]: string;
};
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
};

type CountryNumberCodes = {
    [key: string]: number;
};
let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826
};

// ⚠ 주의할 점: 빈 객체일 경우라도 오류가 안 남
let countryNumberCodesEmpty: CountryNumberCodes = {};