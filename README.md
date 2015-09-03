# bugtracker
very simple drill to play a bit with mean

and play with the following concepts

1.  use of npm  
    *   npm start; npm test (cf. /package.json 'scripts' variable)

 
2.  CRUD (mongoDB)


3.  Single Page App
    *   Angular/Node: one can make "classical" websites by using node router
    *   One single page: ng-view directive + Angular router (<> Node router).
    *   Directive ng-view: here are inserted templates (bare ajax principle)
    *   Url change BUT after #, which means: no classical refresh
    *   Browser does not retrieve if change after #


4.  Client/Server
    *   package json, server side dependencies
    *   client side dependencies: classical client (html)
    *   /public/client: can be served


5.  Bootstrap
    *   Use of  angular-ui-bootstrap package => no conflict between Angular and jQuery(Bootstrap depends on jQuery) but that module has been rewritten WITHOUT jQuery
    *   Rule of thumb: never use jQuery with Angular


6.  Routers
    *   Express router  for '/' and for all ajax called resources 
    *   Angular router to call templates/partials


7.  Controllers & Module
    *   Angular Cornerstone
    *   refresh controllers with events:
    *   after insert, broadcast of an event, onEvent defined in controller -> call to function that cause list to refresh


8.  MVC 
    *   1 file for module definition and router
    *   1 file for controllers that aim for app browsing
    *   conf directory: java style
    *   model directory


9.  Test
    *   Mocha: npm install -g mocha
    *   For now: very simple
    *   type mocha and look for test directory

10.  Misc
    *   package.json:  
    *   "scripts": {"start": "node ./bin/www",  "test": "mocha" }  
    *   => npm test : starts testing

11. TODO

custom directive querySelector  localization ? promises-asynch ? ui bootstrap  light stats with D3 etc... 


