import React, { useEffect, useState } from 'react';
import { ClientType, Client as IClient } from '../../Interfaces';
import { useMedia } from 'react-use';
import { useAuth } from '../../providers/AuthProvider';
import { EmptyFolder, leftImage, rightImage } from '../../assets';
import Circle from '../../assets/svg/circle.svg';

import { format, parseISO } from 'date-fns';
import { Pagination, PaginationProps } from 'antd';
import { getClients } from '../../services';
import {
    Box,
    ButtonBox,
    ClientPagination,
    ClientTable,
    ClientTitle,
    EmptyContainer,
    Heading,
    ListLogo,
    SpinnerContainer,
    Wrapper,
} from '../global/style';
import { Link } from 'react-router-dom';
import { CustomButton, LandingEditButton } from '../global/button';
import Spinner from '../global/pageLoader';

const Client = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState({
        totalPages: null,
        page: 1,
        prevPage: null,
        nextPage: null,
        limit: 10,
        returnedData: 0,
        totalData: 0,
    });
    const [clients, setClients] = useState<IClient[]>([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const isSmallScreen = useMedia('(max-width: 576px)', true);
    const pageStart = (pageData.page - 1) * pageData.limit + 1;
    const pageEnd = pageStart + pageData.returnedData - 1;
    const { userDetails, userToken } = useAuth();
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
        current,
        pageSize,
    ) => {
        console.log(current, pageSize);
    };
    const itemRender: PaginationProps['itemRender'] = (
        _,
        type,
        originalElement,
    ) => {
        if (!isSmallScreen) {
            if (type === 'prev') {
                return (
                    <div className="arrow">
                        <img src={leftImage} alt="arrow" />
                    </div>
                );
            }
            if (type === 'next') {
                return (
                    <div className="arrow">
                        <img src={rightImage} alt="arrow" />
                    </div>
                );
            }
        }
        return originalElement;
    };
    useEffect(() => {
        setShow(true);
        setLoading(true);
        fetchClients();
    }, [currentPage]);
    const fetchClients = async () => {
        try {
            const data = await getClients({});
            setClients(data.clients || []);
            setPageData({
                totalPages: data.totalPages,
                page: data.page,
                prevPage: data.prevPage,
                nextPage: data.nextPage,
                limit: data.limit,
                returnedData: data.returnedData,
                totalData: data.totalData,
            });
            setLoading(false);
            setShow(true);
        } catch (error) {
            setLoading(false);
        }
    };
    const pageSize = 10; // Number of items per page
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <Wrapper>
            <Heading>
                {(loading || (clients.length > 0 && clients.length > 0)) && (
                    <Link className="button-to" to={'/client/create'}>
                        <ButtonBox>
                            <CustomButton disabled={false} loading={loading}>
                                Add new client
                            </CustomButton>
                        </ButtonBox>
                    </Link>
                )}
            </Heading>
            {loading ? (
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            ) : (
                <>
                    {show && clients && clients.length > 0 && (
                        <>
                            <ClientTitle>
                                <h1>Overview</h1>
                                <div className="tag">
                                    <p>
                                        Showing {pageStart} - {pageEnd} of{' '}
                                        {clients.length}
                                    </p>
                                </div>
                            </ClientTitle>
                            <ClientTable>
                                <div className="table_header">
                                    <div className="table_heading index">
                                        <p>S/N</p>
                                    </div>
                                    <div className="table_heading name">
                                        <p>Company</p>
                                    </div>
                                    <div className="table_heading role">
                                        <p>Company type</p>
                                    </div>
                                    <div className="table_heading date">
                                        <p>Last updated on</p>
                                    </div>
                                    <div className="table_heading name">
                                        <p>Responsible</p>
                                    </div>
                                    <div className="table_heading name">
                                        <p>Created by</p>
                                    </div>
                                    <div className="table_heading date">
                                        <p>Date created</p>
                                    </div>
                                    <div className="table_heading name">
                                        <p>Modified by</p>
                                    </div>
                                    <div className="table_heading name">
                                        <p>Banking Details</p>
                                    </div>
                                    <div className="table_heading view"></div>
                                </div>
                                {clients &&
                                    clients.map(
                                        (item: IClient, index: number) => (
                                            <div
                                                className="table_desc"
                                                key={index}
                                            >
                                                <div className="table_heading index">
                                                    <p>{index + 1}</p>
                                                </div>
                                                <div className="table_heading name">
                                                    <ListLogo
                                                        src={
                                                            item.logoUrl ||
                                                            Circle
                                                        }
                                                        alt="Logo"
                                                    />
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className="table_heading role">
                                                    <p>
                                                        {(item.type ===
                                                            ClientType.Client &&
                                                            'Client') ||
                                                            (item.type ===
                                                                ClientType.Prospect &&
                                                                'Prospect') ||
                                                            (item.type ===
                                                                ClientType.Other &&
                                                                'Other')}
                                                    </p>
                                                </div>
                                                <div className="table_heading date">
                                                    <p>
                                                        {format(
                                                            new Date(
                                                                Number(
                                                                    item.lastModifiedOn,
                                                                ) * 1000,
                                                            ),
                                                            'd MMM, yyyy',
                                                        )}
                                                    </p>
                                                </div>

                                                <div className="table_heading name">
                                                    <p>
                                                        {item.responsibleUser
                                                            ? `${item.responsibleUser.firstName} ${item.responsibleUser.lastName}`
                                                            : ''}
                                                    </p>
                                                </div>
                                                <div className="table_heading name">
                                                    <p>
                                                        {item.creator
                                                            ? `${item.creator.firstName} ${item.creator.lastName}`
                                                            : ''}
                                                    </p>
                                                </div>

                                                <div className="table_heading date">
                                                    <p>
                                                        {format(
                                                            new Date(
                                                                Number(
                                                                    item.createdOn,
                                                                ) * 1000,
                                                            ),
                                                            'd MMM, yyyy',
                                                        )}
                                                    </p>
                                                </div>

                                                <div className="table_heading name">
                                                    <p>
                                                        {item.modifier
                                                            ? `${item.modifier.firstName} ${item.modifier.lastName}`
                                                            : ''}
                                                    </p>
                                                </div>

                                                <div className="table_heading name">
                                                    <p>{item.bankingDetails}</p>
                                                </div>
                                                <div className="table_heading view">
                                                    <Link
                                                        to={`/client/${item.clientId}`}
                                                    >
                                                        <LandingEditButton className="view">
                                                            View
                                                        </LandingEditButton>
                                                    </Link>
                                                </div>
                                            </div>
                                        ),
                                    )}
                            </ClientTable>
                            <ClientPagination>
                                <Pagination
                                    showSizeChanger
                                    onShowSizeChange={onShowSizeChange}
                                    defaultCurrent={2}
                                    total={clients.length}
                                    itemRender={itemRender}
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    current={currentPage}
                                    pageSize={pageSize}
                                    onChange={onPageChange}
                                />
                            </ClientPagination>
                        </>
                    )}
                    {show && clients && clients.length === 0 && (
                        <EmptyContainer>
                            <img src={EmptyFolder} alt="data" />
                            <h1>You have no clients - yet</h1>
                            <p>
                                All your clients will be available here when you
                                add them.
                            </p>
                            <Link to={'/dashboard/client/create'}>
                                <ButtonBox>
                                    <CustomButton disabled={false}>
                                        Create New Client
                                    </CustomButton>
                                </ButtonBox>
                            </Link>
                        </EmptyContainer>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default Client;
