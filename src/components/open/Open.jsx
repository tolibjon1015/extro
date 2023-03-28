import { Accordion } from '@mantine/core';
import data from './data/AccordionData';
import "./open.css"

function Open() {
    return (
        <div className='pad'>
            {data.map((item) => {
                return <Accordion key={item.id}>
                    <Accordion.Item value='customization'>
                        <Accordion.Control>{item.text}</Accordion.Control>
                        <Accordion.Panel>{item.answer}</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            })}
        </div>
    );
}

export default Open