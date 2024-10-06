import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import {App} from "./Router.tsx";
import Navbar from "./pages/Navbar.tsx";
import PageTitle from "./component/pageTitle.tsx";
import '@mantine/dates/styles.css';
import '@mantine/core/styles.css';
import {AppShell, Container, createTheme, Flex, Group, MantineProvider, rem} from "@mantine/core";
import {links} from "./utils/pageTitles.ts";

function AppWrapper() {
    const theme = createTheme({
        fontSizes: {
            xs: rem(14),
            sm: rem(18),
            md: rem(20),
            lg: rem(24),
            xl: rem(32),
        },
    });

    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{
                    height: 75
                }}
                padding="md"
            >
                <Router>
                    <AppShell.Header>
                        <Group
                            h="100%"
                            px="md"
                        >
                            <div>{'成品倉系統'}</div>
                            <PageTitle links={links}/>
                        </Group>
                    </AppShell.Header>

                    <AppShell.Main>
                        <Container fluid>
                            <Flex
                                align="flex-start"
                                gap="md"
                                justify="flex-start"
                            >
                                <Navbar />
                                <App />
                            </Flex>
                        </Container>
                    </AppShell.Main>
                </Router>
            </AppShell>
        </MantineProvider>
    );
}

export default AppWrapper
