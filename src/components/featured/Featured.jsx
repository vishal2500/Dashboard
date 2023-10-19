import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="charts">
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Customers</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbarWithChildren
            value={70}
            strokeWidth={10}
          >
            <div className="progress-text">
              <div className="bold-text">70%</div>
              <div className="small-text">Total New customers</div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
