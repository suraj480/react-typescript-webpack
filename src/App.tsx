import "./styles.css";
import IMAGE from "./react_logo.png";
import { ClickCounter } from "./ClickCounter";
export const App = () => {
  return (
    <>
      {" "}
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="react logo" />
      <ClickCounter />
    </>
  );
};
