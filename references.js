var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require('./models/posts');
var User = require('./models/user') ;
// User.create({
// 	email: "shanti@roy.com",
// 	name: "Shanti Roy"
// }, function(err, user){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user); 
// 	}
// });

Post.create({
	title: "how to cook daal bhat",
	content: "murga bhat khaoge, daal bhat bhul jaoge."
},function(err, post){
	User.findOne({email:"shanti@roy.com"},function(err, foundUser){
		if (err) {
			console.log(err);
		} else {
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if (err) {
					console.log(err);
				} else {
					console.log(data); 
				}
			});
		}
	});
});
 



//find user
// User.findOne({email: "shanti@roy.com"}).populate("posts").exec(function(err, user){
//  if (err) {
//  	console.log(err);
//  } else {
//  		console.log(user);
//  }
// });

//find all posts for that user