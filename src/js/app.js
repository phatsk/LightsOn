// Set to true to always pull fresh data - use sparingly!
var ui = require('ui');

var card = new UI.Card({
  title: 'Hello World',
  body: 'This is your first Pebble app!',
  scrollable: true
});

card.show();

function log(prefix, message)
{
	return console.log('[' + prefix + '] ' + message);
}

function logUI(message)
{
	return log('UI', message);
}

function logError(message)
{
	return log('EE', message);
}

function logInfo(message)
{
	return log('II', message);
}

function logRemote(message)
{
	return log('<<', message);
}

function logLocal(message)
{
	return ENABLE_LOGGING && log('>>', message);
}

