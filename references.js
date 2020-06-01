var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_2");

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
 	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
 	]
 });
 var User = mongoose.model("User", userSchema);
 
// User.create({
// 	email: "bob@gmai.com",
// 	name: "Bob Belcher"
// }, function(err, user){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user); 
// 	}
// });

