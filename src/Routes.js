import "./App.css";
import React, { Suspense, lazy } from "react";
import "../src/assets/styles/main.css";
import "../src/assets/styles/util.css";
import "../src/assets/styles/chat.css";
import "../src/assets/styles/cropperStyles.css";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/loader";

const AddSubAdmin = lazy(() => import("./pages/subAdmin/addSubAdmin"));
const Ratings = lazy(() => import("./pages/ratings"));
const Vendors = lazy(() => import("./pages/vendors"));
const Disputes = lazy(() => import("./pages/disputes"));
const SubAdmin = lazy(() => import("./pages/subAdmin"));
const Promotion = lazy(() => import("./pages/promotion"));
const Customers = lazy(() => import("./pages/customers"));
const ChatHistory = lazy(() => import("./pages/chatHistory"));
const Login = lazy(() => import("../src/pages/profile/login"));
const Courses = lazy(() => import("./pages/services"));
const Notification = lazy(() => import("./pages/notification"));
const Products = lazy(() => import("./pages/products"));
const TestSchedule = lazy(() => import("./pages/test/test"));
const Profile = lazy(() => import("./pages/profile/profile"));
const ServiceEdit = lazy(() => import("./pages/services/serviceEdit"));
const JobsManagement = lazy(() => import("./pages/jobsManagement"));
const Transaction = lazy(() => import("./pages/transactionHistory"));
const ServiceCategory = lazy(() => import("./pages/serviceCategory"));
const ProductCatagory = lazy(() => import("./pages/productCatagory"));
const RequestCategory = lazy(() => import("./pages/requestCatagory"));
const ViewRatings = lazy(() => import("./pages/ratings/ratingDetail"));
const ServiceAdd = lazy(() => import("./pages/services/serviceAdd"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const ChatDetails = lazy(() => import("./pages/chatHistory/chatDetail"));
const EmailEdit = lazy(() => import("./pages/promotion/promotionEdit"));
const ServiceView = lazy(() => import("./pages/services/serviceView"));
const CustomerDetails = lazy(() => import("./pages/customers/detailView"));
const AddProducts = lazy(() => import("./pages/products/productAdd"));
const VendorDetails = lazy(() => import("./pages/vendors/vadorDetails"));
const EditProducts = lazy(() => import("./pages/products/productEdit"));
const ProductDetail = lazy(() => import("./pages/products/productDetail"));
const MyProfile = lazy(() => import("./pages/myProfile"));
const JobsDetail = lazy(() => import("./pages/jobsManagement/jobDetail"));
const DisputeDetails = lazy(() => import("./pages/disputes/disputeDetail"));
const EventDetail = lazy(() => import("./pages/view.eventDetail/eventDetail"));
const ServiceCatagoryEdit = lazy(() =>
  import("./pages/serviceCategory/seviceCatagoryEdit")
);
const SubAdminDetails = lazy(() =>
  import("./pages/subAdmin/subAdminDetails/index")
);
const Notificationdetails = lazy(() =>
  import("./pages/notification/notificationDetail")
);
const ViewRequestedCategory = lazy(() =>
  import("./pages/requestCatagory/requestCatagoryDetails")
);
const ViewTransaction = lazy(() =>
  import("./pages/transactionHistory/transactionHistoryDetail")
);

function Routes() {
  return (
    <div className="app">
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ratings" component={Ratings} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/vendors" component={Vendors} />
          <Route exact path="/chat" component={ChatHistory} />
          <Route exact path="/test" component={TestSchedule} />
          <Route exact path="/myservice" component={Courses} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/subadmin" component={SubAdmin} />
          <Route exact path="/subadmin/addsubadmin" component={AddSubAdmin} />
          <Route exact path="/disputes" component={Disputes} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/myproducts" component={Products} />
          <Route exact path="/promotion" component={Promotion} />
          <Route exact path="/jobdetails" component={JobsDetail} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/chatdetails" component={ChatDetails} />
          <Route exact path="/editpromotion" component={EmailEdit} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/editproducts" component={EditProducts} />
          <Route exact path="/ratingdetails" component={ViewRatings} />
          <Route exact path="/servicedetails" component={ServiceView} />
          <Route exact path="/vendordetails" component={VendorDetails} />
          <Route exact path="/disputedetails" component={DisputeDetails} />
          <Route exact path="/jobsmanagement" component={JobsManagement} />
          <Route exact path="/subadminview" component={SubAdminDetails} />
          <Route exact path="/productdetails" component={ProductDetail} />
          <Route exact path="/myservice/addservice" component={ServiceAdd} />
          <Route
            exact
            path="/editservicecatagory"
            component={ServiceCatagoryEdit}
          />
          <Route exact path="/editservice" component={ServiceEdit} />
          <Route exact path="/service-category" component={ServiceCategory} />
          <Route exact path="/product-category" component={ProductCatagory} />
          <Route exact path="/customerdetails" component={CustomerDetails} />
          <Route exact path="/requestcategory" component={RequestCategory} />
          <Route exact path="/myproducts/addproducts" component={AddProducts} />
          <Route exact path="/transactiondetails" component={ViewTransaction} />
          <Route
            exact
            path="/notificationdetails"
            component={Notificationdetails}
          />
          <Route
            exact
            path="/viewrequestedcategory"
            component={ViewRequestedCategory}
          />
          <Route exact path="/eventdetail/:id" component={EventDetail} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default Routes;
