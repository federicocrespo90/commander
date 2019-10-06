
import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="id" reference="products" label="ID">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="attributes.quantity" label="QUANTITY" />
            <TextField source="attributes.manufacturer" label="MANUFACTURER" />
            <TextField source="attributes.sku" label="SKU" />
            <TextField source="createdDate" label="Created AT" />
            <TextField source="updatedDate" label="Updated AT" />
        </Datagrid>
    </List>
);

export default ProductList;