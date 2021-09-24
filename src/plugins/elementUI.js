/*
 * @Descripttion:
 * @version:
 * @Author: Ji AnKang
 * @Date: 2020-12-22 14:40:55
 * @LastEditors: Tom
 * @LastEditTime: 2021-09-24 12:03:35
 */
import {
  MessageBox,
  Message,
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Dialog,
  Button,
  Scrollbar,
  Select,
  Option,
  Loading,
  Switch,
  Timeline,
  TimelineItem,
  Card,
  Carousel,
  CarouselItem,
  Tooltip,
  Drawer,
  RadioGroup,
  Radio,
  Checkbox,
  DatePicker,
  Menu,
  Submenu,
  MenuItem,
  Notification,
  InfiniteScroll,
  CheckboxGroup,
  Tag,
  Container,
  RadioButton,
  MenuItemGroup,
  Tabs,
  TabPane
} from "element-ui";

const components = {
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Dialog,
  Button,
  Scrollbar,
  Select,
  Option,
  Loading,
  Switch,
  Timeline,
  TimelineItem,
  Card,
  Carousel,
  CarouselItem,
  Tooltip,
  Drawer,
  RadioGroup,
  Radio,
  Checkbox,
  DatePicker,
  Menu,
  Submenu,
  MenuItem,
  InfiniteScroll,
  CheckboxGroup,
  Tag,
  Container,
  RadioButton,
  MenuItemGroup,
  Tabs,
  TabPane
};

export default {
  install(Vue) {
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$message = Message;
    Vue.prototype.$notify = Notification;
    Object.keys(components).forEach(key => Vue.use(components[key]));
  }
};
