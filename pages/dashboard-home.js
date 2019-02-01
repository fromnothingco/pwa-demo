import React, {PureComponent} from 'react'
import {H1} from '../components/generics/headers'
import {GridContainer, Header, Content, ColumnContainer} from '../components/generics/containers'
import api from '../utils/api'

const style ={
    height:'100%'
}

class Dash extends PureComponent {
    render() {
        return (
            <GridContainer grid="1fr 3fr" style={style}>
            <ColumnContainer>
               nav
            </ColumnContainer>
            <ColumnContainer>
                <H1>Dashboard</H1>
            </ColumnContainer>
        </GridContainer>
        )
    }
}

export default Dash
    