(ns clotodo.test.handler
  (:use clojure.test
        ring.mock.request
        clotodo.handler))

(deftest test-app
  (testing "main route"
    (let [response (app (request :get "/"))]
      (is (= (:status response) 200))
      (is (not (nil? (re-find #"Welcome to clotodo" (:body response)))))))

  (testing "not-found route"
    (let [response (app (request :get "/invalid"))]
      (is (= (:status response) 404)))))
