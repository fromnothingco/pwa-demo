import React from 'react'
import {H2} from '../components/generics/headers'
import {GridContainer, Header, Content, ColumnContainer} from '../components/generics/containers'
import Form from '../components/generics/form'
import {Field} from '../components/generics/form/fields'

const style = {
    height: '100%'
}
export default () => 
    <GridContainer grid="1fr 2fr" style={style}>
        <ColumnContainer>
            <Header>
                <H2>Sign in</H2>
                <p>Some text about the company blah blah blah</p>
            </Header>
            <Content>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Field type="email" label="Email" name="email" required={true}/>
                    <Field type="password" label="Password" name="email" required={true}/>
                </Form>
            </Content>
        </ColumnContainer>
        <ColumnContainer image="/static/images/background.jpeg"/>
    </GridContainer>