import { Container, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

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
    placeholder?: string;
    disabled?: boolean;
}

const CustomInput = (props: Props): JSX.Element => {

    const { label, type, name, placeholder = '', disabled = false } = props;

    //@ts-ignore
    const { register, errors } = useFormContext();

    return (
        <Container fixed>
            <TextField
                id={name}
                label={label}
                type={type}
                //@ts-ignore
                errors={errors && errors[name]}
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
