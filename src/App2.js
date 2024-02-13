// Import required libraries
import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";

// import { simpleRestClient, Admin, Resource } from "admin-on-rest";
import jsonServerProvider from "ra-data-json-server";

const customFetch = (url, options = {}) => {
  return fetch(url, { ...options, mode: "no-cors", perPage: 10 });
};

// Create a data provider based on a REST API
const dataProvider = jsonServerProvider("http://127.0.0.1:8000", customFetch);

// Define your App component
const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* Define resources (entities) */}
    <Resource name="store" list={ListGuesser} />
    {/* <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} /> */}
  </Admin>
);

// Export the App component
export default App;
