const Course = require("../models/course");
const { mongooseToObject } = require("../../util/mongoose");

class CoursesController {
  show(req, res, next) {
    //get courses/:slug
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  create(req, res, next) {
    //get courses/:create
    res.render('courses/create');
  }

  //post course/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);

    course.save()
    // res.send('Hello');
      .then(() => res.redirect('/'))
      .catch(error => {
        console.error('Error while saving course:', error);
        next(error); // Chuyển lỗi đến middleware xử lý lỗi tiếp theo
      });
  }
}

module.exports = new CoursesController();

// async index(req, res) {

//   try {

//       const data = await Course.find({});

//       res.json(data);

//   }  catch (err) {

//       res.status(400).json({error: err});
//   }

// }

// res.json({
//   name: 'test'
// })

/////////////////////////////

/*class CoursesController{
    show(req, res,next) {
      //get courses/:slug
      Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show');
      })
      .catch(next);


  }
}*/

// class CoursesController{
//   show(req, res,next) {
//     //get courses/:slug
//     Course.findOne({ slug: req.params.slug })
//     .then(course => {
//       // res.render('courses/show');
//       res.json(course);
//     })
//     .catch(next);

// }
// }
