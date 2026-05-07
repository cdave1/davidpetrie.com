import React from 'react';
import PageWrapper from '../components/Wrapper';

export default class NotFound extends React.Component {
    render() {
        return (
            <PageWrapper>
                <div className="not-found">
                    <h1>404 - Page Not Found</h1>
                </div>
            </PageWrapper>
        );
    }
}
