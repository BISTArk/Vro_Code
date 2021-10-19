import "./Courses.css";
import TopBar from "../../components/TopBar/TopBar";
import codesandbox from "../../assets/images/codesandbox.png"
import repl from "../../assets/images/repl.png";
import udemy from "../../assets/images/udemy.png";
import fcc from "../../assets/images/fcc.svg";
import coursera from "../../assets/images/coursera.png";
import edx from "../../assets/images/edx.png";
import udacity from "../../assets/images/udacity.png";
export default function Code(){
    return(
        <div>
            <TopBar/>
             <div>
                 <h1>Courses: Learn and keep growing!</h1>
                <hr className="hrCode"/>
             </div>
                <h2>Development Courses</h2>
             
                {/* https://www.udemy.com/topic/web-development/ */}



             <div className = "grid-container">
               <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Udemy Courses</h1>
                   <img src ={udemy} alt = "udemy"/>
                             </div>
                   <div className = "btn">
                    <button>
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Free coding camp</h1>
                   <img src ={fcc} alt = "free-coding-camp"/>
                             </div>
                   <div className = "btn">
                    <button>
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Coursera Courses</h1>
                   <img src ={coursera} alt = "hackerrank"/>
                             </div>
                   <div className = "btn">
                    <button>
                        Solve Now
                    </button>
                    </div>
                </div>


             </div>

            <hr />
             <h2>Machine Learning Courses</h2>
             <div className = "grid-container">
               <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Coursera ML Courses</h1>
                   <img src ={coursera} alt = "coursera"/>
                             </div>
                   <div className = "btn">
                    <button>
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">EdX ML Courses</h1>
                   <img src ={edx} alt = "edx"/>
                             </div>
                   <div className = "btn">
                    <button>
                        Solve Now
                    </button>
                    </div>
                </div>

                <div className = "PracticeCard">
                   <div className="Title-container">
                   <h1 className = "PracticeTitle">Udacity ML Courses</h1>
                   <img src ={udacity} alt = "udacity"/>
                             </div>
                   <div className = "btn">
                    <button>
                        Solve Now
                    </button>
                    </div>
              </div>

             </div>






        </div>
       
    )
}