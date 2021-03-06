import "./Code.css";
import { NavLink as Link } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import leetcode from "../../assets/images/leetcode.png";
import gfg from "../../assets/images/gfg.svg";
import codeforces from "../../assets/images/codeforces.svg";
import codechef from "../../assets/images/codechef.png";
import vrocode from "../../assets/images/logoWhite.png";
import hackerrank from "../../assets/images/hackerrank.png";
import codesandbox from "../../assets/images/codesandbox.png";
import codepen from "../../assets/images/codepen.png";
import repl from "../../assets/images/repl.png";

export default function Code() {
  function redirectVro() {
    window.open("http://localhost:4000/", "_blank");
  }
  return (
    <div>
      <TopBar />
      <div className="codeFullContainer">
        <div>
          <div className="heading-prac">
            <h1
              classame="practice-heading"
              style={{ color: "#fff", fontSize: "3rem" }}
            >
              Practice Time!
            </h1>
          </div>
        </div>
        <h2 className="competitive">Competitive Programming</h2>

        <div className="grid-container">
          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle-vro">VroCoder</h1>
              <img src={vrocode} alt="hackerearth" />
            </div>
            <div className="btn">
              <button className="solveBtn" onClick={redirectVro}>
                Try Our IDE now!
              </button>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Leetcode</h1>
              <img src={leetcode} alt="leetcode" />
            </div>
            <div className="btn">
              <Link to={{ pathname: "https://leetcode.com/" }} target="_blank">
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">GFG Practice</h1>
              <img src={gfg} alt="gfg" />
            </div>
            <div className="btn">
              <Link
                to={{ pathname: "https://practice.geeksforgeeks.org/" }}
                target="_blank"
              >
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Hackerrank</h1>
              <img src={hackerrank} alt="hackerrank" />
            </div>
            <div className="btn">
              <Link
                to={{ pathname: "https://www.hackerrank.com/" }}
                target="_blank"
              >
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">CodeForces</h1>
              <img src={codeforces} alt="codeforces" />
            </div>
            <div className="btn">
              <Link
                to={{ pathname: "https://codeforces.com/" }}
                target="_blank"
              >
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">CodeChef</h1>
              <img src={codechef} alt="codechef" />
            </div>
            <div className="btn">
              <Link
                to={{ pathname: "https://www.codechef.com/" }}
                target="_blank"
              >
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>
        </div>

        <h2 className="competitive">Development Practice</h2>
        <div className="grid-container">
          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Codepen</h1>
              <img src={codepen} alt="codepen" />
            </div>
            <div className="btn">
              <Link to={{ pathname: "https://codepen.io/" }} target="_blank">
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Repl.it</h1>
              <img src={repl} alt="repl" />
            </div>
            <div className="btn">
              <Link to={{ pathname: "https://replit.com/~" }} target="_blank">
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>

          <div className="PracticeCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">CodeSandBox</h1>
              <img src={codesandbox} alt="codesandbox" />
            </div>
            <div className="btn">
              <Link
                to={{ pathname: "https://codesandbox.io/" }}
                target="_blank"
              >
                <button className="solveBtn">Practice Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
