import React, { PureComponent } from 'react'
import styled, {css} from 'styled-components'


const CheckboxBase = css`
	display:flex;
	flex-direction: row;
`

const Checkbox = styled.div`
    ${CheckboxBase}
`

class CheckboxComponent extends PureComponent {

	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		if(typeof this.props.onChange === 'function' && this.props.onChange !== undefined ){
			this.props.onChange(e)
		}
	}

	render() {
		const {name, type, label, required, checked} = this.props
		return (
			<Checkbox>
				<input 
					type="checkbox" 
					name={name}
					required={required}
                    onChange={this.onChange}
                    checked={checked}
				/>
                <label 
					htmlFor={name}>{label}</label>
			</Checkbox>
		)
	}
}

export default CheckboxComponent;