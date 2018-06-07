import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { requestApiData } from './actions';

class Home extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.onClick = this.onClick.bind(this);
	}
	componentDidMount() {
		this.onClick();
		this.props.requestApiData();
	}

	onClick(){
		this.props.requestApiData();
	}
	render() {
		const { results = [] } = this.props.data;
		const personDetail = map(results, (el, i) =>(
			<div className="detailList row" key={i}>
				<div className="col-6">
					<div className="nameList">
						<table>
							<tbody>
								<tr>
									<td width= '30%'><h4>Name:</h4></td>
									<td><h4>{el.name.first} {el.name.last}</h4></td>
								</tr>
								<tr>
									<td><h4>Gender:</h4></td>
									<td><h4>{el.gender}</h4></td>
								</tr>
								<tr>
									<td><h4>Email:</h4></td>
									<td><h4>{el.email}</h4></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-6">
					<img src={el.picture.large} alt="images"/>
				</div>
			</div>
		));
		return(
			<div className="contentBox">
				<div className="container">
					{personDetail}
					<button type="button" onClick={this.onClick}>Click me</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch => 
	bindActionCreators({ requestApiData },dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);