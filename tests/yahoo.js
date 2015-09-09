/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-07 15:20:56
 * @version $Id$
 */

module.exports = {
  '@tags': ['test1'],
  'Demo test Yahoo22222' : function (client) {
    client
      .url('http://www.yahoo.com.tw')
      .waitForElementVisible('body', 1000)
      .setValue('#UHSearchBox', '多奇數位')
      .waitForElementVisible('#UHSearchWeb', 1000)
      .click('#UHSearchWeb')
      .waitForElementVisible('ol.reg>li:first-child', 1000)
      .assert.containsText('ol.reg>li.first .algo .aUrl p span.fw-m', 'www.miniasp.com')
      .pause(2000)
      .end();
  }
}