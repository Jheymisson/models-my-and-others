/*
 * Copyright 2011-2022 GatlingCorp (https://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package computerdatabase.advanced;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import java.time.Duration;

public class AdvancedSimulationStep03 extends Simulation {

  // We need dynamic data so that all users don't play the same and we end up with a behavior
  // completely different from the live system (caching, JIT...)
  // ==> Feeders!

  // default is queue, so for this test, we use random to avoid feeder starvation
  FeederBuilder<String> feeder = csv("search.csv").random();

  ChainBuilder search =
      exec(http("Home").get("/"))
          .pause(1)
          // every time a user passes here, a record is popped from the feeder and
          // injected into the user's session
          .feed(feeder)
          .exec(
              http("Search")
                  // use session data thanks to Gatling's EL
                  .get("/computers?f=#{searchCriterion}")
                  .check(
                      // use a CSS selector with an EL, save the result of the capture group
                      css("a:contains('#{searchComputerName}')", "href").saveAs("computerUrl")))
          .pause(1)
          .exec(
              http("Select")
                  // use the link previously saved
                  .get("#{computerUrl}")
                  .check(status().is(200)))
          .pause(1);

  ChainBuilder browse =
      exec(http("Home").get("/"))
          .pause(2)
          .exec(http("Page 1").get("/computers?p=1"))
          .pause(Duration.ofMillis(670))
          .exec(http("Page 2").get("/computers?p=2"))
          .pause(Duration.ofMillis(629))
          .exec(http("Page 3").get("/computers?p=3"))
          .pause(Duration.ofMillis(734))
          .exec(http("Page 4").get("/computers?p=4"))
          .pause(5);

  ChainBuilder edit =
      exec(http("Form").get("/computers/new"))
          .pause(1)
          .exec(
              http("Post")
                  .post("/computers")
                  .formParam("name", "Beautiful Computer")
                  .formParam("introduced", "2012-05-30")
                  .formParam("discontinued", "")
                  .formParam("company", "37"));

  HttpProtocolBuilder httpProtocol =
      http.baseUrl("http://computer-database.gatling.io")
          .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
          .doNotTrackHeader("1")
          .acceptLanguageHeader("en-US,en;q=0.5")
          .acceptEncodingHeader("gzip, deflate")
          .userAgentHeader(
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0");

  ScenarioBuilder users = scenario("Users").exec(search, browse);
  ScenarioBuilder admins = scenario("Admins").exec(search, browse, edit);

  {
    setUp(users.injectOpen(rampUsers(10).during(10)), admins.injectOpen(rampUsers(2).during(10)))
        .protocols(httpProtocol);
  }
}
