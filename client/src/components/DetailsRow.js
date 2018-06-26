import React from 'react';

const DetailsRow = ({ icon, title, name }) => {
	
	return (
		<div>
			<span
			className={`icon ${icon}`}
			style={{ alignSelf: 'flex-start' }}
			/>
			<div style={{ width: '80%' }}>
				<h2>
					{name}: {title}
				</h2>
				{renderNotes()}
			</div>
		</div>
	);
};

export default DetailsRow;