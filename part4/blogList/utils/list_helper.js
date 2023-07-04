const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let likes = 0;
  blogs.forEach((blog) => {
    likes += blog.likes;
  });
  return likes;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 1) {
    return blogs[0];
  }
  if (blogs.length) {
    const sortedByLikes = [...blogs].sort((blog1, blog2) => {
      if (blog1.likes >= blog2.likes) {
        return -1;
      }
      return 1;
    });
    console.log(sortedByLikes);
    return sortedByLikes[0];
  }
  return null;
};

const mostBlogs = (blogs) => {
  if (!blogs.length) {
    return null;
  }
  if (blogs.length === 1) {
    return blogs[0];
  }

  const authors = {};
  blogs.forEach((blog) => {
    if (authors[blog.author] === undefined) {
      authors[blog.author] = [blog];
    } else {
      console.log(authors);
      authors[blog.author].push(blog);
    }
  });

  const names = Object.keys(authors);
  const mostBlogs = {
    author: authors[names[0]],
    blogs: authors[names[0]].length,
  };
  names.forEach((name) => {
    if (authors[name].length > mostBlogs.blogs) {
      mostBlogs.author = name;
      mostBlogs.blogs = authors[name].length;
    }
  });
  return mostBlogs;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
