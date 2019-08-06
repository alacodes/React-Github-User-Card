import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

export default function UserCard({ user }) {
    const {
        name,
        login,
        location,
        html_url,
        followers,
        bio
    } = user
    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span>{login}</span>                   
                </Card.Meta>
                <Card.Description>
                    This is words that will be other words.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="user" />
                    15450 friends
                </a>
            </Card.Content>
        </Card>
    )
};
