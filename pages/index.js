import React from 'react'
import {H1, H2, H3} from '../components/generics/headings'
import {GridContainer, Header, Content, ColumnContainer, PositionContainer} from '../components/generics/containers'
import Form from '../components/generics/form'
import {Field} from '../components/generics/form/fields'
import api from '../utils/api'
import styled from 'styled-components'
import {Link} from '../routes'
import Mast from '../components/generics/mast'
import PrimaryNav from '../components/generics/navigation/primary';
import P from '../components/generics/paragraph'
import Btn from '../components/generics/button'
import Pod from '../components/generics/containers/pod';

const Banner = styled(PositionContainer)`
    height:100%;
`

const SocialNavBase = styled.ul`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:row;
    list-style:none;
    li{
        margin-left: 0.5rem;
    }
`

const PodContainer = styled(PositionContainer)`
    padding:0;
    @media(min-width:500px){
        padding: 0 10%;
    }
`

const MainFooter = styled.footer`
    padding:2rem;
`

const SocialNav = ({items}) => 
    <SocialNavBase>
        {items.map(item => <li><a href={item.url}>{item.alias}</a></li>)}
    </SocialNavBase>

const socialItems = [
    {
        alias: 'facebook',
        url: "/something"
    },
    {
        alias: 'instagram',
        url: "/something"
    },
    {
        alias: 'twitter',
        url: "/something"
    }
]

const items = [
        {
            alias: 'Home',
            component: <Link route="/dashboard"><a>Dashboard</a></Link>
        },
        {
            alias: 'Products',
            component: <Link route="/products"><a>Products</a></Link>
        },
        {
            alias: 'Company',
            component: <Link route="/news"><a>Company</a></Link>
        },
        {
            alias: 'News',
            component: <Link route="/news"><a>News</a></Link>
        }
    ]


export default () => 
    <>
        <Mast position="top">
            <div>Logo</div>
            <PrimaryNav items={items} position="top"/>
        </Mast>
        <Banner role="banner">
            <div>
                <H1>Welcome to Some Company</H1>
                <p>Some content</p>
            </div>
        </Banner>
        <GridContainer>
            <ColumnContainer>
                   
            </ColumnContainer>
            <ColumnContainer>
                <Content>
                    <H2>About this company</H2 >  
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </P>
                    <Btn type="link" href="/the-company">Find out more</Btn>
                </Content>
            </ColumnContainer>
        </GridContainer>
        <PositionContainer position="center">
            <H2>Our Solutions</H2>
            <PodContainer position="center" column="row" align="flex-start">
                <Pod>
                    <Header style={{
                        textAlign:'center'
                    }}>
                        <H3>Something</H3>
                    </Header>
                    <Content style={{
                        textAlign:'center'
                    }}>
                        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </P>
                        <Btn type="link" href="/the-company">Find out more</Btn>
                    </Content>
                </Pod>
                <Pod>
                    <Header style={{
                        textAlign:'center'
                    }}>
                        <H3>Something</H3>
                    </Header>
                    <Content style={{
                        textAlign:'center'
                    }}>
                        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </P>
                        <Btn type="link" href="/the-company">Find out more</Btn>
                    </Content>
                </Pod>
                <Pod>
                    <Header style={{
                        textAlign:'center'
                    }}>
                        <H3>Something</H3>
                    </Header>
                    <Content style={{
                        textAlign:'center'
                    }}>
                        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </P>
                        <Btn type="link" href="/the-company">Find out more</Btn>
                    </Content>
                </Pod>
            </PodContainer>

        </PositionContainer>
        <GridContainer>
            <ColumnContainer>
                <Content>
                    <H2>Timetable</H2>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </P>
                </Content>
            </ColumnContainer>
            <ColumnContainer>
                    <table style={{textAlign:'left'}}>
                        <thead>
                            <tr>
                                <th>days</th>
                                <th>classes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Monday
                                </td>
                                <td>
                                    4:30pm
                                    5:30pm
                                    6:30pm
                                    7:30pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tuesday: Skills
                                </td>
                                <td>
                                    7:30pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Wednesday
                                </td>
                                <td>
                                    4:30pm
                                    5:30pm
                                    6:30pm
                                    7:30pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Thursday
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    Friday
                                </td>
                                <td>
                                    4:30pm
                                    5:30pm
                                    6:30pm
                                    7:30pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Saturday
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    Sunday
                                </td>
                                <td>
                                    9:00am
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </ColumnContainer>
        </GridContainer>
        <MainFooter>
            <GridContainer>
                <ColumnContainer>
                    <PrimaryNav items={items} />
                </ColumnContainer>
                <ColumnContainer>
                    <SocialNav items={socialItems} />
                </ColumnContainer>
                <ColumnContainer style={{
                    textAlign: 'right',
                }} size={3}>
                    <address>
                        123 fakestreet <br/>
                        st james way <br/>
                        ne1 7he<br/>
                    </address>
                </ColumnContainer>
            </GridContainer>
        </MainFooter>
    </>