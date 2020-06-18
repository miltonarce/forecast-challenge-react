import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Main, Section, Container } from "./styles";
import { getForecast, pushForecastHistory } from "../../store/creators";
import Spinner from "../../components/Spinner";
import SearchBar from "../../components/SearchBar";
import CardError from "../../components/CardError";
import Card from "../../components/Card";

const Home = (props) => {
  const dispatch = useDispatch();
  const { forecast } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getForecast("london"));
  }, []);

  const searchData = (val) => {
    dispatch(pushForecastHistory());
    dispatch(getForecast(val));
  };

  return (
    <Main>
      <Section>
        <SearchBar action={searchData} />
      </Section>
      <Section>
        <Container>
          {forecast.loading ? (
            <Spinner />
          ) : forecast.data ? (
            <Card data={forecast.data} list={false} />
          ) : (
            <CardError msg={forecast.message} />
          )}
        </Container>
        {forecast.history.length >= 1 && (
          <Container>
            {forecast.history.map((h, i) => (
              <Card key={i} data={h} list={true} />
            ))}
          </Container>
        )}
      </Section>
    </Main>
  );
};

Home.propTypes = {};

export default Home;
