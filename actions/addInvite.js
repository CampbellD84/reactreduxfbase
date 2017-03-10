import ActionTypes from '../constants/ActionTypes';
import database from './database';

export function addToInvite(name) {
  return dispatch => {
    dispatch(addToInviteRequestedAction());
    const guestsRef = database.ref('/guests');
    guestsRef.push({
      name
    })
    .then(() => {
      dispatch(addToInviteFulfilledAction({name}));
    })
    .catch((error) => {
      dispatch(addToInviteRejectedAction());
    });
  }
}

function addToInviteRequestedAction() {
  return {
    type: ActionTypes.addToInviteRequestedAction
  }
}

function addToInviteRejectedAction() {
  return {
    type: ActionTypes.addToInviteRejected
  }
}

function addToInviteFulfilledAction(guest) {
  return {
    type: ActionTypes.addToInviteFulfilled,
    guest
  }
}
