import { OnInit, Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import axios from "axios";

export interface PeriodicElement {
    id: number;
    name: string;
    username: string;
    email: string;
    city: string;
}

/**
 * @title Table with filtering
 */
@Component({
    selector: "app-contact-information-table",
    templateUrl: "./contact-information-table.component.html",
    styleUrls: ["./contact-information-table.component.css"],
})
export class ContactInformationTableComponent implements OnInit {
    displayedColumns: string[] = ["id", "name", "username", "email", "city"];
    dataSource = new MatTableDataSource([]);

    ngOnInit() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            this.dataSource.data = res.data;
        });
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
