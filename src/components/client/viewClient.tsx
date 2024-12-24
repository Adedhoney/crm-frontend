import React, { useEffect, useState, useRef } from 'react';
import { ButtonBack } from '../../utils/util';
import { CustomButton, EditButton } from '../global/button';
import { FormInput } from '../global/formInput';
import {
    ButtonBox,
    ImageBox,
    InfoDiv,
    InputBox,
    LogoImage,
    SpinnerContainer,
    ViewBox,
    Wrapper,
} from '../global/style';
import { Client, ClientType, User } from '../../Interfaces';
import {
    getClientById,
    getUsers,
    updateClient,
    updateClientImage,
} from '../../services';
import { alerts } from '../../utils/alert';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import Circle from '../../assets/svg/circle.svg';
import Spinner from '../global/pageLoader';
import { OnChangeValue } from 'react-select';

const ViewUpdateClient = () => {
    const navigate = useNavigate();
    const [client, setClient] = useState<Client>({});
    const [update, setUpdate] = useState(false);
    const { id }: any = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState({ label: '', value: '' });
    const [loading, setLoading] = useState(false);
    const [industry, setIndustry] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState([]);
    const [phone, setPhone] = useState('');
    const [bankingDetails, setBankingDetails] = useState('');
    const [responsibleUserId, setResponsibleUserId] = useState({
        label: '',
        value: '',
    });

    const [users, setUsers] = useState<User[]>([]);

    const isDisabled = () => {
        return (
            (name == client.name &&
                industry == client.industry &&
                email == client.email &&
                phone == client.phone &&
                bankingDetails == client.bankingDetails &&
                responsibleUserId.value == client.responsibleUserId &&
                type.value == client.type) ||
            !name ||
            !type.value ||
            !industry
        );
    };

    const fileInputRef = useRef(null);
    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);
        UpdateClientImage.mutate({ payload: formData, clientId: id });
    };
    const handleButtonClick = () => {
        fileInputRef.current!.click();
    };

    const toggleUpdate = () => {
        setUpdate(!update);
        setName(client.name);
        setType({
            label:
                (client.type === ClientType.Client && 'Client') ||
                (client.type === ClientType.Other && 'Other') ||
                (client.type === ClientType.Prospect && 'Prospect'),
            value: client.type,
        });
        setIndustry(client.industry);
        setEmail(client.email);
        setPhone(client.phone);
        setBankingDetails(client.bankingDetails);
        setResponsibleUserId({
            label: `${client.responsibleUser.firstName} ${client.responsibleUser.lastName}`,
            value: client.responsibleUserId!,
        });
    };

    useEffect(() => {
        setLoading(true);
        GetClient.mutate(id);
    }, []);
    console.log(client);

    const GetClient = useMutation(getClientById, {
        onSuccess: (data) => {
            data = data.client;

            setLoading(false);
            setClient(data);
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Signup Failed', error);
        },
    });

    const UpdateClient = useMutation(updateClient, {
        onSuccess: (data) => {
            alerts.success('Success', 'Client Updated');
            toggleUpdate();
            setLoading(false);
            GetClient.mutate(id);
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Update Failed', error);
        },
    });

    const UpdateClientImage = useMutation(updateClientImage, {
        onSuccess: (data) => {
            alerts.success('Success', 'Client Updated');
            toggleUpdate();
            setLoading(false);
            GetClient.mutate(id);
        },
        onError: (error: any) => {
            setLoading(false);
            alerts.error('Update Failed', error);
        },
    });
    const onSubmit = async () => {
        setLoading(true);
        const payload = {
            data: {
                name,
                type: type.value,
                industry,
                email,
                phone: phone,
                bankingDetails,
                responsibleUserId: responsibleUserId.value,
            },
        };

        await UpdateClient.mutate({ payload, clientId: id });
    };

    const onChangeFile = (e: any) => {
        setFile(e.target.files);
    };

    useEffect(() => {
        console.log(file);
    }, [file]);

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
            {loading ? (
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            ) : (
                <>
                    <ViewBox>
                        <ButtonBack />
                        <EditButton onClick={toggleUpdate}>
                            {update ? 'Discard' : 'Edit'}
                        </EditButton>
                    </ViewBox>
                    {!update ? (
                        <>
                            <ViewBox>
                                <ImageBox>
                                    <LogoImage
                                        src={client.logoUrl || Circle}
                                        alt=""
                                    />
                                </ImageBox>
                            </ViewBox>
                            <ViewBox>
                                <InfoDiv>
                                    <span>Client Name</span>
                                    <p>{client.name}</p>
                                </InfoDiv>
                                <InfoDiv>
                                    <span>Industry</span>
                                    <p>{client.industry}</p>
                                </InfoDiv>
                                <InfoDiv>
                                    <span>Client Type</span>
                                    <p>
                                        {(client.type === ClientType.Client &&
                                            'Client') ||
                                            (client.type === ClientType.Other &&
                                                'Other') ||
                                            (client.type ===
                                                ClientType.Prospect &&
                                                'Prospect')}
                                    </p>
                                </InfoDiv>
                            </ViewBox>
                            <ViewBox>
                                <InfoDiv>
                                    <span>Email</span>
                                    <p>{client.email}</p>
                                </InfoDiv>
                                <InfoDiv>
                                    <span>Phone</span>
                                    <p>{client.phone}</p>
                                </InfoDiv>
                                <InfoDiv>
                                    <span>Responsible User</span>
                                    <p>
                                        {`${client?.responsibleUser?.firstName} ${client?.responsibleUser?.lastName}`}
                                    </p>
                                </InfoDiv>
                            </ViewBox>
                            <ViewBox>
                                <InfoDiv>
                                    <span>Bank Details</span>
                                    <p>{client.bankingDetails}</p>
                                </InfoDiv>
                            </ViewBox>
                        </>
                    ) : (
                        <>
                            <InputBox>
                                <ImageBox
                                    onClick={handleButtonClick}
                                    className="edit-image"
                                >
                                    <LogoImage
                                        src={client.logoUrl || Circle}
                                        alt=""
                                    />
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }} // Hide the file input
                                    />
                                    <p>Click to replace image</p>
                                </ImageBox>
                            </InputBox>
                            <InputBox>
                                <FormInput
                                    label="Client Name  *"
                                    index="1"
                                    type="text"
                                    value={name}
                                    className="left"
                                    stateHandler={setName}
                                    holder="e.g Peter"
                                />
                                <FormInput
                                    label="Industry  *"
                                    index="3"
                                    type="text"
                                    value={industry}
                                    className="left"
                                    stateHandler={setIndustry}
                                    holder="e.g Hospitality"
                                />
                                <FormInput
                                    label="Client Type  *"
                                    index="2"
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
                                />
                            </InputBox>
                            <InputBox>
                                <FormInput
                                    label="Email"
                                    index="4"
                                    type="email"
                                    value={email}
                                    stateHandler={setEmail}
                                    holder="e.g text@example.this"
                                    className="left"
                                />
                                <FormInput
                                    label="Phone"
                                    index="5"
                                    type="tel"
                                    value={phone}
                                    stateHandler={setPhone}
                                    className="right"
                                    holder="e.g 3 years"
                                />
                                <FormInput
                                    label="Responsible User"
                                    index="7"
                                    type="select"
                                    value={responsibleUserId}
                                    className="right"
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
                            </InputBox>
                            <ButtonBox>
                                <CustomButton
                                    disabled={isDisabled()}
                                    onClick={onSubmit}
                                    loading={loading}
                                >
                                    Update Client
                                </CustomButton>
                            </ButtonBox>
                        </>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default ViewUpdateClient;
