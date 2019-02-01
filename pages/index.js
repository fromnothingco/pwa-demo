import React from 'react'
import {H2} from '../components/generics/headers'
import {GridContainer, Header, Content, ColumnContainer} from '../components/generics/containers'
import Form from '../components/generics/form'
import {Field} from '../components/generics/form/fields'
import api from '../utils/api'

const style = {
    height: '100%'
}

const login = ({email, password}) => 
    api.post('/login', {
            email,
            password
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))

export default () => 
    <GridContainer grid="1fr 2fr" style={style}>
        <ColumnContainer>
            <Header>
                <H2>Sign in</H2>
                <p>Some text about the company blah blah blah</p>
            </Header>
            <Content>
                <Form onSubmit={login}>
                    <Field type="email" label="Email" name="email" required={true}/>
                    <Field type="password" label="Password" name="password" required={true}/>
                </Form>
            </Content>
        </ColumnContainer>
        <ColumnContainer image="/static/images/background.jpeg"/>
    </GridContainer>