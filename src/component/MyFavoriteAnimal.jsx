var React = require('react');


var MyFavoriteAnimal = React.createClass({

	getInitialState: function() {
		return {
			showArticle:false
    	};
  	},

  	_onClickTap: function() {
  		this.setState({showArticle: !this.state.showArticle});
  	},

	_renderPopUpModel: function(){
		if(this.state.showArticle) {
			return(
			<div className="col-md-10">
				<h4 className="myFavoirteAnimal title">{this.props.title}</h4>
  				 <div className="myFavoirteAnimal content">
  					<p>{this.props.content}</p>
  					<img className="img-responsive" src="http://placekitten.com/600/500" alt="cat"/>
			    </div>
			</div>
			);
		}
	},

	render: function() {
		var popUpModel = this._renderPopUpModel();
		var btnContent = this.state.showArticle?"Close":"Show";
		return (
			<div className="col-md-12">
				<div className="row">
		        	<button type="button" onClick={this._onClickTap}>{btnContent}</button>
		        </div>
	        	{popUpModel}
        	</div>
		);
	}
});

module.exports = MyFavoriteAnimal;