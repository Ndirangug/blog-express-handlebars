const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../templates/index.html")); //using express
  res.render("home"); //using Handlebars
});

router.get("/blog", (req, res) => {
  //   blogs.forEach((e) => {
  //     console.log(e.title);
  //   });
  //   res.sendFile(path.join(__dirname, "../templates/blogHome.html"));

  res.render("blogHome", {
    blogs: blogs.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
     }),
  });
});

router.get("/blogpost/:slug", (req, res) => {
  //find that particular blog
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });

  //console.log(myBlog);
  //res.sendFile(path.join(__dirname, "../templates/blogpage.html"));

  res.render("blogPage", {
    title: myBlog[0].title,
    content: myBlog[0].content,
    date: myBlog[0].date,
    author: myBlog[0].author,
  });
});

router.post("/blog/", (req, res) => {
  blogs.push(req.body);
  res.status(200).json({ status: "accepted" }); //send a response
});

module.exports = router;
