import ProductSettingRecord from "../../component/product/ProductSettingRecord.tsx";
import ProductSettingForm from "../../component/product/ProductSettingForm.tsx";
import {Button, Flex, Modal, FocusTrap} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

function productSettingMain() {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <Modal
                centered
                radius={10}
                overlayProps={{ backgroundOpacity: 0.25, blur: 0.2 }}
                opened={opened}
                onClose={close}
                title="新增產品"
                withinPortal={false}
            >
                <FocusTrap.InitialFocus />
                <ProductSettingForm />
            </Modal>
            <Flex
                justify="flex-start"
                align="flex-start"
                direction="column"
            >
                <Button onClick={open}>新增產品</Button>
                <ProductSettingRecord />
            </Flex>
        </>
    )
}

export default productSettingMain;
