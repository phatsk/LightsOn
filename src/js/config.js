module.exports = [{
	"type": "heading",
	"defaultValue": "LightsOn Configuration"
},{
	"type": "section",
	"items": [{
		"type": "input",
		"messageKey": "email",
		"defaultValue": "",
		"label": "Email Address",
		"attributes": {
			"placeholder": "eg: name@domain.com",
			"type": "email"
		}
	},{
		"type": "input",
		"messageKey": "password",
		"defaultValue": "",
		"label": "Password",
		"attributes": {
			"type": "password"
		}
	},{
		"type": "text",
		"defaultValue": "Your VeSync Account Password"
	}]
},{
	"type": "header",
	"defaultValue": "Disclaimer"
},{
	"type": "text",
	"defaultValue": "Your account email and password are only used to authorize you with VeSync's servers. Your infromation is not stored."
},{
  "type": "submit",
  "defaultValue": "Authorize"
}];
