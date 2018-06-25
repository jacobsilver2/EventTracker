import React from 'react';
import styles from '../styles'
import ProfilePicture from './ProfilePicture'
import DetailsRow from './DetailsRow'
import Moment from 'react-moment';

const EventCard = (props) => (
	<div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
		<header style={styles.cardHeader} className='card-header-details'>
			<ProfilePicture imgSrc={props.image} borderColor={props.imgBorderColor} />
			<div>
				<h1 style={styles.headerName}>{props.name}</h1>
				<h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<DetailsRow
				icon='ion-ios-telephone-outline'
				title={<Moment format="dddd, MMMM Do">{props.date}</Moment>}
        name = "Date"
			/>

			<DetailsRow
				icon='ion-ios-location-outline'
				title={<Moment format="h:mm a">{props.time}</Moment>}
        name = "Time"
			/>

			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title={props.location}
        name = "Location"
			/>
		</div>
  </div>
);

export default EventCard;