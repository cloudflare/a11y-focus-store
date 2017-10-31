'use strict';

var storedFocusElement;

exports.storeFocus = function(element) {
  storedFocusElement = element || document.activeElement;
};

exports.clearStoredFocus = function() {
  storedFocusElement = null;
};

exports.restoreFocus = function() {
  if (!storedFocusElement) return;
  try { storedFocusElement.focus(); } catch (err) {}
  storedFocusElement = null;
};
