import Header from "./header";
import Footer from "./footer";

function LoginLayout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default LoginLayout;
