import CustomInput from "@/components/CustomInput.component";

interface Props {
    register?: any,
    errors?: any,
}

export const PasswordInput = (props: Props) => {

    const { register, errors } = props;

    return (
        <CustomInput
            placeholder="Enter your password here"
            label={"Password"}
            name={"password"}
            type={"password"}
            value={""}
            onChange={(e) => { }} />
    );
}