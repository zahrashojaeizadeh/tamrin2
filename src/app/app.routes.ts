import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import { Component } from '@angular/core';
import { HomePage } from './+pages/+public/home-page/home-page';
import { AboutPage } from './+pages/+public/about-page/about-page';
import { ProductsPage } from './+pages/+public/products-page/products-page';
import * as privatepages from './+pages/+private/products-page/products-page';
import { ContactPage } from './+pages/+public/contact-page/contact-page';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { OrdersPage } from './+pages/+private/orders-page/orders-page';

export const routes: Routes = [
{path:'public',component:PublicTemplate,children:[
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'products',component:ProductsPage},
    {path:'contact',component:ContactPage},
    {path:'',redirectTo:'home', pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
]},
{path:'private', component:PrivateTemplate,children:[
    {path:'dashboard',component:DashboardPage},
    {path:'users',component:UsersPage},
    {path:'products',component:privatepages.ProductsPage},
    {path:'orders', component:OrdersPage},
    {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
    {path:'**',redirectTo:'/error',pathMatch:'full'},
    
]},
{path:'error',component:UsersPage},
{path:'',redirectTo:'public',pathMatch:'full'},
{path:'**',redirectTo:'public'},
];
