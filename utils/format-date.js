import { parseISO, format } from 'date-fns';

const formatDate = string => {
	return format(parseISO(string), 'MMMM dd, yyyy');
};

export default formatDate;
