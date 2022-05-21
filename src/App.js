import './App.css';

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
              <p>contacts</p>
              <div className="contactItem"><p>Izaan Qaiser</p></div>
              <div className="contactItem"><p>LeBron James</p></div>
              <div className="contactItem"><p>Will Smith</p></div>
              <div className="contactItem"><p>Chad Chadder</p></div>
              <div className="contactItem"><p>Pablo Escobar</p></div>
            </div>
          </div>
          <div className="floatChild">
            <div className="mySchedule">
              <h1>scheduler</h1>
              <div className="myScheduleHolder">
                <div className="busyTimeBlock">busy</div>
                <div className="workTimeBlock">work</div>
                <div className="funTimeBlock">fun</div>
                <div className="newTimeBlock">+</div>
                <div className="daySchedule">
                  <div className="slotTask">
                    <p>busy</p>
                    <div className="slotTime">
                      {" "}
                      <p>
                        8am - 10am <br />
                        Office
                      </p>{" "}
                    </div>
                  </div>
                  <div className="slotTask">
                    <p>rapping</p>
                    <div className="slotTime">
                      {" "}
                      <p>
                        11am - 1pm <br />
                        Studio
                      </p>{" "}
                    </div>
                  </div>
                  <div className="slotTask">
                    <p>fun</p>
                    <div className="slotTime">
                      {" "}
                      <p>
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
      </header>
    </div>
  );
}

export default App;
