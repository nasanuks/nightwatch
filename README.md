# This repo use as my personal testing only.
=========================
How to run nightwatch by TON
=========================
1. npm install nightwatch -g
2. download selenium standalone driver
2.1.1 (Optional) Install JRE
2.1.2 Add JRE path to system variable.
3. create file nightwatch.json as configuration file
3.1 change selenium.serverpath
3.2 set desiredCapabilities.browserName = "chrome"
4. nightwatch -c nightwatch.json
