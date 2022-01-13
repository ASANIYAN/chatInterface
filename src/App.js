import './App.scss';
import DateTime from "./DateTime";
import Heading from "./Heading";
import InputForm from './InputForm';
import Msg1 from "./Msg1";
import Msg2 from "./Msg2";
import Msg3 from "./Msg3";
import Msg4 from "./Msg4";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <div className="content container">
        <Heading />
        <Welcome />
        <DateTime />
        <Msg1 />
        <Msg2 />
        <Msg3 />
        <Msg4 />
        <InputForm />
      </div>
    </div>
  );
}

export default App;
