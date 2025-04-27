/**
 * 인덱스드 엑세스 타입
 */
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  }
}

function printAuthorInfo(author: Post["author"]) {  // "author"를 인덱스라고 부름, 값이 아니라 타입(스트링 리터럴 타입)이다.
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "서원빈",
    age: 30
  }
};

// 배열 타입과 함께 사용
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "서원빈",
    age: 30
  }
};

// 튜플 타입과 함께 사용
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];