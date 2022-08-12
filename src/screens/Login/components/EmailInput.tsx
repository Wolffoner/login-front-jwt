import CustomInput from "@/components/CustomInput.component";

interface Props {
    register?: any,
    errors?: any,
}

export const EmailInput = (props: Props) => {

    const { register, errors } = props;

    return (
        <CustomInput
            placeholder="Enter your email here"
            label={"Email"}
            name={"email"}
            type={"text"}
            value={""}
            onChange={(e) => { }} />
    );
}