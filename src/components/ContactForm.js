import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    position: relative;
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

const ThankYou = styled.div`
    align-items: center;
    background-color: white;
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
`

class ContactForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            debug: 0,
            debugEmail: 'anselcolvin@gmail.com',
            oid: '00D61000000eEuR',
            retURL: 'https://www.coastcrm.com',
            last_name: '',
            email: '',
            company: '',
            description: '',
            contact_me_by_fax_only: '',
            shown: false,
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
        this.setState({
			shown: !this.state.shown
		});
    }

    canBeSubmitted() {
        const { last_name, email, description, contact_me_by_fax_only } = this.state;
        return (
          last_name.length > 0 &&
          email.length > 0 &&
          description.length > 0 &&
          contact_me_by_fax_only.length === 0
        );
    }

    render() {
        const isEnabled = this.canBeSubmitted();

        const shown = {
			visibility: this.state.shown ? "visible" : "hidden"
		};

        return(
            <FormContainer>
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                    <input type="hidden" name="oid" value={this.state.oid} />
                    <input type="hidden" name="retURL" value={this.state.retURL} />
                    <input type="hidden" name="debug" value={this.state.debug} /> 
                    <input type="hidden" name="debugEmail" value={this.state.debugEmail} /> 
                    <label htmlFor="last_name">Name</label><br />
                    <input id="last_name" value={this.state.last_name} onChange={this.handleChange} maxLength="80" name="last_name" size="20" type="text" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input id="email" value={this.state.email} onChange={this.handleChange} maxLength="80" name="email" size="20" type="email" /><br />
                    <label htmlFor="company">Company</label><br />
                    <input id="company" value={this.state.company} onChange={this.handleChange} maxLength="40" name="company" size="20" type="text" /><br />
                    <label htmlFor="description">Message</label><br />
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea><br />
                    <input type="checkbox" name="contact_me_by_fax_only" value={this.state.contact_me_by_fax_only} style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                    <input onClick={this.handleSubmit} disabled={!isEnabled} type="submit" name="submit" />
                </form>
                <ThankYou style={ shown }>
                    <h2>Thank you</h2>
                    <h3>We'll be in touch shortly</h3>
                </ThankYou>
            </FormContainer>
        )
    }
}

export default ContactForm;