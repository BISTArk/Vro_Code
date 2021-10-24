import "./Code.css";
import TopBar from "../../components/TopBar/TopBar";
import leetcode from "../../assets/images/leetcode.png"
import gfg from "../../assets/images/gfg.svg";
import codeforces from "../../assets/images/codeforces.svg";
import codechef from "../../assets/images/codechef.png";
import hackerearth from "../../assets/images/hackerearth.png";
import hackerrank from "../../assets/images/hackerrank.png";
import codesandbox from "../../assets/images/codesandbox.png"
import codepen from "../../assets/images/codepen.png";
import repl from "../../assets/images/repl.png";

export default function Code(){
    return(
        <div>
            <TopBar/>
             <div>
                 <h1 classame="practice-heading">h1Practice Time!</h1>
                <hr className="hrCode"/>
             </div>
                <h2>Competitive Programming</h2>
             
             



             <div className = "grid-container">
               <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Leetcode</h1>
                   <img src ={leetcode} alt = "leetcode"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">GFG Practice</h1>
                   <img src ={gfg} alt = "gfg"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Hackerrank</h1>
                   <img src ={hackerrank} alt = "hackerrank"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>


                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">CodeForces</h1>
                   <img src ={codeforces} alt = "codeforces"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">CodeChef</h1>
                   <img src ={codechef} alt = "codechef"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">HackerEarth</h1>
                   <img src ={hackerearth} alt = "hackerearth"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

             </div>

            <hr />
             <h2>Development Practice</h2>
             <div className = "grid-container">
               <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Codepen</h1>
                   <img src ={codepen} alt = "codepen"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Repl.it</h1>
                   <img src ={repl} alt = "repl"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">CodeSandBox</h1>
                   <img src ={codesandbox} alt = "codesandbox"/>
                             </div>
                   <div className = "btn">
                   <button className="solveBtn">
                        Solve Now
                    </button>
                    </div>
              </div>

             </div>






        </div>
       
    )
}