var React = require('react');

var School = React.createClass({
	render: function() {
		return (
			<div className="row">
        		<div className="col-md-2"></div>
			    <div className="col-md-6">{this.props.year} {this.props.degree}, {this.props.major}, {this.props.school}, {this.props.region}</div>
			    <div className="col-md-4">{this.props.gpa}</div>
	    	</div>
		);
	}
});


module.exports = School;