var React  = require('react'),
 	School = require('./School');

var Education = React.createClass({
	
  	render: function() {
  		var edu = this.props.education;
  		var schools = edu.map((e) =>
  			<School key={e.level} year={e.year} degree={e.degree} major={e.major} school={e.school} region={e.region} gpa={e.gpa}/>
		);
		return (<div className="col-md-12">{schools}</div>); 
  	}
});

module.exports = Education;