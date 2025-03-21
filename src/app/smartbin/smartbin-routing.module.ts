import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SmartbinListPage } from "./list/list.page";

const routes : Routes = [
    {
        path: '',
        component: SmartbinListPage,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports : [
        RouterModule
    ]
})
export class SmartbinPageRoutingModule{}