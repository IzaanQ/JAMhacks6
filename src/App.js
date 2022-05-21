import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <div className="navTitle">
            <h1>schedula</h1>
          </div>
          <div className="navItem">
            <div className="navThing">
              <p>settings</p>
            </div>
            <div className="navThing">
              <p>home</p>
            </div>
            <div className="navThing">
              <p>groups</p>
            </div>
          </div>
        </div>
        <div className="floatContainer">
          <div className="floatChild">
            <div className="contacts">
              <h1 className="titleOfContacts">contacts</h1>
              <div className="contactItem">
                <div className="activityStatus"></div>
                <div className="iconHolder">
                  <img src={logo} alt="Logo" className="icon" />
                </div>
                <p>
                  <span className="hide">iiiiii</span> Izaan Qaiser <br />{" "}
                  <span className="relation">
                    {" "}
                    <span className="hide">iiiiiiii</span> Chem Classmate
                  </span>
                </p>
              </div>
              <div className="contactItem">
                <div className="activityOffline"></div>
                <div className="iconHolder">
                  <img src={logo} alt="Logo" className="icon" />
                </div>
                <p>
                  <span className="hide">iiii</span>LeBron James
                  <br />{" "}
                  <span className="relation">
                    {" "}
                    <span className="hide">iiiiiii</span>Basketball Buddy
                  </span>
                </p>
              </div>
              <div className="contactItem">
                <div className="activityStatus"></div>
                <div className="iconHolder">
                  <img src={logo} alt="Logo" className="icon" />
                </div>
                <p>
                  <span className="hide">iiiiiiifi</span>Will Smith <br />{" "}
                  <span className="relation">
                    {" "}
                    <span className="hide">ii</span>Personal Bodyguard
                  </span>
                </p>
              </div>
              <div className="contactItem">
                <div className="activityOffline"></div>
                <div className="iconHolder">
                  <img src={logo} alt="Logo" className="icon" />
                </div>
                <p>
                  <span className="hide">ooiiiii</span>Elon Musk <br />{" "}
                  <span className="relation">
                    {" "}
                    <span className="hide">iiiiiiiiifwgr</span>Best Friend
                  </span>
                </p>
              </div>
              <div className="contactItem">
                <div className="activityStatus"></div>
                <div className="iconHolder">
                  <img src={logo} alt="Logo" className="icon" />
                </div>
                <p>
                  <span className="hide">iiiiiiiiiiiiiuu</span>Drake <br />{" "}
                  <span className="relation">
                    {" "}
                    <span className="hide">fweegii</span>Music Teacher
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="floatChild2">
            <div className="mySchedule">
              <h1 className="titleTing">my schedula</h1>
              <div className="myScheduleHolder">
                <div className="internalTing">
                  <div className="timeblocks">
                    <div className="busyTimeBlock">
                      <span className="blockText">busy</span>
                    </div>
                    <div className="workTimeBlock">
                      <span className="blockText">work</span>
                    </div>
                    <div className="funTimeBlock">
                      <span className="blockText">fun</span>
                    </div>
                    <div className="newTimeBlock">+</div>
                  </div>

                  <div className="daySchedule">
                    <div className="date">Monday June 12th</div>
                    <div className="slotTask">
                      <p class="busyTing">busy</p>
                      <div className="slotTime">
                        {" "}
                        <p class="timingTing">
                          8am - 10am <br />
                          Office
                        </p>{" "}
                      </div>
                    </div>
                    <div className="slotTask">
                      <p class="busyTing">rapping</p>
                      <div className="slotTime">
                        {" "}
                        <p class="timingTing">
                          11am - 1pm <br />
                          Studio
                        </p>{" "}
                      </div>
                    </div>
                    <div className="slotTask">
                      <p class="busyTing">fun</p>
                      <div className="slotTime">
                        {" "}
                        <p class="timingTing">
                          2pm - 8pm <br />
                          Room
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
