import CustomInput from "@/components/CustomInput.component";

export const PasswordInput = () => {

    return (
        <CustomInput
            placeholder="Enter your password here"
            label={"Password"}
            name={"password"}
            type={"password"}
        />
    );
}