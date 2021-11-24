import "./Courses.css";
import { NavLink as Link } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import udemy from "../../assets/images/udemy.png";
import fcc from "../../assets/images/fcc.svg";
import coursera from "../../assets/images/coursera.png";
import edx from "../../assets/images/edx.png";
import udacity from "../../assets/images/udacity.png";
export default function Code() {
  return (
    <div>
      <TopBar />
      <div className="courseFull">
        <div>
          <h1 className="courses-head">Courses: Learn and keep growing!</h1>
        </div>
        <h2 className="courseH2">Development Courses</h2>
        <div className="grid-container">
          <div className="CourseCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Udemy Courses</h1>
              <img src={udemy} alt="udemy" />
            </div>
            <div className="btn">
              <Link
                to={{
                  pathname: "https://www.udemy.com/topic/web-development/",
                }}
                target="_blank"
              >
                <button className="solveBtn">Learn Now!</button>
              </Link>
            </div>
          </div>

          <div className="CourseCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Free coding camp</h1>
              <img src={fcc} alt="free-coding-camp" />
            </div>
            <div className="btn">
              <Link
                to={{
                  pathname:
                    "https://www.freecodecamp.org/news/tag/web-development/",
                }}
                target="_blank"
              >
                <button className="solveBtn">Learn Now!</button>
              </Link>
            </div>
          </div>

          <div className="CourseCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Coursera Courses</h1>
              <img src={coursera} alt="cousera" />
            </div>
            <div className="btn">
              <Link
                to={{
                  pathname:
                    "https://www.coursera.org/courses?query=web%20development",
                }}
                target="_blank"
              >
                <button className="solveBtn">Learn Now!</button>
              </Link>
            </div>
          </div>
        </div>

        <h2 className="courseH2">Machine Learning Courses</h2>
        <div className="grid-container">
          <div className="CourseCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Coursera ML Courses</h1>
              <img src={coursera} alt="coursera" />
            </div>
            <div className="btn">
              <Link
                to={{
                  pathname: "https://www.coursera.org/learn/machine-learning",
                }}
                target="_blank"
              >
                <button className="solveBtn">Learn Now!</button>
              </Link>
            </div>
          </div>

          <div className="CourseCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">EdX ML Courses</h1>
              <img src={edx} alt="edx" />
            </div>
            <div className="btn">
              <Link
                to={{ pathname: "https://www.edx.org/course/machine-learning" }}
                target="_blank"
              >
                <button className="solveBtn">Learn Now!</button>
              </Link>
            </div>
          </div>

          <div className="CourseCard">
            <div className="Title-container">
              <h1 className="PracticeTitle">Udacity ML Courses</h1>
              <img src={udacity} alt="udacity" />
            </div>
            <div className="btn">
              <Link
                to={{
                  pathname:
                    "https://www.udacity.com/course/intro-to-machine-learning--ud120",
                }}
                target="_blank"
              >
                <button className="solveBtn">Learn Now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
