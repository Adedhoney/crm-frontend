import { useEffect, useState } from 'react';
import { ButtonBack } from '../../utils/util';
import { CustomButton } from '../global/button';
import { FormInput } from '../global/formInput';
import { Box, ButtonBox, InputBox, Wrapper } from '../global/style';
import { ClientType, User } from '../../Interfaces';
import { createClient, getUsers } from '../../services';
import { alerts } from '../../utils/alert';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const CreateClient = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [type, setType] = useState<{ label: string; value: string }>({
        label: '',
        value: '',
    });
    const [loading, setLoading] = useState(false);
    const [industry, setIndustry] = useState('');
    const [email, setEmail] = useState('');
    const [files, setFiles] = useState([]);
    const [phone, setPhone] = useState('');
    const [bankingDetails, setBankingDetails] = useState('');
    const [responsibleUserId, setResponsibleUserId] = useState({});

    const [users, setUsers] = useState<User[]>([]);

    const isDisabled = () => {
        return !name || !industry || !type;
    };

    const CreateClient = useMutation(createClient, {
        onSuccess: () => {
            alerts.success('Success', 'Client Created');
            // window.location.replace("/dashboard");
            navigate('/client');
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Signup Failed', error);
        },
    });
    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append(
            'data',
            JSON.stringify({
                name,
                type: type.value,
                industry: industry || undefined,
                email: email || undefined,
                phone: phone || undefined,
                bankingDetails: bankingDetails || undefined,
                responsibleUserId: responsibleUserId.value || undefined,
            }),
        );
        await CreateClient.mutate(formData);
    };

    const onChangeFile = (e) => {
        setFiles(e.target.files);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {
            const response = await getUsers({ pageLimit: 100 });
            setUsers(response.users);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Box>
                <ButtonBack />
                <h1 className="heading">Client</h1>
                <p className="sub-text">
                    Fill the form below as clearly as possible to create a new
                    client
                </p>
            </Box>
            <InputBox>
                <FormInput
                    label="CLient Name  *"
                    index="1"
                    type="text"
                    value={name}
                    className="left"
                    stateHandler={setName}
                    holder="e.g Peter"
                />
                <FormInput
                    label="Industry  *"
                    index="2"
                    type="text"
                    value={industry}
                    stateHandler={setIndustry}
                    holder="e.g Hospitality"
                />
            </InputBox>
            <InputBox>
                <FormInput
                    label="Client Type  *"
                    index="3"
                    type="select"
                    selectOptions={[
                        {
                            label: 'Client',
                            value: ClientType.Client,
                        },
                        {
                            label: 'Other',
                            value: ClientType.Other,
                        },
                        {
                            label: 'Prospect',
                            value: ClientType.Prospect,
                        },
                    ]}
                    value={type}
                    stateHandler={setType}
                    className="left"
                />
                <FormInput
                    label="Email"
                    index="4"
                    type="email"
                    value={email}
                    stateHandler={setEmail}
                    holder="e.g text@example.this"
                />
            </InputBox>

            <InputBox>
                <FormInput
                    label="Phone"
                    index="5"
                    type="tel"
                    value={phone}
                    stateHandler={setPhone}
                    className="left"
                    holder="e.g 3 years"
                />
                <FormInput
                    label="Responsible User"
                    index="7"
                    type="select"
                    value={responsibleUserId}
                    selectOptions={users.map((user) => {
                        return {
                            label: `${user.firstName} ${user.lastName}`,
                            value: user.userId,
                        };
                    })}
                    stateHandler={setResponsibleUserId}
                    holder="e.g Product Designer"
                />
            </InputBox>
            <InputBox>
                <FormInput
                    label="Banking Details"
                    index="6"
                    type="textarea"
                    value={bankingDetails}
                    stateHandler={setBankingDetails}
                    className="left"
                />
                <FormInput
                    label="Client image or logo"
                    type="file"
                    index="7"
                    changeEventHandler={onChangeFile}
                />
            </InputBox>
            <ButtonBox>
                <CustomButton
                    disabled={isDisabled()}
                    onClick={onSubmit}
                    loading={loading}
                >
                    Create Client
                </CustomButton>
            </ButtonBox>
        </Wrapper>
    );
};

export default CreateClient;
