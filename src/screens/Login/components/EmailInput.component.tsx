import CustomInput from "@/components/CustomInput.component";



export const EmailInput = () => {

    return (
        <CustomInput
            placeholder="Enter your email here"
            label={"Email"}
            name={"email"}
            type={"text"}
        />
    );
}