const { ifCondition } = require('firebase-rules/helpers/conditions');
const {
  isAuth,
  isAuthId,
  newDataExists,
  hasChildren,
  isString,
  validate
} = require('firebase-rules/helpers/common');

const isUserAndIsNotRemoving = ifCondition(
  newDataExists,
  isAuthId('$campaignId'),
  false
);

module.exports = {
  'campaigns': {
    read: true,
    write: true,
    validate: hasChildren(['email'])
  }
};