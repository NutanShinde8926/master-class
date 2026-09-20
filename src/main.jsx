import { createRoot } from "react-dom/client";
import ExternalComp from './components/ExternalComp';
// import 'bootstrap/dist/css/bootstrap.min.css'

const root = createRoot(document.getElementById('root'));



function MyCompo(){
  return(
    <div>
      <h2>Heading</h2>
      <p>paragraph</p>
    </div>
  );
}
root.render(<MyCompo/>);

function NewCompo() {
  return(
    <ul>
      <li>Java</li>
      <li>React</li>
      <li>SQL</li>
    </ul>
  );
}
root.render(
  <div>
    <MyCompo/>
    <NewCompo/>
    <ExternalComp/>
  </div>
);