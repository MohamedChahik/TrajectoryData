import React, {Component} from 'react';
import {connect} from "react-redux";

import {displayTrajectory, previewTrajectory, selectTrajectoryShow} from "../store/actions/TrajectoryAction";
import VirtualizeBox from "../components/VirtualizeBox";
import LayoutApp from "../containers/layout/LayoutApp";

class App extends Component {
	renderItem = (data) => data.map((item, i) => (
		<VirtualizeBox
			key={`item-${i}`} points={item.points} id={item.id}
			course={item.course} speed={item.speed} numberStop={item.numberStop}
		/>
	));


	render() {
		const {data} = this.props;

		console.log(data)

		return (
			<LayoutApp>
				{this.renderItem(data)}
			</LayoutApp>
		)
	}
}

const mapState = ({data}) => ({
	data: data
});

const mapToDispatch = ({
	displayTrajectory,
	previewTrajectory,
	selectTrajectoryShow
});

export default connect(mapState, mapToDispatch)(App);

