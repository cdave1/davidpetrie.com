import React from 'react';

import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Divider, Checkbox } from 'semantic-ui-react'
import { Button, Form, TextArea, Label } from 'semantic-ui-react'

const MONTHLY_PLAN_CODE = 'monthly';
const YEARLY_PLAY_CODE = 'yearly';

import Title from '../Components/Title.jsx';
import PageWrapper from '../Components/Wrapper.jsx';

/*


I currently live and work in Wellington, New Zealand.  My current focus is on building augmentation software to help individual people improve their productivity.

I also work on a project called [Vast](http://www.vastvr.com). Vast is a tool for crafting 3D objects and environments directly in VR.

From 2013 to 2016 I spent most of my time in the San Francisco Bay Area, California, USA.  I worked at [iCracked](https://www.icracked.com) on [Ocean](https://getocean.now.sh/), a hardware project.  Prior to this, I was co-founder of a company called SocialBox - aka Shopagram - funded by [Y Combinator](http://ycombinator.com) for the Winter 2014 batch.

Between 2010 and 2013, I was co-founder and CTO of [PlayCoMo](http://www.playcomo.com), a company that makes mobile phone games.  I ran the company's office out of Wellington, New Zealand, managing our staff in five different countries (USA, Australia, New Zealand, Canada, Indonesia).  We shipped a lot of games for both iOS and Android, and got millions of downloads.

Before PlayCoMo I made indie mobile phone games under the moniker [@hackdirt](https://twitter.com/hackdirt/). I also built iOS apps for various companies in New Zealand, Australia, and the UK (including Subway NZ, Pizza Hut, Wagamama, and Royal Bank of Scotland).

From 2007 to 2008 I was lead developer at awesome education software startup [Arlo](https://www.arlo.co). Arlo powers a training platform for a impressive number of schools and companies in New Zealand and around the world, such as Xero, Microsoft, and the University of Auckland.
*/

class about extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Title subtitle="About Us" title="A new way to work" />
                <Container fluid style={{'backgroundColor':'#FFFFFF'}}>
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
