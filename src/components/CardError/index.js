import React from "react";
import PropTypes from "prop-types";
import Animate, { FlipInY } from "animate-css-styled-components";
import { Article } from "./styles";
import Warning from "../../assets/imgs/alert.svg";

const CarrError = ({ msg }) => {
  return (
    <Animate Animation={[FlipInY]} duration={["0.8s"]} delay={["0.2s"]}>
      <Article>
        <section>
          <picture>
            <img src={Warning} alt="Warning" />
          </picture>
          <p>{msg}</p>
        </section>
      </Article>
    </Animate>
  );
};

CarrError.propTypes = {
  msg: PropTypes.string,
};

export default CarrError;
