import { useEffect, useState } from 'react';
import { ButtonBack } from '../../utils/util';
import { CustomButton } from '../global/button';
import { FormInput } from '../global/formInput';
import { Box, ButtonBox, InputBox, Wrapper } from '../global/style';
import { Client, User } from '../../Interfaces';
import { createContact, getClients, getUsers } from '../../services';
import { alerts } from '../../utils/alert';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [title, setTitle] = useState('');
    const [clientId, setClientId] = useState({});
    const [responsibleUserId, setResponsibleUserId] = useState({});

    const [users, setUsers] = useState<User[]>([]);
    const [clients, setClients] = useState<Client[]>([]);

    const isDisabled = () => {
        return !name;
    };

    const CreateContact = useMutation(createContact, {
        onSuccess: () => {
            alerts.success('Success', 'Contact Created');
            navigate('/contact');
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Signup Failed', error);
        },
    });
    const onSubmit = async () => {
        const payload = {
            data: {
                name,
                email: email,
                phone: phone,
                role: role,
                title: title,
                clientId: clientId.value,
                responsibleUserId: responsibleUserId.value,
            },
        };
        await CreateContact.mutate(payload);
    };

    useEffect(() => {
        fetchUsersAndClients();
    }, []);
    const fetchUsersAndClients = async () => {
        try {
            const users = await getUsers({ pageLimit: 100 });
            setUsers(users.users);
            const clients = await getClients({ pageLimit: 100 });
            setClients(clients.clients);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Box>
                <ButtonBack />
                <h1 className="heading">Contact</h1>
                <p className="sub-text">
                    Fill the form below as clearly as possible to create a new
                    contact
                </p>
            </Box>
            <InputBox>
                <FormInput
                    label="Name  *"
                    index="1"
                    type="text"
                    value={name}
                    className="left"
                    stateHandler={setName}
                    holder="e.g Peter Example"
                />
                <FormInput
                    label="Title  *"
                    index="2"
                    type="text"
                    value={title}
                    stateHandler={setTitle}
                    holder="e.g Mr"
                />
            </InputBox>
            <InputBox>
                <FormInput
                    label="Client"
                    index="3"
                    type="select"
                    value={clientId}
                    className="left"
                    selectOptions={clients.map((client) => {
                        return {
                            label: client.name,
                            value: client.clientId,
                        };
                    })}
                    stateHandler={setClientId}
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
                    holder="e.g +234701122334455"
                />
                <FormInput
                    label="Role"
                    index="6"
                    type="text"
                    value={role}
                    stateHandler={setRole}
                    holder="e.g Managing Director"
                />
            </InputBox>

            <InputBox>
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

export default CreateContact;
