import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
    margin-bottom: 1rem;
`

class ServiceListItem extends React.Component {
    render() {
        return (
            <ListItem>{this.props.text}</ListItem>
        );
    }
}

export default ServiceListItem;