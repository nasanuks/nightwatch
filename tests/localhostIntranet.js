module.exports = {
  /*
  'demo test intranet' : function (client) {
    client
      .url('http://localhost:3000/login')
      .waitForElementPresent('body', 1000);
  },

  'login' : function(client) {
    client
      .setValue('input[type=text]', ['useradmin'])
      .setValue('input[type=password]', ['userpassword', client.Keys.ENTER])
      .pause(5000)
      .assert.containsText('div.content-wrapper', 'Home')
      .end();
  },
  */
  'create customer' : function(client) {
    client
      .url('http://localhost:3000/login')
      .waitForElementPresent('body', 1000)
      .setValue('input[type=text]', ['useradmin'])
      .setValue('input[type=password]', ['userpassword', client.Keys.ENTER])
      .pause(5000)
      .url('http://localhost:3000/customer/new')
      .waitForElementPresent('body', 1000)
      .pause(2000)
      .click("select[type=select][name=IdPrefix]")
      .pause(1000)
      .click("option[value=SG]")
      .keys(['\uE015', '\uE006'])
      .clearValue('input[type=text][name=GracePeriod]')
      .pause(500)
      .setValue('input[type=text][name=GracePeriod]', ['70'])
      .clearValue('input[type=text][name=PaymentTerm]')
      .pause(500)
      .setValue('input[type=text][name=PaymentTerm]', ['90'])
      .clearValue('input[type=text][name=CreditLimitAmount]')
      .pause(500)
      .setValue('input[type=text][name=CreditLimitAmount]', ['300', client.Keys.ENTER]);
  }
};
