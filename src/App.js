import React, { Component } from "react";

import axios from "axios";
const axiosGitHubGraphQL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

const Title = "React GraphQL GitHub Client";

class App extends Component {
  render() {
    return (
      <div>
        <h1>{Title}</h1>
      </div>
    );
  }
}

export default App;
