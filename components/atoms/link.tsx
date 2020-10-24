import { ReactNode } from 'react';

type LinkProps = {
	as: any;
	children: ReactNode;
	href?: string;
	onClick?: () => any;
	className?: string;
};

const Link = ({ as: Component = 'a', ...props }: LinkProps) => {
	return (
		<Component {...props} />
	);
};

export default Link;
