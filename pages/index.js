import React from 'react'
import {H1, H2, H3, H4} from '../components/generics/headings'
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
    justify-content: center;
    background-position: 70% 60%;
    background-size: 555px;
    box-sizing: border-box;
    > div {
        width:80%;
        margin: 0 auto;
    }
    p {
        width:41%;
        font-size:1.3rem;
        color: #b5b4b4;
    }
    span {
        color: #866945;
        text-transform: uppercase;
        letter-spacing: 0.09rem;
        font-weight: lighter;
    }
    @media(max-width:500px){
        background-position: center 25%;
        background-size: 80%;
        justify-content: flex-end;
        padding-bottom: 5%;
        text-align:center;
        h1{
            text-align:center;
        }
        > div {
            width:100%;
        }
        span{
            background: #866945;
            color: #000;
            padding:0.2rem 1rem 0.1rem;
            font-weight:normal;
        }
        p{
            width:100%;
        }
    }
`

const AboutContainer = styled(PositionContainer)`
   > div {
       width:40%;
       padding: 5.5rem 3rem 3rem;
       background: #111;
   }

   @media(max-width:500px){
       background-image: none;
       > div {
            width:100%;
       }
   }
`

const MembershipContainer = styled(PositionContainer)`
    padding: 5.5rem 0 4rem;  
`

const TimeTable = styled.table`
   text-align:left;
   td,th {
       padding: 0.4rem 0.5rem;
   }
`

const SocialNavBase = styled.ul`
    padding:0;
    margin:10px 0 0 0;
    display:flex;
    flex-direction:row;
    list-style:none;
    li{
        margin-right: 0.5rem;
    }
    a{
        color: ${props => props.theme.primaryNav.color || 'blue'};
        text-decoration: none;
        text-transform: uppercase;
        font-size:1.5rem;
        letter-spacing: 0.09rem;
        &:hover{
            color: ${props => props.theme.primaryNav.hoverColor || 'blue'};
        }
    }
`

const PodContainer = styled(PositionContainer)`
    padding:0;
    align-items: stretch;
    justify-content: center;
    article {
        max-width:250px;
        display:flex;
        flex-direction:column;
        margin: 2rem 1rem;
        padding: 2rem 1rem;
        border-color: #866945;
        span {
            display: block;
            font-family: sans-serif;
            color: #866945;
            text-transform: uppercase;
            letter-spacing: 0.09rem;
            font-weight: lighter;
            font-size:0.9rem;

        }

    }
    @media(max-width:743px){
        justify-content: flex-start;
        -webkit-overflow-scrolling: touch;
        padding-right:1rem;
    }
`

const MainFooter = styled.footer`
    padding:2rem;
    background:#000;
    > div > div{
        margin-bottom: 10px;
    }
`

const SocialNav = ({items}) => 
    <SocialNavBase>
        {items.map(item => 
            <li>
                <a href={item.url}><i class={`fa fa-${item.icon}`}></i></a>
            </li>)}
    </SocialNavBase>

const socialItems = [
    {
        icon: 'instagram',
        url: "https://www.instagram.com/crossfit_deathorglory"
    }
]

const items = [
    {
        alias: 'Home',
        url: "#home"
    },
    {
        alias: 'About',
        url: "#about"
    },
    {
        alias: 'Memberships',
        url: "#memberships"
    }
    ,
    {
        alias: 'Timetable',
        url: "#timetable"
    },
    {
        alias: 'Contact',
        url: "#contact"
    },

]


const BannerHeading = styled(H1)`
    margin-top: 10px;
    font-size: 6.5rem;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 90%;

    @media(max-width:500px){
        font-size: 3.5rem;
    }
