# clotodo

This is the standard modern language learning helloworld, ie. a todo list
manager webapp. The backend is written in Clojure, using Compojure for routing
and and a basic webapp skeleton, and Cheshire for JSON. The frontend is
written using Angular.js. The backend has Speclj tests, the frontend Jasmine
specs, both unit and end-to-end. Backend tests are run with `lein spec`, the
frontend with Karma (née Testacular) using `karma.conf.js` for the unit tests
and `karma-e2e.conf.js` for the end-to-end tests.

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein ring server

## License

Copyright © 2013 Ilkka Laukkanen
