/*
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

import flux from 'flux';
import assign from 'object-assign';

let Dispatcher = flux.Dispatcher;

import Constants from '../constants/Constants';
var { PayloadSources } = Constants;

export default assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});