import React, { PureComponent } from 'react'
import styled, {css} from 'styled-components'


const FieldBase = css`
	display:flex;
	flex-direction: column;
	input{
		border:1px solid #ccc;
	}
`

const Field = styled.div`
    ${FieldBase}
`

class FieldComponent extends PureComponent {

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
		const {name, type, label, required, pattern = '.', minlength = 3, maxlength = 999, placeholder} = this.props
		return (
			<Field>
				<label 
					htmlFor={name}>{label}</label>
				<input 
					type={type} 
					name={name}
					required={required}
					pattern={pattern}
					minLength={minlength}
					maxLength={maxlength}
					onChange={this.onChange}
					placeholder={placeholder || label}
				/>
			</Field>
		)
	}
}

export default FieldComponent;