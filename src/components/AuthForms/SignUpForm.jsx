import {
    Button,
    Container,
    DesktopBox,
    EnterBtn,
    ErrText,
    Form,
    GoogleIcon,
    Input,
    Label,
    LabelText,
    Link,
    LinkBox,
    LinkSpan,
    MobBox,
    PasLabel,
    Span,
    TabletBox,
} from './SignUpForm.styled';
import googleIcon from '../../images/svg/google-icon.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operations';
import { baseUrl } from '../../API';

const signUpUrl = `${baseUrl}auth/google`;

const SignUpForm = () => {
    const [checkPas, setCheckPas] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const isPassMatch = (Pas, confirmPas) => {
        if (Pas !== confirmPas) {
            setCheckPas(false);
            return false;
        }
        setCheckPas(true);
        return true;
    };

    const onSubmit = data => {
        const { password, confirmPas, name, email } = data;

        if (!isPassMatch(password, confirmPas)) return;

        const signUpData = { name, email, password };

        dispatch(signUp(signUpData));
    };

    return (
        <>
            <Container>
                <DesktopBox>
                    <TabletBox>
                        <MobBox>
                            <Button href={signUpUrl}>
                                <GoogleIcon>
                                    <img
                                        src={googleIcon}
                                        alt="google"
                                        width="18px"
                                        height="18px"
                                    />
                                </GoogleIcon>
                                Google
                            </Button>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Label>
                                    <LabelText>
                                        Ім’я<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="text"
                                        placeholder="..."
                                        autoFocus="on"
                                        name="name"
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message:
                                                    'Поле Ім’я обов’язкове',
                                            },

                                            minLength: {
                                                value: 3,
                                                message:
                                                    'Ім’я повинно бути більше трьох символів',
                                            },

                                            pattern: {
                                                value: /[А-Яа-я0-9a-zA-Z][^\W]/,
                                                message:
                                                    'Ім’я повинно складатися тільки з букв та цифр',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.name ? 'true' : 'false'
                                        }
                                    />

                                    {errors.name && (
                                        <ErrText role="alert">
                                            {errors.name?.message}
                                        </ErrText>
                                    )}
                                </Label>

                                <Label>
                                    <LabelText>
                                        Email adress<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="email"
                                        placeholder="your@email.com"
                                        name="email"
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Введіть Ваш email',
                                            },
                                            pattern: {
                                                value: /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                                message:
                                                    'Введіть корректну єлектронну адресу ',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.email ? 'true' : 'false'
                                        }
                                    />
                                    {errors.email && (
                                        <ErrText role="alert">
                                            {errors.email?.message}
                                        </ErrText>
                                    )}
                                </Label>

                                <PasLabel>
                                    <LabelText>
                                        Password<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                        name="password"
                                        {...register('password', {
                                            required:
                                                'The password field is required',
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
                                        aria-invalid={
                                            errors.password ? 'true' : 'false'
                                        }
                                    />
                                    {errors.password && (
                                        <ErrText role="alert">
                                            {errors.password?.message}
                                        </ErrText>
                                    )}
                                </PasLabel>

                                <PasLabel>
                                    <LabelText>
                                        Confirm the password<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                        name="confirmPas"
                                        {...register('confirmPas', {
                                            required: true,
                                        })}
                                        aria-invalid={
                                            errors.confirmPas ? 'true' : 'false'
                                        }
                                    />
                                    {!checkPas && (
                                        <ErrText role="alert">
                                            Passwords don't match
                                        </ErrText>
                                    )}
                                </PasLabel>

                                <EnterBtn
                                    variant="accent"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Sign up
                                </EnterBtn>
                            </Form>

                            <LinkBox>
                                <LinkSpan>Already have an account?</LinkSpan>{' '}
                                <Link to={'/signin'}>Sign in</Link>
                            </LinkBox>
                        </MobBox>
                    </TabletBox>
                </DesktopBox>
            </Container>
        </>
    );
};

export default SignUpForm;
