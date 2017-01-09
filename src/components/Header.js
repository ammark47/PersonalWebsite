/**
 * Created by ammar on 1/3/2017.
 */
import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'
import './Header.css';

const HeaderExampleFloating = () => (
    <Segment clearing>
        <Header as='h2' size="huge" textAlign="center">
            Ammar Karim
        </Header>
    </Segment>
)

export default HeaderExampleFloating