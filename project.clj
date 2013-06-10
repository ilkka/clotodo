(defproject clotodo "0.1.0-SNAPSHOT"
  :description "A todo webapp in clojure"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.5"],
                 [cheshire "5.0.2"]]
  :plugins [[lein-ring "0.8.2"], [speclj "2.5.0"]]
  :ring {:handler clotodo.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.3"], [speclj "2.5.0"], [lib-noir "0.6.0"]]}}
  :test-paths ["spec/"])
