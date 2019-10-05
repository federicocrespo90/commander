
import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';



export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="id" reference="products">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="createdDate" label="Created AT" />
            <TextField source="attributes.name" label="NAME" />
            <TextField source="attributes.description" label="DESCRIPTION" />
            <TextField source="attributes.sku" label="SKU" />
            <TextField source="attributes.width" label="WIDTH" />
            <TextField source="attributes.height" label="HEIGHT" />
            <TextField source="attributes.length" label="LENGTH" />
        </Datagrid>
    </List>
);

export default ProductList;