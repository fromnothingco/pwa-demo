import React, { PureComponent } from 'react'

class Form extends PureComponent {

      constructor(props) {
            super(props)
            this.submit = this.submit.bind(this)
      }

      submit(e) {
            e.preventDefault()
            const form = [...this.refs.form]
                  .filter( (item) => item.name.length > 0 && !item.validity.valid)
            if(form.length === 0 && typeof this.props.onSubmit === 'function') {
                  const formData = [...this.refs.form]
                        .filter( (item) => item.name.length > 0)
                        .reduce((total, current) => {
                              total[current.name] = current.value
                              return total;
                        }, {})
                  this.props.onSubmit(formData)
            } else {
                  console.log(typeof this.props.onSubmit === 'function')
                  console.log(form)
                  alert('NO')
            }
      }

      render() {
            return(
                  <form 
                        ref='form'
                        onSubmit={this.submit}
                  >
                        {this.props.children}
                        <div>
                              <input type="submit" value="Submit" /> 
                        </div>
                  </form>
            )
      }
}

export default Form;