import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    ScheduleModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
})
export class ScheduleModuleModule { }
