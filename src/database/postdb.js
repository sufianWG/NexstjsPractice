const posts = [
  {
    id: 1,
    title: "First Post",
    description: "This is the first practice post.",
  },
  {
    id: 2,
    title: "Second Post",
    description: "This is the second practice post.",
  },
  {
    id: 3,
    title: "Third Post",
    description: "This is the third practice post.",
  },
];

export const addPost = (newPost) => {
    posts.push(newPost)
    console.log(newPost);
}

export const getPost = () => {
    return posts;
}