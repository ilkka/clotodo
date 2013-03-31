(ns clotodo.handler_spec
  (:use speclj.core
        ring.mock.request
        clotodo.handler))

(describe "clotodo.handler"
  (it "serves up the app UI from the root"
    (let [response (app (request :get "/"))]
      (should= 200 (:status response))))

  (describe "/todo API"
    (let [response (app (request :get "/todo"))]
      (it "has a /todo API call"  
        (should= 200 (:status response)))
      (it "responds with todo JSON"
        (should= "[{\"label\":\"Buymilk\",\"createdAt\":\"2013-01-01T12:00:00Z\"},{\"label\":\"Buyeggs\",\"createdAt\":\"2013-01-02T12:00:00Z\"},{\"label\":\"LearnAngular.js\",\"createdAt\":\"2013-01-04T12:00:00Z\"},{\"label\":\"LearnClojure\",\"createdAt\":\"2013-01-03T12:00:00Z\"}]" (:body response)))))
  )