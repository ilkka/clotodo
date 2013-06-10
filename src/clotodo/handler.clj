(ns clotodo.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [noir.response :as response]))

(defroutes app-routes
  (GET "/hello" [] "Hello World")
  (GET "/todo" [] response/json "[ { \"foo\":\"bar\" } ]")
  (route/files "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
