import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

/**
 * Example:
 * link: "<https://api.github.com/repositories/49767244/issues?page=29>"
 * rel: "rel="last""
 */
interface LinkRel {
  link: string;
  rel: string;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input()
  disable: boolean;

  @Input()
  linkHeader: string;

  @Input()
  currentPage: number;

  @Output()
  paginate: EventEmitter<number> = new EventEmitter();

  pageNumbers: number[];

  lastPage: number;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['linkHeader'] && this.linkHeader) {
      this.configurePaginator();
    }
  }

  emitPaginate(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginate.emit(pageNumber);
  }

  private configurePaginator() {
    const linkRels: LinkRel[] = [];
    const pageLinks: string[] = this.linkHeader.split(',');

    // regexp removes every (most importanly, the last one) ">" character in order to extrast page number more easily
    pageLinks.forEach(pageLink => {
      linkRels.push({
        link: pageLink.split(';')[0].replace(/>/g, ''),
        rel: pageLink.split(';')[1]
      });
    });

    this.getLastPageNumber(linkRels);
    this.getPageNumbers();
  }

  private getLastPageNumber(linkRels: LinkRel[]) {
    for (const linkRel of linkRels) {
      if (linkRel.rel.includes('last')) {
        this.lastPage = +linkRel.link.split('page=')[1];
      }
    }

    // This use case is present only if last page was loaded
    // Links that are retrieved in this case are "first" and "prev", therefore, last page is "prev" + 1
    if (!this.lastPage) {
      for (const linkRel of linkRels) {
        if (linkRel.rel.includes('prev')) {
          this.lastPage = +linkRel.link.split('page=')[1] + 1;
        }
      }
    }
  }

  private getPageNumbers() {
    let pages: number[] = [];

    switch (this.currentPage) {
      case 1: {
        for (let pageNumber = 1; pageNumber <= 3 && pageNumber <= this.lastPage; pageNumber++) {
          pages.push(pageNumber);
        }
        break;
      }
      case this.lastPage: {
        for (let pageNumber = this.lastPage - 2; pageNumber <= this.lastPage; pageNumber++) {
          pages.push(pageNumber);
        }
        break;
      }
      default: {
        pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
        break;
      }
    }

    this.pageNumbers = pages;
  }
}
