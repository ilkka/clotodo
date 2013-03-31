(ns clotodo.handler_spec
  (:use speclj.core
        ring.mock.request
        clotodo.handler))

(describe "clotodo.handler"
  (it "serves up the app UI from the root"
    (let [response (app (request :get "/"))]
      (should= 200 (:status response))))

  (it "has a /todo API call"
    (let [response (app (request :get "/todo"))]
      (should= 200 (:status response)))))