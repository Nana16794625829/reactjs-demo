import {useForm} from "@mantine/form";
import {productSettingInitialValues, productSettingTextInputPairs} from "../../utils/product/productSettingForm.ts";
import {Button, Container, Group, TextInput} from "@mantine/core";
import classes from "../../css/Form.module.css";

function productSettingForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: productSettingInitialValues,
    });

    const textInputs = Object.entries(productSettingTextInputPairs).map(([key, value]) => (
        <TextInput
            classNames={{
                input: classes.input,
            }}
            key={form.key(key)}
            label={value}
            {...form.getInputProps(key)}
        />
    ));

    return (
        <>
            <Container>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <>{textInputs}</>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">儲存</Button>
                        <Button onClick={() => form.reset()}>清除</Button>
                    </Group>
                </form>
            </Container>
        </>
    );
}

export default productSettingForm;
