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
                    source="attributes.name"
                    label="Name"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    source="attributes.description"
                    options={{ fullWidth: true }}
                    validate={required()}
                    label="Description"
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
    </Create>
);

export default withStyles(styles)(ProductCreate);
