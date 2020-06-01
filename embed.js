var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

//POST- title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
}); 
var Post = mongoose.model("Post", postSchema);

//USER- email, name
 var userSchema = new mongoose.Schema({
 	email: String,
 	name: String,
 	post: [postSchema]
 });
 var User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email: 'shubham@nishad.edu',
// 	name: 'Shubham Nishad'
// });

// newUser.post.push({
// 	title:"Bharat mata, is ladke ko kuch nhi ata.",
// 	content: "just kidding, is ladke ne to bahut machliyaan phasayi hai."
// });
 
// newUser.save(function(err, user){
// 	if (err) {
// 		console.log(err);
// 	}else {
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: 'Reflections on apple',
// 	content: "They are delecious"
// });

// newPost.save(function(err, post){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name:"Shubham Nishad"}, function(err, user){
	if (err){
		console.log(err);
	} else {
		user.post.push({
			name:"3 things i really hate",
			content: "cricket, cricket, cricket"
		});
		user.save(function(err, user){
			if (err) {
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});