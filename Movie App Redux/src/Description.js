import React from "react";
import { connect } from "react-redux";
import './App.css'

const Description = props => {
  return props.movieList.map(
    (e, i) =>
      i === Number(props.match.params.id) && (
        <div key={i} className="description-cont">
          <img src={e.movieImage} alt="." className="img-dscrptn" /> <h2>{e.movieName}</h2>{" "}
          <span>{e.movieType}</span>
          <span>{e.description}</span>
        </div>
      )
  );
};

const mapStateToProps = state => {
  return { movieList: state.listTab };
};

export default connect(mapStateToProps)(Description);
