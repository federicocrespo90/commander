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
                    source="attributes.name"
                    label="Name"
                    validate={required()}
                />
                <TextInput
                    source="attributes.description"
                    label="Description"
                    validate={required()}
                />
                <NumberInput
                    source="attributes.width"
                    label="Width"
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                    validate={required()}
                />
                <NumberInput
                    source="attributes.height"
                    label="Height"
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                    validate={required()}
                />

                <NumberInput
                    source="attributes.length"
                    label="Length"
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                    validate={required()}
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(ProductEdit);
