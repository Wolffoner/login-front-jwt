import { Button } from '@mui/material';
import React from 'react';

interface Props {
    isDirty?: boolean;
    isValid?: boolean;
    children: React.ReactNode;
    type: 'submit' | 'reset' | 'button';
    customStyles?: React.CSSProperties;
}

const styles = {
    button: {
        margin: '2%',
    }
}

const CustomButton = (props: Props) => {

    const { isDirty = false, isValid = false, children, type } = props;

    return (
        <Button sx={styles.button} type={type} variant="contained" disabled={!isDirty || !isValid}>
            {children}
        </Button>
    );
};

export default CustomButton;