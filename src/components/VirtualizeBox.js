import React from 'react';
import { VictoryBar } from 'victory';
import { connect } from "react-redux";


import {selectTrajectoryShow} from "../store/actions/TrajectoryAction";
import {showIconPreview} from "../store/actions/PreviewAction";

/**
 *
 * @param id
 * @param fnShow
 * @param fnSelect
 */
const showDataItem = (id: ?number, fnShow, fnSelect) => {
	fnShow(true);
	fnSelect(id)
};

const verifyData = (...args) => (
	<div style={style.wrapperConstancy}>
			<p>Nombre d'arrêt: <span style={style.wrapperConstancy.span}>{args[0]}</span></p>
			<p>Vitesse moyenne: <span style={style.wrapperConstancy.span}>{parseFloat(args[1]).toFixed(2)}</span></p>
			<p>Duréé du parcours: <span style={style.wrapperConstancy.span}>{args[2]}</span></p>
	</div>
);

const VirtualizeBox = ({id, points, showIconPreview, selectTrajectoryShow, numberStop, speed, course}) => {
	return (
		<div style={style.wrapperBar}>
			<VictoryBar data={points}  x="x" y="y" />
			<div>
				<div onClick={() => showDataItem(id, showIconPreview, selectTrajectoryShow)}
					 style={style.wrapperTitle}
				>
					<h4>{id}</h4>
				</div>
				{speed !== undefined ? verifyData(numberStop, speed, course) : <React.Fragment/>}
			</div>
		</div>
	);
};

const mapToDispatch = ({
	selectTrajectoryShow,
	showIconPreview
});

export default connect(null, mapToDispatch)(VirtualizeBox);

const style = {
	'wrapperBar': {
		display: 'flex',
		backgroundColor: 'white',
		margin: '10px 0',
		width: '50%',
		borderRadius: 10,
		boxShadow: '1px 1px 2px rgba(229, 235, 246, 0.8)'
	},
	'wrapperTitle': {
		color: 'red',
		fontSize: 16,
		padding: 15,
		cursor: 'pointer'
	},
	"wrapperConstancy": {
		width: '30%',
		fontSize: '.5rem',
		color: 'black',
		marginLeft: 35,
		"span": {
			color: 'red',
			fontWeight: 'bold'
		}
	}
};
