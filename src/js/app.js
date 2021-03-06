var ClayObject = require('clay');
var clayConfig = require('config');
var clay       = new ClayObject(clayConfig, null, {autoHandleEvents: false});

Pebble.addEventListener('showConfiguration', function(e){
  Pebble.openURL(clay.generateUrl());
});

Pebble.addEventListener('webviewclosed', function(e){
  if (e && !e.response) {
    logError( 'Whoops' );
    return;
  }

  var dict  = clay.getSettings(e.response);
  Settings.option(dict);
});

var UI = require('ui');

var card = new UI.Card({
  title: 'Hello World',
  body: 'This is your first Pebble app!',
  scrollable: true
});

card.show();

$('#authorize').on('click', function(e){
  console.log(JSON.stringify(e));
});

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

