var React = require('react');

var Title = React.createClass({
	render: function() {
		return (
			<div className="col-md-12 text-right personal">
          		<p className="text-uppercase">{this.props.name}</p>
	            <p>{this.props.email}</p>
	            <p>{this.props.gitHub}</p>
            </div>
		);
	}
});

module.exports = Title;