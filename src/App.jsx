import { useState } from "react";
import "./App.css";
import General from "./components/General";

function App() {
  const [displayedData, setDisplayedData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    date: "",
    company: "",
    position: "",
    responsibilities: "",
    dateOfJoining: "",
    dateOfLeaving: "",
  });

  const handleGeneralSubmit = (data) => {
    setDisplayedData({ ...displayedData, ...data });
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <General onGeneralSubmit={handleGeneralSubmit} />
      </div>

      <div className="display-container">
        {displayedData && (
          <div>
            <h3>General Information</h3>
            <p>Name: {displayedData.name}</p>
            <p>Email: {displayedData.email}</p>
            <p>Phone: {displayedData.phone}</p>
            <h3>Educational Information</h3>
            <p>Institute Name: {displayedData.school}</p>
            <p>Title Of Study: {displayedData.study}</p>
            <p>Date Of Study: {displayedData.date}</p>
            <h3>Work Experience</h3>
            <p>Company Name: {displayedData.company}</p>
            <p>Position Title: {displayedData.position}</p>
            <p>Main Responsibilites Of Job: {displayedData.responsibilities}</p>
            <p>Date Of Joining: {displayedData.dateOfJoining}</p>
            <p>Date Of Leaving: {displayedData.dateOfLeaving}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
