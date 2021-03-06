import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactCard extends React.Component{
	constructor(){
		super();
		this.state = {
		};
	}
	
	render(){
		return (
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzID5CT0KpzaBwnbMoWxLjOjPdIDdBBGfHx89N59F9n-IQomokQ" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<button className="btn" onClick={() => this.props.history.push('/edit')}><i className="fas fa-pencil-alt mr-3"></i></button>
							<button className="btn" onClick={() => this.props.onDelete()}><i className="fas fa-trash-alt"></i></button>
						</div>
						<label className="name lead">{this.props.dataContact.full_name}</label>
						<br /> 
						<i className="fas fa-map-marker-alt text-muted mr-3"></i>
						<span className="text-muted">{this.props.dataContact.address}</span>
						<br />
						<span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
						<span className="text-muted small">{this.props.dataContact.phone}</span>
						<br />
						<span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
						<span className="text-muted small text-truncate">{this.props.dataContact.email}</span>
					</div>
				</div>
			</li>
		);
	}
}


ContactCard.propTypes = {
		history: PropTypes.object,
		onDelete: PropTypes.func,
		dataContact: PropTypes.object
};


ContactCard.defaultProps = {
	onDelete: null
};
export default withRouter(ContactCard);