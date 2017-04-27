var React 	  = require('react'),
 	Title     = require('./Title'),
 	Education = require('./Education'),
 	MyFavoriteAnimal = require('./MyFavoriteAnimal');

// raw data
var info = {
			"name": "Yihan Qian",
			"email": "endingqian@hotmail.com",
			"gitHub": "https://github.com/ninaQIAN",
			"education": [
				{
					"level": "Master",
					"year": "2013-2015",
					"degree": "Master of Science",
					"major": "Electrical and Computer Engineering",
					"school": "Rutgers University",
					"region": "U.S.A",
					"gpa": "*.**"
				},
				{
					"level": "Bachelor",
					"year": "2009-2013",
					"degree": "Bachelor of Engineering",
					"major": "Automation Science and Electrical Engineering",
					"school": "Beihang University",
					"region": "China",
					"gpa": "*.**"
				}
			],
			"myfavoriteanimal" : {
				"title":"My Favoirte Animal",
				"content" : "My favoirte animal is cat. Cats are smart and sensitive. They feel the world around them and have their own big world inside their hearts. They are completely immersed in their own thoughts without caring whatever is going on outside. That's why sometimes you'll see a cat sitting silently on the mat, next to a window or on a couch, when suddenly jumps up and starts looking around. And the cat is also very cute. I hope some day in the futuer, I'll be able to raise a lovely kitten as a pet, care him and play with him like he's my little mate. I want to see him grow healthly and live happily with my family."
			}
		};


var Homepage = React.createClass({
	componentDidMount: function() {
		console.log("Homepage");
  	},

	render: function() {
		return (
			<div className="container" >
			    <div className="Row">
			    	<div className="col-md-6">
                		<div className="pageTitle">My Portfolio</div>
            		</div>
            		<Title name={info.name} email={info.email} gitHub={info.gitHub}/>
            	</div>
            	<div className="col-md-12">
	            	<div className="row sectionTitle">Education</div>
				    <Education education={info.education}/>
			    </div>
			    <MyFavoriteAnimal title={info.myfavoriteanimal.title} content={info.myfavoriteanimal.content}/>
  			</div>
		);
	}
});

module.exports = Homepage;