import React, { useEffect, useState } from 'react';
import { Wrapper, LogoBox, ContentBox, Form, SubText } from './style';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Logo from '../../assets/hotelspaddie-green.png';
import { useMutation } from 'react-query';
import { useLocalStorage } from 'react-use';
import { useAuth } from '../../providers/AuthProvider';
import { alerts } from '../../utils/alert';
import { FormInput } from '../global/formInput';
import { LoginButton } from '../global/button';
import { acceptInvite, getInvite } from '../../services';
import { Gender } from '../../Interfaces/Enums';

const AcceptInvite = () => {
    const location = useLocation();
    const { id }: any = useParams();
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const [user, setUser] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState<{
        value: Gender;
    } | null>(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useLocalStorage<any>('token');

    useEffect(() => {
        GetInvite.mutate(id);
    }, []);

    const AcceptInvite = useMutation(acceptInvite, {
        onSuccess: (data) => {
            if (data.accessToken) {
                setToken(data.accessToken);
                setAuth({ access_token: 'true' });
                alerts.success('SignUp Success', 'Sign up successful');
                // window.location.replace("/dashboard");
                navigate('/dashboard');
            } else {
                alerts.success('Signup Success', data.message);
                navigate(`/auth/verify-email/${email}`);
            }
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Signup Failed', error);
        },
    });

    const GetInvite = useMutation(getInvite, {
        onSuccess: (data) => {
            setEmail(data.invite.email);
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Error', error, 30000);
        },
    });

    const onSubmit = () => {
        if (firstName.length < 2 || lastName.length < 2) {
            alerts.error('Error', 'Full Name must contain at least 2 letters.');
            return;
        }
        if (!gender) {
            alerts.error('Error', 'You must select a gender');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alerts.error('Error', 'Invalid email address.');
            return;
        }

        if (password.length < 6) {
            alerts.error(
                'Error',
                'Password must contain at least 6 characters.',
            );
            return;
        }
        setLoading(true);
        console.log(gender);
        AcceptInvite.mutate({
            inviteId: id,
            payload: {
                firstName,
                gender: gender.value,
                lastName,
                password,
            },
        });
    };
    return (
        <Wrapper>
            <LogoBox>
                <img src={Logo} alt="logo" />
            </LogoBox>
            <ContentBox>
                <div className="box">
                    <h1 className="text">Let’s get you started</h1>
                    <p className="sub-text">
                        You have been invited to join HotelsPaddie CRM Tool
                    </p>
                </div>
                <Form>
                    <div>
                        <span>Email: {email}</span>
                    </div>
                    <FormInput
                        label="First Name"
                        disabled={!email}
                        type="text"
                        value={firstName}
                        stateHandler={setFirstName}
                        holder="e.g Peter Pan"
                    />
                    <FormInput
                        label="Last Name"
                        disabled={!email}
                        type="text"
                        value={lastName}
                        stateHandler={setLastName}
                        holder="e.g Peter Pan"
                    />
                    <FormInput
                        label="Gender"
                        type="select"
                        disabled={!email}
                        selectOptions={[
                            {
                                label: 'Male',
                                value: Gender.Male,
                            },
                            {
                                label: 'Female',
                                value: Gender.Female,
                            },
                        ]}
                        value={gender}
                        stateHandler={setGender}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        disabled={!email}
                        value={password}
                        stateHandler={setPassword}
                        holder="*********"
                    />
                    <FormInput
                        label="Confirm Password"
                        disabled={!email}
                        type="password"
                        value={confirmPassword}
                        stateHandler={setConfirmPassword}
                        holder="*********"
                    />
                </Form>
                <div className="buttons">
                    <LoginButton
                        onClick={onSubmit}
                        disabled={
                            !password ||
                            !email ||
                            !firstName ||
                            !lastName ||
                            password !== confirmPassword ||
                            !email
                        }
                        loading={loading}
                    >
                        Accept and Register
                    </LoginButton>

                    <SubText>
                        Already have an account?{' '}
                        <Link to="/auth/login">
                            <span className="span"> Log in</span>
                        </Link>
                    </SubText>
                </div>
            </ContentBox>
        </Wrapper>
    );
};

export default AcceptInvite;