`





export default () => 
    <>
        <Mast position="top">
            <img 
                style={{
                    background: '#000',
                    padding: '0.5rem'
                }}
                width="70px"
                src="/static/images/logo.svg" 
                alt="cross for death or glory logo"/>
            <PrimaryNav items={items} position="top"/>
        </Mast>
        <Banner id="home" role="banner" 
                position="flex-start" 
                imagePosition="center"
                imageSize="40%"
                image="/static/images/circlebackground.png">
            <Content>
                <span >we are crossfit</span>
                <BannerHeading>Death <br/>or Glory</BannerHeading>
                <P>Fitness is changing. Don’t be part of the crowd. Be the crowd. Be the change.</P>
                <Btn type="link" href="#about">Find out more</Btn>
            </Content>
        </Banner>
        <AboutContainer 
                id="about"
                image="/static/images/banner2.jpg" 
                imageSize="cover"
                position="flex-end" 
                >
                <Content>
                    <H2>About us</H2 >  
                    <P>CrossFit Death or Glory. It’s just a name. But what it stands for is 
                        something much much more. We provide a vehicle for change. 
                        We provide an escape from the norm. A community of like minded 
                        individuals who don’t settle for anything less than all in. </P>

                    <P>We are by no means exclusive. But we might not be for everyone. 
                        It takes a certain type of person to give their all here. 
                        But all who are willing will always be welcome! 
                        And you will never know until you try.</P>  

                    <P>Everything we do here is built around you and the community. 
                        This isn’t a place where you are just a number. We care about you and your 
                        journey and we want you to be a part of ours. </P>

                    <P>All we ask is that you bring a willingness to work hard. 
                        A commitment to yourself and this community, and an open mind. 
                        We will take care of the rest.</P>
                    <Btn type="link" href="#memberships">See memberships</Btn>
                </Content>
        </AboutContainer>
        <MembershipContainer id="memberships" position="center">
            <H2>Memberships</H2>
            <PodContainer position="center" column="row" align="flex-start">
                <Pod>
                    <Header style={{
                        textAlign:'center'
                    }}>
                        <H3>Full Membership <span>£70 per month</span></H3>
                    </Header>
                    <Content style={{textAlign:'center', flex: 1}}>
                        <P> Full CrossFit membership. Unlimited weekly classes. Full use of open gym facilities. </P>
                    </Content>
                    <Btn type="link" href="#contact">Get in touch</Btn>
                </Pod>
                <Pod>
                    <Header style={{
                        textAlign:'center'
                    }}>
                        <H3>Part Membership <span>£35 per month</span></H3>
                    </Header>
                    <Content style={{textAlign:'center', flex: 1}}>
                        <P> Entitled to 1 weekday class and 1 weekend class. </P>
                    </Content>
                    <Btn type="link" href="#contact">Get in touch</Btn>
                </Pod>
                
            </PodContainer>
            <H3>Taster session</H3>
            <Content style={{textAlign:'center'}}>
                <P>Not ready to sign up? get in touch to find out about our taster sessions</P>
                <Btn type="link" href="#contact">Get in touch</Btn>
            </Content>
        </MembershipContainer>
        <GridContainer id="timetable">
            <ColumnContainer>
                <Content>
                    <H2>Timetable</H2>
                    <P>Our classes are open to all age groups and levels of ability. Each workout of the day can be tailored to match your own personal skill level and goal. </P>
                </Content>
            </ColumnContainer>
            <ColumnContainer>
                <Content>
                
                    <H3>Class times</H3>
                    <TimeTable style={{textAlign:'left', margin: '10px 0'}}>
                        
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>Times</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Monday
                                </td>
                                <td>
                                    7:00am
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
                                    7:00pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Wednesday
                                </td>
                                <td>
                                    7:30am
                                    5:30pm
                                    6:30pm
                                    7:30pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Friday
                                </td>
                                <td>
                                    7:30am
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
                                <td>10:00am</td>
                            </tr>
                            <tr>
                                <td>
                                    Sunday: Team
                                </td>
                                <td>
                                    9:00am
                                </td>
                            </tr>
                        </tbody>
                    </TimeTable>
                    <H3>Open Gym</H3>
                    <TimeTable style={{textAlign:'left', margin: '10px 0'}}>
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>Times</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Monday - Friday
                                </td>
                                <td>
                                    6:30am-9:00pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Saturday
                                </td>
                                <td>
                                    8:00am-2:00pm
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sunday
                                </td>
                                <td>
                                    9:00am-2:00pm
                                </td>
                            </tr>
                        </tbody>
                    </TimeTable>
                </Content>
            </ColumnContainer>
        </GridContainer>
        <MainFooter id="contact">
            <GridContainer style={{
                alignItems: 'start',
                padding: 0
            }}>
                <ColumnContainer size={2}>
                    <H4 style={{marginBottom: '10px'}}>Get in Touch</H4>
                    <div>Email: <a style={{fontSize: '0.8rem', letterSpacing: 0}}href="mailto:contact@crossfitdeathorglory.co.uk">contact@crossfitdeathorglory.co.uk</a></div>
                    <div>Phone: 07876495711</div>
                    <SocialNav items={socialItems} />
                </ColumnContainer>
                <ColumnContainer style={{
                    textAlign: 'left',
                }} size={3} >
                    <H4 style={{marginBottom: '10px'}}>Where we are</H4>
                    <address >
                        Unit 6E <br />
                        Chollerton Drive <br />
                        North Tyneside Industrial Estate <br />
                        Benton <br />
                        Newcastle upon Tyne <br />
                        NE12 9SZ <br />
                    </address>
                </ColumnContainer>
                <ColumnContainer>
                    <a href="https://journal.crossfit.com/start.tpl?version=CFJ-white123x63" target="_blank" title="CrossFit Journal: The Performance-Based Lifestyle Resource"><img src="https://journal.crossfit.com/templates/images/white-125x63.png" width="125px" height="63px" alt="CrossFit Journal: The Performance-Based Lifestyle Resource" /></a>
                </ColumnContainer>
            </GridContainer>
        </MainFooter>
    </>