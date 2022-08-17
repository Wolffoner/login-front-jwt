import { ServerUser, serverUserEmpty } from "@/models";
import { Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "./components";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

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

// TODO: Move to validation schema
const schema = yup
    .object({
        email: yup
            .string()
            .required('Email is required')
            .min(3, 'Email must be greater than 2 characters')
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Email is invalid, please enter a valid email'
            ),
        password: yup
            .string()
            .required('Password is required')
            .max(12, 'Password must be at least 6 characters')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Password must be alphanumeric, contains min 1 uppercase letter, 1 special character and have at least 6 characters.'
            )
    })
    .required();

export const LoginView = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    return (
        <Box sx={styles.container}>
            <form>
                <Box sx={styles.formContainer}>
                    <EmailInput register={register} errors={errors} />
                    <PasswordInput register={register} errors={errors} />
                    <button>{"sign in"}</button>
                </Box>
            </form>
        </Box >
    )
}