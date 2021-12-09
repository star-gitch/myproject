import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import axios from "axios";

export interface PeriodicElement {
    id: number;
    title: string;
    body: string;
}

@Component({
    selector: "app-users-post",
    templateUrl: "./users-post.component.html",
    styleUrls: ["./users-post.component.css"],
})
export class UsersPostComponent implements OnInit {
    displayedColumns: string[] = ["id", "title", "body"];
    dataSource = new MatTableDataSource([]);

    ngOnInit() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            this.dataSource.data = res.data;
        });
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
