import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDashboardComponent implements OnInit {
  @ViewChild('navLinksUl', {static: false}) navLinkUl: ElementRef<HTMLUListElement> = {} as ElementRef;
  assetsPath = '/assets/';

  linksArr: {
    linkAddr: string;
    content: string;
    iconPath: string;
  }[] = [
    {
      content: "Prayer",
      iconPath: this.assetsPath + 'mosque.svg',
      linkAddr: "prayer"
    },
    {
      content: "Dashboard",
      linkAddr: "dashboard",
      iconPath: this.assetsPath + "control-panel.svg"
    },
    {
      content: "Tasks",
      linkAddr: "tasks",
      iconPath: this.assetsPath + "note-book.svg"
    },
    {
      content: "Remainders",
      iconPath: this.assetsPath + "clock.svg",
      linkAddr: "remainders"
    },
    {
      content: "My Pocket",
      iconPath: this.assetsPath + "trophy.svg",
      linkAddr: "pocket"
    },
    {
      content: "Categories",
      iconPath: this.assetsPath + "select.svg",
      linkAddr: "categories"
    },
    {
      content: "Archives",
      iconPath: this.assetsPath + "archives.svg",
      linkAddr: "archives"
    },
    {
      content: "Trash",
      iconPath: this.assetsPath + "trash.svg",
      linkAddr: "trash"
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  addActiveClass(linkContent: string) {
    /*const liArr = Array.from(this.navLinkUl.nativeElement.childNodes)
    const navigationSpan = Array.from(this.navLinkUl.nativeElement.childNodes).map(navLink => {
      return Array.from(navLink.childNodes).map(anchors => {
        return Array.from(Array.from(anchors.childNodes)[0].childNodes)[1].textContent
      })
    })
    const currentPage = this.router.url.split('/')[2];
    */
    /*for (let link in navigationSpan) {
      if (currentPage === navigationSpan[link][0]?.toLowerCase()) {

      }
    }*/
  }

}

