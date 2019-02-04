import React, {PureComponent} from 'react'
import {Router} from '../../../routes'

export const AuthContext = React.createContext({auth: false});

class Auth extends PureComponent {
    state = {
        auth: false
    }
    componentDidMount(){
        api.get('/ping')
        .then(() => this.setState({auth: true}))
        .catch(() => Router.push('/'))
    }
    render() {
        return (
            <AuthContext.Provider> value={state}
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default Auth