import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const CommonTabs = ({buttons, children, classNameDyn}) => {
    return (
        <>
            <Tabs className={classNameDyn}>
                <TabList>
                    {buttons}
                </TabList>

                {children}
            </Tabs>
        </>
    )
}

export default CommonTabs