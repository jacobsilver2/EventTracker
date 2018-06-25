import React from 'react';
import styles from '../styles'


const DetailsRow = ({ icon, title, name }) => {
	
  
  

	return (
		<div style={styles.detailsRow.row}>
			<span
			className={`icon ${icon}`}
			style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
			/>
			<div style={{ width: '80%' }}>
				<h2 style={styles.detailsRow.title}>
					{name}: {title}
				</h2>
			</div>
		</div>
	);
};

export default DetailsRow;