/**
 * Partial<T>
 *     부분적인, 일부분의
 *     특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
 */
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// 직접 구현해보기
type Partial<T> = {
    [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안..."
};


/**
 * Required<T>
 *     필수의, 필수적인
 *     특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */
type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
    title: "한입 타스 후기",
    content: "",
    tags: ["ts"],
    thumbnailURL: "https://..." // <- Required를 사용하여 선택적 프로퍼티를 필수로 변경함
}


/**
 * Readonly<T>
 *     읽기전용 수정불가
 */
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPostA: Readonly<Post> = {
    title: "보호된 게시글 입니다.",
    content: "",
    tags: ["1"],
};

// readonlyPost.content = ""; ❌ readonly이기때문에 수정 불가