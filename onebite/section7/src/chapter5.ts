/**
 * 프로미스
 */
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10)
}).catch((err) => {
  // 실패했을 때의 타입은 정의할 수 없음. 무조건 any 타입
  // 타입 좁히기를 통해서 에러 처리.
  if(typeof err === "string") {
    console.log(err);
  }
});


/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠"
      })
    }, 3000)
  })
};

const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post.id)
});