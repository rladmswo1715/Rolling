import React from 'react';
import { getBadgeColor } from '../../../utills/dataToStyle';

export default function Badge({ relationship }) {
  const badgeColor = getBadgeColor(relationship);

  return <p className={`badge__${badgeColor}`}>{relationship}</p>;
}
