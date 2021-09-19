import axios from "axios";

function App() {
  function auth() {
    const url = 'https://api.thecodemesh.online/api/v1/enable/user-workflow/6146b9a4c0dc290012eb4d05/'+window.location.search;
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log("jaideep success!! : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("oh no bro error", error);
      });
  }
  function enable(){
        const enableURL = 'https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/6146b9a4c0dc290012eb4d05/'+window.location.search+'username=dev-ex-store.myshopify.com';
        axios.get(enableURL)
      .then(function (response) {

        // handle success
        console.log("success in enableWorkFlow : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error in enableWorkFlow : ", error);
      });  
  }
  function runSync() {
    const runURL = "https://api.thecodemesh.online/api/v1/trigger/user-workflow/6146b9a4c0dc290012eb4d05";
    axios.get(runURL)
      .then(function (response) {

        // handle success
        console.log("success in sync : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error in sync : ", error);
      });
  }
  return (
    <div>
      <button className="float-left submit-button" onClick={auth}>auth</button>
      <br></br>
      <button className="float-left submit-button" onClick={enable}>enable/</button>
      <br></br>
      <button className="float-left submit-button" onClick={runSync}>runSync</button>
      <br></br>
    </div>
  );
}

export default App;
