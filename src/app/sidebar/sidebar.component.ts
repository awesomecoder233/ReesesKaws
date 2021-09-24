import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit() {
    $("#menu-toggle").click(function(e: { preventDefault: () => void; }) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
