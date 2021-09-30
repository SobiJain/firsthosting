import axios from "axios";

function App() {
  function auth() {
      const params = new Map(window.location.search.slice(1).split('&').map(kv => kv.split('=')));
    const url = 'https://api.thecodemesh.online/api/v1/auth/user-worfkflow/6146b9a4c0dc290012eb4d05/?shop='+params.get('shop');
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
        const params = new Map(window.location.search.slice(1).split('&').map(kv => kv.split('=')));
        const enableURL = 'https://api.thecodemesh.online/api/v1/enable/user-worfkflow/6146b9a4c0dc290012eb4d05/?username='+params.get('shop');
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
    const runURL = "https://api.thecodemesh.online/api/v1/trigger/user-workflow/6141b7ddfdc3e80012907072";
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
  auth();
  return (
    <div>
      <button className="float-left submit-button" onClick={enable}>enable/</button>
      <br></br>
      <button className="float-left submit-button" onClick={runSync}>runSync</button>
      <br></br>
    </div>
  );
}

export default App;
