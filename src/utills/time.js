import { format } from 'date-fns';

export function formatDate(date) {
  if (!date) return;
  return format(new Date(date), 'yyyy.MM.dd');
}

cardData.createdAt;
