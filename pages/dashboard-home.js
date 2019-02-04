import React, {PureComponent} from 'react'
import {H1} from '../components/generics/headings'
import {GridContainer, Header, Content, ColumnContainer} from '../components/generics/containers'
import api from '../utils/api'
import AuthProvider, { AuthContext } from '../components/providers/auth'
import {Router, Link} from '../routes'
import Mast from '../components/generics/mast'
import PrimaryNav from '../components/generics/navigation/primary'



const style ={
    height:'100%'
}

const Branding = (props) => 
    <img src={props.image} alt="logo" />


const items = [
    {
        alias: 'Home',
        component: <Link route="/dashboard">Dashboard</Link>
    },
    {
        alias: 'Posts',
        component: <Link route="/dashboard/posts">Posts</Link>
    }
]

class Dash extends PureComponent {
    static contextType = AuthContext
    render() {
        console.log('hello', this.context)
        return (
            <AuthProvider>
                <GridContainer grid="1fr 3fr" style={style}>
                    <Mast>
                        <Branding />
                        <PrimaryNav items={items}/> 
                    </Mast>
                    <ColumnContainer>
                        <H1>Dashboard</H1>
                    </ColumnContainer>
                </GridContainer>
            </AuthProvider>
        )
    }
}

export default Dash
    