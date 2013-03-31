(ns clotodo.handler_spec
  (:use speclj.core
        ring.mock.request
        clotodo.handler
        cheshire.core))

(describe "clotodo.handler"
  (it "serves up the app UI from the root"
    (let [response (app (request :get "/"))]
      (should= 200 (:status response))))

  (let [response (app (request :get "/todo"))]
    (describe "/todo API"
      (it "has a /todo API call"  
        (should= 200 (:status response)))
      (it "responds with valid JSON"
        (should-not-throw (parse-string (:body response) true)))

      (let [todos (parse-string (:body response) true)]
        (describe "todo JSON"
          (it "should not be nil"
            (should-not= nil todos))
          (it "should be list"
            (should= clojure.lang.PersistentVector (type todos)))))))
  )