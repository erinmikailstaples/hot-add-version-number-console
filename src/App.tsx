import Footer from "./components/Footer";
import PrimaryNav from "./components/PrimaryNav";
import PostsWrap from "./components/PostsWrap";
import { initiatePostHog } from "./lib/analytics";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";
import RepoSubmission from "./components/RepoSubmission";
import GradBackground from "./components/GradBackground";
import Hero from "./components/Hero";
import apiFetcher from "./hooks/useSWR";

import { version } from "../../package.json";

    console.log(`%c
 ██████╗ ██████╗ ███████╗███╗   ██╗    ███████╗ █████╗ ██╗   ██╗ ██████╗███████╗██████╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ███████╗███████║██║   ██║██║     █████╗  ██║  ██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ╚════██║██╔══██║██║   ██║██║     ██╔══╝  ██║  ██║
╚██████╔╝██║     ███████╗██║ ╚████║    ███████║██║  ██║╚██████╔╝╚██████╗███████╗██████╔╝
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚══════╝╚═════╝%c v${version()}`,
    "color:#f6d82b",
    "color:green;font-weight:bold");


const App = (): JSX.Element => {
  initiatePostHog();

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: apiFetcher,
      }}
    >
      <Toaster position="top-right" />

      <BrowserRouter>
        <div className="App overflow-hidden">
          <GradBackground>
            <RepoSubmission />

            <PrimaryNav />

            <Hero />
          </GradBackground>

          <PostsWrap />

          <Footer />
        </div>
      </BrowserRouter>
    </SWRConfig>
  );
};

export default App;
