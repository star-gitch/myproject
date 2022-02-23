import Layout from "../components/layout";
import {
  Home,
  About,
  Product,
  Operation,
  Market,
  Media,
  Career,
  Blog,
  Policy,
  Thank,
  NotFound,
  Category,
  SubCategory,
  Goods,
  Article,
  CreateArticle,
  EditArticle,
  ProductList,
  Contact,
} from "../pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

export default function Routes() {
  return (
    <Router>
      <ToastProvider>
        <Switch>
          <Route exact path="/admin" component={Category} />
          <Route exact path="/admin/subcat" component={SubCategory} />
          <Route exact path="/admin/goods" component={Goods} />
          <Route exact path="/admin/blog" component={Article} />
          <Route exact path="/admin/blog/create" component={CreateArticle} />
          <Route exact path="/admin/blog/edit/:id" component={EditArticle} />
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/operation" component={Operation} />
            <Route exact path="/market" component={Market} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/Product/:name" component={ProductList} />
            <Route exact path="/thank" component={Thank} />
            <Route exact path="/notfound" component={NotFound} />
            <Route exact path="/contact" component={Contact} />
          </Layout>
        </Switch>
      </ToastProvider>
    </Router>
  );
}
