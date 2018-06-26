import React from 'react';
import ProfilePicture from './ProfilePicture'
import DetailsRow from './DetailsRow'
import Moment from 'react-moment';

const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0',
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};


const EventCard = (props) => (
  
	<div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
		<header style={styles.cardHeader} className='card-header-details'>
			<ProfilePicture imgSrc={props.image} borderColor={props.imgBorderColor} />
			<div>
				<h1>{props.name}</h1>
				<h3 className='icon ion-ios-arrow-down'>{props.title}</h3>
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<DetailsRow
				icon='glyphicon glyphicon-calendar'
				title={<Moment format="dddd, MMMM Do">{props.date}</Moment>}
        name = "Date"
			/>

			<DetailsRow
				icon='glyphicon glyphicon-time'
				title={<Moment format="h:mm a">{props.time}</Moment>}
        name = "Time"
			/>

			<DetailsRow
				icon='glyphicon glyphicon-map-marker'
				title={props.location}
        name = "Location"
			/>
			<DetailsRow 
				icon='glyphicon glyphicon-pencil'
				notes={props.notes}
				name="Notes"
			/>
		</div>
  </div>
);

export default EventCard;