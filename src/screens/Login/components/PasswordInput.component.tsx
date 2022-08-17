import CustomInput from "@/components/CustomInput.component";
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    register: UseFormRegister<FieldValues>,
    errors: FieldErrorsImpl<DeepRequired<FieldValues>>,
}

export const PasswordInput = (props: Props) => {

    const { register, errors } = props;

    return (
        <CustomInput
            placeholder="Enter your password here"
            label={"Password"}
            name={"password"}
            type={"password"}
            register={register}
            errors={errors}
        />
    );
}