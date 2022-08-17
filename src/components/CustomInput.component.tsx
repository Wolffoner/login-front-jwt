import { Container, TextField, Typography } from "@mui/material"
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";

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
    register: UseFormRegister<FieldValues>;
    placeholder?: string;
    errors: FieldErrorsImpl<DeepRequired<FieldValues>>,
    disabled?: boolean;
}

const CustomInput = (props: Props): JSX.Element => {

    const { label, type, register, errors, name, placeholder = '', disabled = false } = props;

    return (
        <Container fixed>
            <TextField
                id={name}
                label={label}
                type={type}
                //@ts-ignore
                errors={errors[name]}
                placeholder={placeholder}
                variant="outlined"
                required
                fullWidth
                {...register(name)}
                disabled={disabled}
            />
            {errors && formValidation(errors!, name)}
        </Container>
    )
}

export default CustomInput;
