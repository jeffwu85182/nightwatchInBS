module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .windowMaximize()
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Google 信件')
      .pause(1000)
      .clearValue('input[type=text]')
      .pause(1000)
      .setValue('input[type=text]', 'Google翻譯')
      .moveToElement('input[type=button].lsb', 10, 10)
      .pause(2000)
      .assert.visible('div', 'Google翻譯')
      .waitForElementVisible('input[type=submit]', 2000)
      .click('div#sbse0')
      .pause(1000)
      .assert.containsText('ol#rso h3.r a', 'Google 翻譯')
      .getValue('input#lst-ib', function(result) {
            elementValue = result.value;
      })
      .perform(function(client, done) {
        console.log('all done!');
        console.log('elementValue', elementValue);
        // potentially other async stuff going on
        // on finished, call the done callback
        done();
      })
      .end();
  },
  'Demo test Yahoo' : function (client) {
    client
      .url('http://www.yahoo.com')
      .waitForElementVisible('body', 1000)
      .setValue('#UHSearchBox', '多奇數位')
      .waitForElementVisible('#UHSearchWeb', 1000)
      .click('#UHSearchWeb')
      .waitForElementVisible('ol.reg>li:first-child', 1000)
      .assert.containsText('ol.reg>li.first .algo .aUrl p span.fw-m', 'www.miniasp.com')
      .pause(2000)
      .end();
  }
};

