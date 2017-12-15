import { RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoEasyComponent } from './todo-exercice/todo-easy/todo-easy.component';

/**
 * Les routes que l'on pourra utiliser
 * ''                   : si l'on ne met pas de path
 * dashboard/:username  : l'accès au dashboard avec la redirection vers todo /: est un param
 * todo                 : l'exercice à faire
 * '**'                 : matchera tous les autres paths erronés
 *
 * Si l'on veut tester notre TodoEasyComponent, changer ConnexionComponent en TodoEasyComponent
 */
const appRoutes = [
    { path: '', component: ConnexionComponent /* TodoEasyComponent */ },
    { path: 'dashboard/:username', component: DashboardComponent },
    { path: 'todo', component: TodoEasyComponent },
    { path: '**', component: ConnexionComponent }
];

export const routes = RouterModule.forRoot(appRoutes);
