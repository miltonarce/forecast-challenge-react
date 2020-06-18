import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Switch from "react-switch";
import { Article } from "./styles";
import Animate, {
  FlipInY,
  FadeInDown,
  RotateOutUpRight,
} from "animate-css-styled-components";
import CityMap from "../CityMap";
import ArrowNext from "../../assets/imgs/next.svg";

const toCelsius = (value) => {
  value = value - 273.15;
  return Math.round(value);
};

const Card = ({ data, list }) => {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [celsius, setCelsius] = useState(true);

  const handleShowMap = () => {
    setShow(!show);
  };

  const handleInfoShow = () => {
    setShowInfo(!showInfo);
    setShow(false);
  };

  const handleTempUnit = () => {
    setCelsius(!celsius);
  };

  useEffect(() => {
    !list && setShowInfo(true);
  }, [list]);

  return (
    <Animate Animation={[FlipInY]} duration={["0.8s"]} delay={["0.2s"]}>
      <Article rotateImage={showInfo}>
        <section>
          <div>
            <p>
              {data.name}{" "}
              {showInfo && (
                <i
                  className="wi wi-wind towards-0-deg"
                  onClick={handleShowMap}
                />
              )}
            </p>
            <p>
              {celsius
                ? ` ${toCelsius(data.main.temp)} C °`
                : ` ${Math.round(data.main.temp)} K °`}
            </p>
            {show && <CityMap coord={data.coord} />}
            {list && (
              <button type="button" onClick={handleInfoShow}>
                <img src={ArrowNext} alt="arrow" />
              </button>
            )}
          </div>
          {showInfo && (
            <div>
              <div>
                <i className={data.icon} />
                <Switch
                  onChange={handleTempUnit}
                  offColor="#6fa4e9"
                  onColor="#2b7ce9"
                  offHandleColor="#2b7ce9"
                  onHandleColor="#6fa4e9"
                  checked={celsius}
                  checkedIcon={<label>c</label>}
                  uncheckedIcon={<label>k</label>}
                  className="switch-temp"
                />
              </div>
              <p>Today</p>
            </div>
          )}
        </section>
        {showInfo ? (
          <section>
            <div>
              <p>
                <label>Pressure</label>
                {`  ${data.main.pressure} hPa`}
              </p>
              <p>
                <label>Humidity</label>
                {`  ${data.main.humidity} %`}
              </p>
            </div>
            <div>
              <p>
                <label>Mín Temp</label>
                {celsius
                  ? ` ${toCelsius(data.main.temp_min)} C °`
                  : ` ${Math.round(data.main.temp_min)} K °`}
              </p>
              <p>
                <label>Máx Temp </label>
                {celsius
                  ? ` ${toCelsius(data.main.temp_max)} C °`
                  : ` ${Math.round(data.main.temp_max)} K °`}
              </p>
            </div>
          </section>
        ) : (
          <div />
        )}
      </Article>
    </Animate>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  list: PropTypes.bool,
};

export default Card;
