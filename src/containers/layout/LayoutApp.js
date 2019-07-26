import React from 'react';
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import {previewTrajectory} from "../../store/actions/TrajectoryAction";
import {hideIconPreview} from "../../store/actions/PreviewAction";


const showDataAll = (fnPrev, fnHideIcon) => {
	fnHideIcon(false);
	fnPrev();
};

const LayoutApp = ({previewTrajectory, preview, children, hideIconPreview}) => {
	return (
		<div style={style.wrapper}>
			{
				preview ? <div style={style.preview}>
					<FaArrowLeft size={40} onClick={() => showDataAll(previewTrajectory, hideIconPreview)}/>
				</div> : <React.Fragment />
			}
			<header style={style.AppHeader}>
				{children}
			</header>
		</div>
	);
};

const mapState = ({preview}) => ({
	preview: preview
});

const mapToDispatch = ({
	previewTrajectory,
	hideIconPreview
});

export default connect(mapState, mapToDispatch)(LayoutApp);

const style = {
	'preview': {
		position: 'absolute',
		top: 20,
		left: 20,
		cursor: 'pointer'
	},
	'wrapper': {
		textAlign: 'center'
	},
	'AppHeader': {
		backgroundColor: 'rgba(229, 235, 246, 0.46)',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		color: 'white'
	}
};
