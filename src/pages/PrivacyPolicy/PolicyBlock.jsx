import React from 'react'

const PolicyBlock = ({ title, children }) => (
	<div>
		<h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
			{title}
		</h2>
		<div className="text-gray-400">{children}</div>
	</div>
);

export default PolicyBlock;