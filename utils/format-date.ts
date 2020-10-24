import { parseISO, format } from 'date-fns';

const formatDate = (string: string): string => {
	return format(parseISO(string), 'MMMM dd, yyyy');
};

export default formatDate;
