import React from 'react';
import PageWrapper from '../components/Wrapper';
import Seo from '../components/Seo.jsx';

export const Head = () => <Seo title="Page Not Found" />;

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
