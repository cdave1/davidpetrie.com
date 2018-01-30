import React from 'react';
import fetch from 'node-fetch';

import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Divider, Checkbox } from 'semantic-ui-react'
import { Button, Form, TextArea, Label } from 'semantic-ui-react'

const MONTHLY_PLAN_CODE = 'monthly';
const YEARLY_PLAY_CODE = 'yearly';

import PageWrapper from '../Components/Wrapper.jsx';

class Pricing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billingPeriod: 'yearly',
            paymentPlans: []
        };
    }

    componentWillMount() {
        /*var myHeaders = new Headers();
        
        var myInit = { method: 'GET',
                       headers: myHeaders,
                       mode: 'cors',
                       cache: 'default' };*/

        
        fetch(process.env.APP_URL + '/paymentPlans') //, myInit)
            .then(function(res) {
                return res.text();
            })
            .then(function(blob) {
                var responseJson = JSON.parse(blob);
                this.setState({paymentPlans: responseJson.paymentPlans});
            }.bind(this));
    }

    onPeriodToggle(e, { value }) {
        this.setState({billingPeriod: value})
    }

    render() {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });
        var plans = this.state.paymentPlans.filter(plan => (plan.period === this.state.billingPeriod));

        var purchaseBoxes = plans.map((plan, index) => {
            var subscriptionFee = formatter.format(plan.fee / 100.0);
            var url = process.env.APP_URL + "/purchase?planId=" + plan.id;

            return (
                <Grid.Column key={index} textAlign="center">
                    <Header as="h2" color={plan.color}>{plan.name}</Header>
                    <Header as="h1">{subscriptionFee}/month</Header>
                    {plan.discount && <Header as="h4">{plan.discount}</Header>}
                    {plan.features.map((feature, featureIndex) => {
                        return (<p key={featureIndex}>{feature}</p>)
                    })}
                    <Segment basic>
                        <Button active size='large' color={plan.color} href={url} content="START FREE TRIAL" />
                    </Segment>
                </Grid.Column>
            )
        });

        return (
            <PageWrapper>
                <Container fluid style={{'backgroundColor':'#FFFFFF'}}>
                    <Container>
                        <Segment basic loading={this.state.paymentPlans.length == 0}>
                            <Segment padded="very" basic textAlign="center">
                                <Header as="h1">Get Instant Access To GigaDraw</Header>
                                <Header ui as="h3">Pick a plan that suits your situation</Header>
                                <Checkbox 
                                    radio 
                                    label='Billed Yearly'
                                    name='checkboxRadioGroup'
                                    value={YEARLY_PLAY_CODE}
                                    checked={this.state.billingPeriod === YEARLY_PLAY_CODE}
                                    onChange={this.onPeriodToggle.bind(this)} 
                                    style={{marginRight: '1.0em'}}/>
                                <Checkbox 
                                    radio 
                                    label='Billed Monthly'
                                    name='checkboxRadioGroup'
                                    value={MONTHLY_PLAN_CODE}
                                    checked={this.state.billingPeriod === MONTHLY_PLAN_CODE}
                                    onChange={this.onPeriodToggle.bind(this)} 
                                    />
                            </Segment>
                            <Container>
                                <Grid stackable celled relaxed>
                                    <Grid.Row columns={3}>
                                        {purchaseBoxes}
                                        <Grid.Column textAlign="center">
                                            <Header as="h2" color='blue' textAlign="center">Enterprise Plan</Header>
                                            <Header as="h1">Contact Us</Header>
                                            <p>Unlimited Projects</p>
                                            <Segment basic>
                                                <Button active size='large' color='blue' href="/contact" content="Contact Us" />
                                            </Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <Grid stackable relaxed>
                                    <Grid.Row columns={1}>
                                        <Grid.Column textAlign="center">
                                            All pricing in USD. You won’t be billed until after your 14-day trial expires. You can change plans or cancel your account at any time
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={1}>
                                        <Grid.Column textAlign="center">
                                            <Header as="h1">Compare Plan Features</Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3}>
                                        <Grid.Column textAlign="center">
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                        </Grid.Column >
                                        <Grid.Column textAlign="center">
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="center">
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                            <Divider />
                                            <p>Feature 1</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </Segment>
                    </Container>

                    <Segment color="blue" secondary inverted basic className="masthead">
                        <Container>
                            <Grid relaxed padded>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Header inverted as="h1" style={{fontWeight: 700}}>Frequently Asked Questions</Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns='equal'>
                                    <Grid.Column>
                                        <Header inverted as="h3">What are projects?</Header>
                                        <p>
                                            A project is set of completed designs that share a similar style and theme.  A project is created when you "publish" a potential design candidate.  Each project may have tens or even of hundreds individual versions of the logo design within it, with each design being available in multiple formats.
                                        </p>
                                        <Button content="Check out a project example" icon='right arrow' labelPosition='right'  />
                                    
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as="h3">What is the difference between yearly and monthly pricing?</Header>
                                        <p>
                                            Yearly plans are billed once per year in a single payment.  Yearly plans have a discount of 20%. Monthly plans are billed each month, but are not discounted. In both cases, your credit card will be charged with the first installment as soon as your 14-day trial expires.
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns='equal'>
                                    <Grid.Column>
                                        <Header inverted as="h3">What's a client?</Header>
                                        <p>
                                            A client is the recipient of a completed project.  When you complete a project, you can send the completed work to the client.
                                        </p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as="h3">How does the 14-day free trial work?</Header>
                                        <p>
                                            GigaDraw is built on top of small programs created by real, human, designers.  These programs will design logos for you as if the original designer was doing it.  You get fast access to the taste and skill of the designer.
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns='equal'>
                                    <Grid.Column>
                                        <Header inverted as="h3">How does the 14-day free trial work?</Header>
                                        <p>
                                            We grant you full access to GigaDraw during your 14-day trial. Your access is not restricted, and you do not have any obligation to continue beyond your trial. Your account will not be charged until your 15th day using GigaDraw. You can cancel your account on the dashboard, under “My Account,” and then "Plans".
                                        </p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as="h3">Is it possible to upgrade to a different plan?</Header>
                                        <p>
                                            Yes. You can easily change plans on your account dashboard. You can upgrade to another plan at any time. You can also downgrade, effective at the end of your current billing cycle (either yearly or monthly).
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Segment>
                </Container>
            </PageWrapper>
        );
    }
}

export default Pricing;
