import React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

const data = [
  { id: 1, name: "pen", quantity: 1 },
  { id: 2, name: "pencil", quantity: 2 },
];

const MyList = (props) => {
  return (
    <List {...props} perPage={data.length}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="quantity" />
      </Datagrid>
    </List>
  );
};

export default MyList;
