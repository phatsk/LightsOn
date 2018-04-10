module.exports = function(minified) {
  var clayConfig = this;
  var _ = minified._;
  var $ = minified.$;
  var HTML = minified.HTML;

  clayConfig.on(clayConfig.EVENTS.AFTER_BUILD, function() {
    var vsEmail = clayConfig.getItemByAppKey('vsEmail');
    var vsPass  = clayConfig.getItemByAppKey('vsEmail');

    console.log([vsEmail,vsPass])

    // Set the value of an item based on the userData
    /*
    $.request('get', 'https://some.cool/api', {token: clayConfig.meta.userData.token})
      .then(function(result) {
	// Do something interesting with the data from the server
      })
      .error(function(status, statusText, responseText) {
	// Handle the error
      });
  });
  */

};
