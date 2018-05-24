import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.div`
    width: 100%;

    & form {
        text-align: center;

        & label {
            font-weight: 700;
            letter-spacing: 2px;
            opacity: .9;
        }
    }

    & textarea {
        border: 1px solid ${props => props.theme.coastPrimary};
        font-size: .9rem;
        height: 8rem;
        margin-bottom: 13px;
        max-width: 400px;
        padding: 5px;
        width: 100%;
    }

    & input {
        border: 1px solid ${props => props.theme.coastPrimary};
        border-radius: 0;
        font-size: .9rem;
        margin-bottom: 9px;
        max-width: 400px;
        padding: 8px;
        width: 100%;

        &[type=submit] {
            background-color: ${props => props.theme.coastPrimary};
            border-radius: 0;
            color: ${props => props.theme.coastSecondary};
            cursor: pointer;
            font-weight: 700;
            font-size: .9rem;
            margin-bottom: 3rem;
            padding: 18px;
            text-transform: uppercase;
            transition: .2s all;
            width: 190px;

            &:disabled {
                background-color: ${props => props.theme.coastPrimary};
                opacity: .5;

                &:hover {
                    background-color: ${props => props.theme.coastPrimary};
                    cursor: default;
                }
            }

            &:hover {
                background-color: ${props => props.theme.coastOrange};
            }
        }
    }
`

class ContactForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            debug: 1,
            debugEmail: 'anselcolvin@gmail.com',
            oid: '00D61000000eEuR',
            retURL: 'http://www.coastcrm.com',
            first_name: '',
            last_name: '',
            email: '',
            company: '',
            description: '',
            honeypot: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            company: this.state.company,
            description: this.state.description
        }

        axios.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', { data })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    canBeSubmitted() {
        const { first_name, email, description, honeypot } = this.state;
        return (
          first_name.length > 0 &&
          email.length > 0 &&
          description.length > 0 &&
          honeypot.length === 0
        );
    }

    handleSubmit = event => {
        if (!this.canBeSubmitted()) {
          event.preventDefault();
          console.log("Submission failed");
          return;
        }
        event.preventDefault();

        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            company: this.state.company,
            description: this.state.description
        }

        axios.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', { data })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    };

    render() {
        const isEnabled = this.canBeSubmitted();

        return(
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="oid" value={this.state.oid} />
                    <input type="hidden" name="retURL" value={this.state.retURL} />
                    <input type="hidden" name="debug" value={this.state.debug} /> 
                    <input type="hidden" name="debugEmail" value={this.state.debugEmail} /> 
                    <label htmlFor="first_name">First Name</label><br />
                    <input id="first_name" value={this.state.first_name} onChange={this.handleChange} maxLength="40" name="first_name" size="20" type="text" /><br />
                    <label htmlFor="last_name">Last Name</label><br />
                    <input id="last_name" value={this.state.last_name} onChange={this.handleChange} maxLength="80" name="last_name" size="20" type="text" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input id="email" value={this.state.email} onChange={this.handleChange} maxLength="80" name="email" size="20" type="email" /><br />
                    <label htmlFor="company">Company</label><br />
                    <input id="company" value={this.state.company} onChange={this.handleChange} maxLength="40" name="company" size="20" type="text" /><br />
                    <label htmlFor="description">Message</label><br />
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea><br />
                    <input type="hidden" name="honeypot" value={this.state.honeypot} />
                    <input disabled={!isEnabled} type="submit" name="submit" />
                </form>
            </FormContainer>
        )
    }
}

export default ContactForm;