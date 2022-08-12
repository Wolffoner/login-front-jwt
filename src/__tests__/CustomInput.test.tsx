import CustomInput from '../components/CustomInput.component';
import { screen, render } from '@testing-library/react';

describe("CustomInput", () => {

    beforeEach(() => {
        render(<CustomInput label={'Email'} name={''} type={'text'} value={''} onChange={(e) => { }} />);
    });

    test("should render", async () => {
        const input = screen.getByRole('textbox', { name: '' });
        expect(input).toBeInTheDocument();
    });

    test("should render error message", async () => {
        const errors = {
            email: {
                message: 'Email is required'
            }
        };
        render(<CustomInput label={'Email'} name={'email'} type={'text'} value={''} onChange={(e) => { }} errors={errors} />);
        const error = screen.getByText('Email is required');
        expect(error).toBeInTheDocument();
    });

})