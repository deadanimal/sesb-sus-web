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
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-chart-bar text-pipeline"
  }, 
  {
    path: "/admin/manage-admin",
    title: "Manage",
    type: "sub",
    icontype: "fas fa-edit text-pipeline",
    collapse: "manage",
    isCollapsed: true,
    children: [
      { path: "customer", title: "Customer", type: "link" },
      { path: "billing", title: "Billing", type: "link" },
      { path: "usage", title: "Usage", type: "link" },
      { path: "report", title: "Report", type: "link" },
    ]
  }
];
