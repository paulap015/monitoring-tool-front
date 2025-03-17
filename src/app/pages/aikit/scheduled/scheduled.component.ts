import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';

export interface Dessert {
  desc: string,
  keywords: string,
  status: string,
  interval: string,
  last_generation: string,
  next_generation: string,
  running: string,
  run_count: number,
  max_run_count: number
}

@Component({
  selector: 'app-scheduled',
  standalone: true,
  imports: [
    MatSortModule,
    PaginationComponent,
    BreadcrumbComponent,
    AikitHeadComponent
  ],
  templateUrl: './scheduled.component.html',
  styleUrl: './scheduled.component.css'
})
export class ScheduledComponent {
  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'scheduled',
  }
  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin.',
    alert_desc: 'AIKit Scheduled AI Generators allow you to schedule content to be generated by AI. Please review and edit before publishing for best results. This is not a substitute for human editing, but a drafting aid. Happy writing!'
  }

  constructor() {
    this.orderData = this.desserts.slice();
  }
  
  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];

  desserts: Dessert[] = [
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'Yes',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'Yes',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'Yes',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'Yes',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'Yes',
      run_count: 1,
      max_run_count: 5,
    },
    {
      desc: 'Write a rat story',
      keywords: 'lion',
      status: 'Active',
      interval: 'hourly',
      last_generation: '4:50 am , July 11 2024',
      next_generation: '5:50 am ,July 11 2024',
      running: 'No',
      run_count: 1,
      max_run_count: 5,
    }
  ];

  orderData: Dessert[];

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'desc': return compare(a.desc, b.desc, isAsc);
        case 'keywords': return compare(a.keywords, b.keywords, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'interval': return compare(a.interval, b.interval, isAsc);
        case 'last_generation': return compare(a.last_generation, b.last_generation, isAsc);
        case 'next_generation': return compare(a.next_generation, b.next_generation, isAsc);
        case 'running': return compare(a.running, b.running, isAsc);
        case 'run_count': return compare(a.run_count, b.run_count, isAsc);
        case 'max_run_count': return compare(a.max_run_count, b.max_run_count, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);
    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}