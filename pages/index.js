import React from 'react'
import styled from 'styled-components'
import {H1} from '../components/generics/headers'
import {Pod, CenterContainer, Header, Content} from '../components/generics/containers'
import Form from '../components/generics/form'
import {Field} from '../components/generics/form/fields'



export default () => 
    <CenterContainer>
        <Pod>
            <Header>
                <H1>Sign In</H1>
            </Header>
            <Content>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Field type="email" label="Email" name="email" required="true"/>
                    <Field type="password" label="Password" name="email" required="true"/>
                </Form>
            </Content>
        </Pod>
    </CenterContainer>