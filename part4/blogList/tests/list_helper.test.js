const listHelper = require("../utils/list_helper");
describe("Dummy", () => {
  test("returns one", () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });
});

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];
describe("totalLikes", () => {
  test("returns 0 if empty array", () => {
    const input = []
    expect(listHelper.totalLikes(input)).toEqual(0);
  });

  test("returns correct value if array has one element", () => {
    const input = [blogs[0]]
    expect(listHelper.totalLikes(input)).toEqual(7);
  });

  test("returns correct value if array has more than one elements", () => {
    const input = blogs;
    expect(listHelper.totalLikes(input)).toEqual(36);
  });
});

describe("favouriteBlog", ()=>{

  test("returns null when no blogs in array",()=>{
    const input = [];
    expect(listHelper.favoriteBlog(input)).toEqual(null)
  })

  test("returns blog when only one blog in array",()=>{
    const input = [blogs[0]];
    expect(listHelper.favoriteBlog(input)).toEqual(blogs[0])
  })

  test("returns blog with most likes when more than one blog in array",()=>{
    const input = blogs;
    expect(listHelper.favoriteBlog(input)).toEqual(blogs[2])
  })

})

describe("mostBlogs",()=>{

  test("returns null when no blogs", ()=>{
    const input = [];
    expect(listHelper.mostBlogs(input)).toEqual(null)
  })

  test("works with one blog in array", ()=>{
    const input = [blogs[0]];
    expect(listHelper.mostBlogs(input)).toEqual(input[0])
  })

  test("works with more than one blogs in array", ()=>{
    const input = [...blogs];
    expect(listHelper.mostBlogs(input)).toEqual({
      author: "Robert C. Martin",
      blogs: 3
    })
  })

})