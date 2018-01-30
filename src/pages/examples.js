import React from 'react';

import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Divider, Checkbox } from 'semantic-ui-react'
import { Button, Form, TextArea, Label } from 'semantic-ui-react'

const MONTHLY_PLAN_CODE = 'monthly';
const YEARLY_PLAY_CODE = 'yearly';

import Title from '../Components/Title.jsx';
import PageWrapper from '../Components/Wrapper.jsx';

class about extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Title title="Examples" />
                <Container fluid style={{'backgroundColor':'#3399CC'}}>
                    <Container>
                        <Segment padded="very" basic textAlign="left">
                            <p>
                            </p>
                        </Segment>
                    </Container>
                </Container>
            </PageWrapper>
        );
    }
}

export default about;
