import React from 'react'
import projectData from '../data/projects.json';

import { Table } from 'semantic-ui-react'

export default class BackgroundTableCell extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <Table.Cell id={`_${this.props.index}_label`} 
                width={this.props.width} 
                style={{backgroundImage: "url(" + this.props.image + ")", backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center',
                backgroundSize: 'cover'}} className='backgroundTableCell'>
                <style>
                    {`
                    #_${this.props.index}_label {
                        padding: 0px !important;
                    }
                    `}
                </style>
                {this.props.children}
            </Table.Cell>
        )
    }
}