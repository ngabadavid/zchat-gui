import { Route } from "@angular/router";
import { StatusContainer } from "./status.container";

export const STATUS_ROUTES: Route[] = [
    {
        path:'',
        pathMatch: 'full',
        component: StatusContainer,
        children: []
    }
]