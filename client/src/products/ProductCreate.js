import React from 'react';
import {
    Create,
    FormTab,
    NumberInput,
    TabbedForm,
    TextInput,
    required,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    width: { width: '5em' },
    widthFormGroup: { display: 'inline-block' },
    height: { width: '5em' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const ProductCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="attributes">
                <TextInput
                    autoFocus
                    source="attributes.sku"
                    label="Sku"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    source="attributes.manufacturer"
                    options={{ fullWidth: true }}
                    validate={required()}
                    label="Manufacturer"
                />
                <NumberInput
                    source="attributes.quantity"
                    label="Quantity"
                    options={{ fullWidth: true }}
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                    validate={required()}
                />
            </FormTab>
        </TabbedForm>
    </Create>
);

export default withStyles(styles)(ProductCreate);
