import React from 'react';
import {
    Edit,
    FormTab,
    NumberInput,
    TabbedForm,
    TextInput,
    required
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import { styles as createStyles } from './ProductCreate';

const ProductTitle = ({ record }) => <span>Products #{record.reference}</span>;

const styles = {
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const ProductEdit = ({ classes, ...props }) => (
    <Edit {...props} title={<ProductTitle />}>
        <TabbedForm>
            <FormTab label="attributes">
                <TextInput
                    source="attributes.sku"
                    label="Sku"
                    validate={required()}
                />
                <TextInput
                    source="attributes.manufacturer"
                    label="Manufacturer"
                    validate={required()}
                />
                <NumberInput
                    source="attributes.quantity"
                    label="Quantity"
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                    validate={required()}
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(ProductEdit);
