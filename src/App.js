import "./index.css";
import "./styles.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import PrivateRoutes from "./components/private-route/PrivateRoutes";
import Layout from "./layout/main-layout/Layout";
import Fortnite from "./pages/fortnite/Fortnite";
import Scratch from "./pages/scratch/Scratch";
import AboutUs from "./pages/about-us/AboutUs";
import ErrorPage from "./pages/error-page/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Minecraft from "./pages/minecraft/Minecraft";
import GamingClub from "./pages/gaming-club/GamingClub";
import SignUp from "./pages/sign-up/SignUp";
import DashboardClient from "./pages/dashboard-client/DashboardClient";
import DashboardSubscription from "./pages/dashboard-client/DashboardSubscription";
import DashboardCalendar from "./pages/dashboard-client/DashboardCalendar";
import DashboardLayout from "./layout/dashboard-layout/DashboardLayout";
import DashboardVod from "./pages/dashboard-client/DashboardVod";
import DashboardAdmin from "./pages/dashboard-admin/DashboardAdmin";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import DashboardUserList from "./pages/dashboard-admin/dashboard-userslist/DashboardUserList";
import Basic from "./pages/basic/Basic";
import Premium from "./pages/premium/Premium";
import StripeSuccess from "./pages/stripe-succes/StripeSuccess";
import SubscriptionPlan from "./components/subscription-plan/SubscriptionPlan";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/stripe/success" element={<StripeSuccess />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/robox" element={<GamingClub />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/koding" element={<Scratch />} />
        <Route path="/omoss" element={<AboutUs />} />
        <Route path="/subscription" element={<PrivateRoutes><SubscriptionPlan /></PrivateRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
        <Route
          path="/"
          element={<DashboardLayout />}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <DashboardClient />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dashboard-subscription"
            element={
              <PrivateRoutes>
                <DashboardSubscription />
              </PrivateRoutes>
            }
          />
          <Route
            path="/basic"
            element={
              <PrivateRoutes>
                <Basic />
              </PrivateRoutes>
            }
          />
          <Route
            path="/premium"
            element={
              <PrivateRoutes>
                <Premium />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dashboard-admin"
            element={
              <PrivateRoutes>
                <DashboardAdmin />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dashboard-userlist"
            element={
              <PrivateRoutes>
                <DashboardUserList />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dashboard-calendar"
            element={
              <PrivateRoutes>
                <DashboardCalendar />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dashboard-vod"
            element={
              <PrivateRoutes>
                <DashboardVod />
              </PrivateRoutes>
            }
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
