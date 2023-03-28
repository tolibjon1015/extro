import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';
import "../../navbar.css"
import Components from './components/Components';

function Draver() {
    const [opened, { open, close }] = useDisclosure(false);

    return <div className='block'>
        <Drawer opened={opened} onClose={close} withCloseButton={false} overlayProps={{ opacity: 0.5, blur: 4 }} size="75%" title="Malumot">
            <div className='paddraw'>
                <span style={{ fontSize: "50px" }} onClick={close}>&times;</span>
                <div>
                    <Components />
                </div>
            </div>
        </Drawer>

        <Group position="center">
            <img className='imageNav' onClick={open} src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png" alt="" />
        </Group>
    </div>
}

export default Draver