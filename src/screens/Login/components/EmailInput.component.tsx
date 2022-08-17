import CustomInput from "@/components/CustomInput.component";
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    register: UseFormRegister<FieldValues>,
    errors: FieldErrorsImpl<DeepRequired<FieldValues>>,
}

export const EmailInput = (props: Props) => {

    const { register, errors } = props;

    return (
        <CustomInput
            placeholder="Enter your email here"
            label={"Email"}
            name={"email"}
            type={"text"}
            register={register}
            errors={errors}
        />
    );
}