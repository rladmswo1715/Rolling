import {
  IMAGE_URL_1,
  IMAGE_URL_2,
  IMAGE_URL_3,
  IMAGE_URL_4,
} from '../constants/url';

export function hasBackgroundImage(recipient) {
  let hasBackgroundImage = false;
  if (!recipient) return;
  if (recipient.backgroundImageURL) {
    hasBackgroundImage = true;
    return hasBackgroundImage;
  }
  return hasBackgroundImage;
}

export function getBackgroundImage({ backgroundImageURL }) {
  if (!backgroundImageURL) return;
  let className = '';
  if (backgroundImageURL === IMAGE_URL_1)
    className = 'card__background__img__1';
  else if (backgroundImageURL === IMAGE_URL_2)
    className = 'card__background__img__2';
  else if (backgroundImageURL === IMAGE_URL_3)
    className = 'card__background__img__3';
  else if (backgroundImageURL === IMAGE_URL_4)
    className = 'card__background__img__4';
  return className;
}

export function getBackgroundColor({ backgroundColor }) {
  if (!backgroundColor) return;
  let className = '';

  if (backgroundColor === 'purple')
    className = 'card__background__color__purple';
  else if (backgroundColor === 'beige')
    className = 'card__background__color__beige';
  else if (backgroundColor === 'blue')
    className = 'card__background__color__blue';
  else if (backgroundColor === 'green')
    className = 'card__background__color__green';
  return className;
}

export function getBadgeColor(relationship) {
  let badgeColor = '';
  if (relationship === '지인') badgeColor = 'orange';
  else if (relationship === '동료') badgeColor = 'purple';
  else if (relationship === '가족') badgeColor = 'green';
  else if (relationship === '친구') badgeColor = 'blue';
  return badgeColor;
}
