import { Layout as AntLayout } from "antd";
import Navbar from "./Navbar";

const { Header, Content } = AntLayout;

const Layout = ({ children }) => {
    return (
        <AntLayout style={{ minHeight: "100vh" }}>
            <Header>
                <Navbar />
            </Header>
            <Content style={{ padding: "24px" }}>{children}</Content>
        </AntLayout>
    );
};

export default Layout;
