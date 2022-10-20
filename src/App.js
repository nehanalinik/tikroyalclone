import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Likes from "./pages/Likes";
// import Followers from "./pages/Followers";
// import Views from "./pages/Views";
// import Comments from "./pages/Comments";
// import Shares from "./pages/Shares";
// import Live from "./pages/Live";
// import Support from "./pages/Support";
// import TikTok from "./pages/TikTok";
import Error from "./pages/Error";
import Home from "./components/Home";
import Layout from "./components/Layout";
const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route path="/tiktok-likes" element={<Likes />} />
        {/* <Route path="tiktok-followers" element={<Followers />} /> */}
        {/* <Route path="tiktok-views" element={<Views />} /> */}
        {/* <Route path="tiktok-comments" element={<Comments />} /> */}
        {/* <Route path="tiktok-video-shares" element={<Shares />} /> */}
        {/* <Route path="tiktok-live" element={<Live />} /> */}
        {/* <Route path="support" element={<Support />} /> */}
        {/* <Route path="tiktok" element={<TikTok />} /> */}
        <Route index element={<Home />} />
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={JSXRouter} />
    </>
  );
}

export default App;
