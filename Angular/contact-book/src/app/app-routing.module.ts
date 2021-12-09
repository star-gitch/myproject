import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactInformationTableComponent } from "./contact-information-table/contact-information-table.component";
import { HeaderComponent } from "./header/header.component";
import { UsersPostComponent } from "./users-post/users-post.component";
const routes: Routes = [
    {
        path: "",
        component: HeaderComponent,
        children: [
            { path: "user-post", component: UsersPostComponent },
            {
                path: "contact-information-table",
                component: ContactInformationTableComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
