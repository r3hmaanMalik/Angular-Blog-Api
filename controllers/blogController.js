var blogModel = require('../models/blogModel.js');

/**
 * blogController.js
 *
 * @description :: Server-side logic for managing blogs.
 */
module.exports = {

  /**
   * blogController.list()
   */
  list: function(req, res) {
    blogModel.find(function(err, blogs) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting blog.',
          error: err
        });
      }
      return res.json(blogs);
    });
  },

  /**
   * blogController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    blogModel.findOne({
      _id: id
    }, function(err, blog) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting blog.',
          error: err
        });
      }
      if (!blog) {
        return res.status(404).json({
          message: 'No such blog'
        });
      }
      return res.json(blog);
    });
  },

  /**
   * blogController.create()
   */
  create: function(req, res) {
    var blog = new blogModel({
      author: req.body.author,
      content: req.body.content

    });

    blog.save(function(err, blog) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating blog',
          error: err
        });
      }
      return res.status(201).json(blog);
    });
  },

  /**
   * blogController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    blogModel.findOne({
      _id: id
    }, function(err, blog) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting blog',
          error: err
        });
      }
      if (!blog) {
        return res.status(404).json({
          message: 'No such blog'
        });
      }

      blog.author = req.body.author ? req.body.author : blog.author;
      blog.content = req.body.content ? req.body.content : blog.content;

      blog.save(function(err, blog) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating blog.',
            error: err
          });
        }

        return res.json(blog);
      });
    });
  },

  /**
   * blogController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    blogModel.findByIdAndRemove(id, function(err, blog) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the blog.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};