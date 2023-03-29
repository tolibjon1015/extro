import { Tabs } from '@mantine/core';
import All from '../article/components/all/All';
import Photo from '../article/components/photo/Photo';
import Video from '../article/components/video/Video';
import "./tab.css"

function Tab() {
    return (
        <div className='bg-class'>
            <Tabs defaultValue="first">
                <Tabs.List grow>
                    <Tabs.Tab value="first">So'ngi Maqolalar</Tabs.Tab>
                    <Tabs.Tab value="second">Rasmlar</Tabs.Tab>
                    <Tabs.Tab value="third">Videolar</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="first"><All /></Tabs.Panel>
                <Tabs.Panel value="second"><Photo /></Tabs.Panel>
                <Tabs.Panel value="third"><Video /></Tabs.Panel>
            </Tabs>

        </div>
    );
}

export default Tab