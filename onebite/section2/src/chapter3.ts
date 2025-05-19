// object
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "서원빈",
};

let config: {
    // 프로퍼티의 값을 바꾸는 것을 방지해줌
    readonly apiKey: string;
} = {
    apiKey: "My API KEY"
}

// config.apiKey = "hacked"; ❌ 오류