import React from 'react'

import {HeadingLevel, Heading} from 'baseui/heading'
import racersDB from './racersDB.json'

import Charts from './Charts'
import {Button} from 'baseui/button'

import {H3, H4, H6} from 'baseui/typography'

import Edit from './Edit'
import EditRacers from './EditRacers'

import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
  } from "baseui/header-navigation";

  import {StyledLink as Link} from 'baseui/link';

const Content = () => {

    const [CONTENT_VIEW, setContentView] = React.useState('MAIN')
    const [checkedRacers, setCheckedRacers] = React.useState([])



    return (
        <>
            <HeaderNavigation style={{marginBottom: 20, paddingRight: 20}}>
                <StyledNavigationList $align={ALIGN.center}>
                    <StyledNavigationItem>
                        <H6
                            style={{cursor: 'pointer'}}
                            onClick={() => setContentView('MAIN')}>
                                Home
                        </H6>
                    </StyledNavigationItem>
                    <StyledNavigationItem>
                        <H6
                            style={{cursor: 'pointer'}}
                            onClick={() => setContentView('EDIT_RACERS')}>
                                Add Racers
                        </H6>
                    </StyledNavigationItem>
                    <StyledNavigationItem>
                        <H6
                            style={{cursor: 'pointer'}}
                            onClick={() => setContentView('EDIT')}>
                                Edit Times
                        </H6>
                    </StyledNavigationItem>
                </StyledNavigationList>
            </HeaderNavigation>
            <div style={{display: 'flex', justifyContent: 'center'}}>

                <div style={{width: '95vw'}}>
                {CONTENT_VIEW === 'MAIN' && <Charts selectedRacers={checkedRacers} />}
                {CONTENT_VIEW === 'EDIT' && <Edit />}
                {CONTENT_VIEW === 'EDIT_RACERS' && <EditRacers />}
                </div>
            </div>
        </>)
}

export default Content