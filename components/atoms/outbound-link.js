const OutboundLink = props => {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		/>
	);
};

export default OutboundLink;
