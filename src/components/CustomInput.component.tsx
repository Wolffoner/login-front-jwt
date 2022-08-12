import { Container, TextField, Typography } from "@mui/material"

const formValidation = (errors: any, errorKey: string): JSX.Element => {
    return errors[errorKey] ? (
        <Typography color='red'>{errors[errorKey].message}</Typography>
    ) : (
        <></>
    );
};

interface Props {
    label: string;
    name: string;
    type: "text" | "password";
    value: string;
    placeholder?: string;
    errors?: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: Props): JSX.Element => {

    const { label, type, value, onChange, errors, name, placeholder = '' } = props;

    return (
        <Container fixed>
            <TextField
                id={name}
                label={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                variant="outlined"
                required
                fullWidth
            />
            {errors && formValidation(errors!, name)}
        </Container>
    )
}

export default CustomInput;
