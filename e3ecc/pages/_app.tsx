import type { AppProps } from "next/app";

import "../styles/index.css";
import NavBar from "../src/components/NavBar";
import NavItem from "../src/components/NavItem";
import DropdownMenu from "../src/components/DropdownMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar>
        <NavItem icon='Characters'></NavItem>
        <NavItem icon=">">
          <DropdownMenu />
        </NavItem>
      </NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
