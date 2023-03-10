const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();
  const { user } = req;
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
    user
  });
});
exports.getTour = catchAsync(async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug })
    .populate({
      path: 'reviews',
      select: 'review rating user'
    })
    .populate({
      path: 'user',
      select: 'photo name'
    });
  console.log(tour);
  res.status(200).render('tour', {
    title: tour.name,
    tour
  });
});
exports.login = (req, res) => {
  res.status(200).render('login', {
    title: 'Login User'
  });
};
