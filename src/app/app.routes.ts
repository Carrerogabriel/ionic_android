import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () => import("./home/home.page").then((m) => m.HomePage),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "cadastro/:id",
    loadComponent: () => import("./paginas/cadastro/cadastro.page").then((m) => m.CadastroPage),
  },
  {
    path: "login",
    loadComponent: () => import("./paginas/login/login.page").then((m) => m.LoginPage),
  },
  
  
  {
    path: "dashboard",
    loadComponent: () => import("./paginas/dashboard/dashboard.page").then((m) => m.DashboardPage),
  },
];
