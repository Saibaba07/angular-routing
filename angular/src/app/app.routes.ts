import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TodoComponent } from './todo/todo.component';
import { DirectiveComponent } from './directive/directive.component';

export const routes: Routes = routes
  { path: '', component: PortfolioComponent }, // ✅ Default route
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: '**', redirectTo: 'portfolio' } // ✅ Redirect unknown routes
];
