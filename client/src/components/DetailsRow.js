import React from 'react';

const DetailsRow = ({ icon, title, name, notes }) => {
	const renderNotes = () => {
		if (notes)
			return (<p style={{ fontWeight: 300, lineHeight: 1.45 }}>{notes}</p>);
		return null
	};
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