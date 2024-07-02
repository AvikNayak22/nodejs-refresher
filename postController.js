const posts = [
  {
    id: 1,
    title: "post one",
  },
  {
    id: 2,
    title: "post two",
  },
  {
    id: 3,
    title: "post three",
  },
];

const getPosts = () => posts;

export const getPostLength = () => posts.length;

export { getPosts };
