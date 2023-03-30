import { formatDistanceStrict } from 'date-fns';

export const formatEventDuretion = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
