//@ts-nocheck
const express = require("express");
const path = require("path");
//const blogs = require("../data/blogs");
const {
  getBlogPosts,
  createBlogPost,
  getBlogPost,
} = require("../services/blogPosts");

export const router = express.Router();

router.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../templates/index.html")); //using express
  res.render("home"); //using Handlebars
});

router.get("/blog", async (req, res) => {
  //   blogs.forEach((e) => {
  //     console.log(e.title);
  //   });
  //   res.sendFile(path.join(__dirname, "../templates/blogHome.html"));
  // return new Date(b.date) - new Date(a.date);
  const blogPosts = await getBlogPosts();
  blogPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  res.render("blogHome", {
    blogs: blogPosts,
  });
});

router.get("/blogpost/:slug", async (req, res) => {
  //find that particular blog
  const myBlog = await getBlogPost(req.params.slug);

  //console.log(myBlog);
  //res.sendFile(path.join(__dirname, "../templates/blogpage.html"));

  res.render("blogPage", {
    title: myBlog.title,
    content: myBlogcontent,
    date: myBlog.date,
    author: myBlog.author,
  });
});

router.post("/blog/", async (req, res) => {
  const blogPost = await createBlogPost(req.body);
  res.status(200).json({ blogPost }); //send a response
});

//module.exports = router;
