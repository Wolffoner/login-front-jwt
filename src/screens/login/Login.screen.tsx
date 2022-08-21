import CustomButton from "@/components/CustomButton.component";
import LoginContext from "@/context/Login.context";
import { ServerUser } from "@/models";
import { PrivateRoutes } from "@/routes/enums/UserRoutes.enum";
import authService from "@/services/auth.service";
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from "@mui/material";
import { useContext } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EmailInput, PasswordInput } from "./components";
import loginValidation from './validations/Login.validation';

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

const LoginView = () => {

    const navigate = useNavigate();
    const { handleLogin } = useContext(LoginContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset
    } = useForm({
        resolver: yupResolver(loginValidation),
        mode: 'all'
    });


    const onSubmit = async (data: FieldValues) => {
        try {
            const result = await authService.login(data as ServerUser);
            //TODO: type result
            //@ts-ignore
            handleLogin({ token: result.data.jwt });
            localStorage.setItem('token', result.data.jwt);
            navigate(PrivateRoutes.USER_INFO);
            reset();
        } catch (error) {
            console.log(error);
        }
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

export default LoginView;