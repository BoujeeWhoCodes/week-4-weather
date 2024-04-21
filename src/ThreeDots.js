
import React from 'react';

export default function ThreeDots({
	className,
	visible,
	height,
	width,
	color,
	radius,
	ariaLabel,
	wrapperStyle,
	wrapperClass,
}) {
	return (
		<div
			className={wrapperClass}
			style={wrapperStyle}
		>
			{visible && (
				<svg
					className={className}
					width={width}
					height={height}
					viewBox='0 0 120 30'
					xmlns='http://www.w3.org/2000/svg'
					fill={color}
				>
					<circle
						cx='15'
						cy='15'
						r={radius}
					>
						<animate
							attributeName='r'
							from={radius}
							to={radius}
							begin='0s'
							dur='0.8s'
							values={`${radius};8;${radius}`}
							calcMode='linear'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='fillOpacity'
							from='1'
							to='1'
							begin='0s'
							dur='0.8s'
							values='1;.5;1'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
					<circle
						cx='60'
						cy='15'
						r={radius}
					>
						<animate
							attributeName='r'
							from={radius}
							to={radius}
							begin='0s'
							dur='0.8s'
							values={`${radius};8;${radius}`}
							calcMode='linear'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='fillOpacity'
							from='1'
							to='1'
							begin='0s'
							dur='0.8s'
							values='1;.5;1'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
					<circle
						cx='105'
						cy='15'
						r={radius}
					>
						<animate
							attributeName='r'
							from={radius}
							to={radius}
							begin='0s'
							dur='0.8s'
							values={`${radius};8;${radius}`}
							calcMode='linear'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='fillOpacity'
							from='1'
							to='1'
							begin='0s'
							dur='0.8s'
							values='1;.5;1'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
				</svg>
			)}
		</div>
	);
}
