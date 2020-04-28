export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-chart-bar text-pipeline"
  }, 
  {
    path: "/user/manage",
    title: "Manage",
    type: "sub",
    icontype: "fas fa-edit text-pipeline",
    collapse: "manage",
    isCollapsed: true,
    children: [
      { path: "my-account", title: "My Account", type: "link" },
      { path: "billing", title: "Billing", type: "link" },
      { path: "usage", title: "Usage", type: "link" },
      { path: "service", title: "Service", type: "link" },
      { path: "outages", title: "Outages", type: "link" },
      { path: "comparison", title: "Comparison", type: "link" },
      { path: "efficiency", title: "Efficiency", type: "link" },
    ]
  }
];
