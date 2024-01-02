import {
    EmailLabel,
    EnterBtn,
    ErrText,
    Form,
    Input,
    LabelText,
    PasLabel,
    Span,
} from './SignInForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';
import notification from '../../helpers/notification';
const { errorNotification } = notification;

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async data => {
        dispatch(signIn(data)).then(r => {
            if (r.type === 'auth/signin/rejected') {
                errorNotification('Wrong email address or password!');
            }
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <EmailLabel>
                    <LabelText>
                        Email address<Span>*</Span>
                    </LabelText>
                    <Input
                        variant="shadow"
                        type="email"
                        placeholder="your@email.com"
                        autoFocus="on"
                        name="email"
                        {...register('email', {
                            required: 'Please, fill out email address field.',
                            pattern: {
                                value: /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                message:
                                    'The provided email address is incorrect',
                            },
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                        <ErrText role="alert">{errors.email?.message}</ErrText>
                    )}
                </EmailLabel>

                <PasLabel>
                    <LabelText>
                        Password<Span>*</Span>
                    </LabelText>
                    <Input
                        variant="shadow"
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password field cannot be empty',
                            },
                            pattern: {
                                value: /^([A-Za-z]|[0-9])+$/,
                                message:
                                    'Password needs to include both letters and numbers',
                            },
                            minLength: {
                                value: 6,
                                message:
                                    'Password length should at least have 6 symbols',
                            },
                        })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password && (
                        <ErrText role="alert">
                            {errors.password?.message}
                        </ErrText>
                    )}
                </PasLabel>

                <EnterBtn variant="accent" onClick={handleSubmit(onSubmit)}>
                    Sign in
                </EnterBtn>
            </Form>
        </>
    );
};

export default SignInForm;
