import { Box } from "@mui/material";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "./components";
import CustomButton from "@/components/CustomButton.component";
import { yupResolver } from '@hookform/resolvers/yup';
import loginValidation from './validations/Login.validation'

const styles = {
    container: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: 'cover'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 0, top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: { xs: '100%', sm: '80%', md: '60%', lg: '40%', xl: "20%" },
        height: '100%',
        gap: '1rem'
    }
}

export const LoginView = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset
    } = useForm({
        resolver: yupResolver(loginValidation),
        mode: 'all'
    });


    const onSubmit = async (data: any) => {
        const result = await Promise.resolve(data);
        console.log(result);
        reset();
    };

    return (
        <Box sx={styles.container}>
            <FormProvider  {...{ register, errors } as any}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={styles.formContainer}>
                        <EmailInput />
                        <PasswordInput />
                        <CustomButton isDirty={isDirty} isValid={isValid} type="submit" children="Login" />
                    </Box>
                </form>
            </FormProvider>
        </Box >
    )
}