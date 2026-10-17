import React from 'react';
import { byTitle, imageSrc, projectPath, yearRange } from '../../data/helpers';

const kotari = byTitle('kotari');
const shot = (name) => kotari.images.find((image) => image.file.path.includes(name));

const products = [
    { name: 'Shoutline', url: 'https://shoutline.co', line: 'Your own agentically controlled news desk.', image: shot('shoutline'), at: '70% 30%' },
    { name: 'Marilyn', url: 'https://marilynhq.com', line: 'A personal agent platform.', image: shot('marilyn'), at: '0% 20%' },
    { name: 'Korimako', url: 'https://korimako.xyz', line: 'An open source agent library.', image: shot('korimako'), at: '20% 30%' },
];

// What I am doing now: kotari, set as a mosaic of its three products.
export default function Now() {
    return (
        <section className="now" id="now" aria-labelledby="now-title">
            <div className="row-line now__row" data-reveal>
                <span className="row-line__years">{yearRange(kotari)}</span>
                <h2 className="now__title" id="now-title">
                    <a href={projectPath(kotari)}>kotari</a>
                </h2>
                <span className="row-line__fact">Founder</span>
            </div>
            <div className="grid now__body">
                <p className="now__statement" data-reveal style={{ '--i': 1 }}>
                    Agents in good company. We build alternative harnesses for AI agents.
                </p>
                <p className="now__link" data-reveal style={{ '--i': 2 }}>
                    <a className="text-link" href={kotari.websiteURL}>kotari.ai</a>
                </p>
                <ul className="now__products">
                    {products.map((product, i) => (
                        <li className={'now__product now__product--' + (i === 0 ? 'lead' : 'side')} key={product.name} data-reveal style={{ '--i': i }}>
                            <a href={product.url}>
                                <img
                                    src={imageSrc(product.image)}
                                    width={product.image.file.size.w}
                                    height={product.image.file.size.h}
                                    style={{ objectPosition: product.at }}
                                    alt={'The ' + product.name + ' website'}
                                    loading="lazy"
                                />
                            </a>
                            <h3><a href={product.url}>{product.name}</a></h3>
                            <p>{product.line}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
